<template>
	<div class="login_regiester">
		<!-- <transition  name="vux-pop-in"> -->
			<!-- .lightSpeedIn ,
.lightSpeedOut  -->
    <transition     leave-active-class="lightSpeedOut">
		<div  v-show="!go_password">
			<div class="input-list">
				<div class="title">
					登录/注册
				</div>
				<!-- <div class="icommon"><input type="text" name="" v-model="user.username" maxlength="11" value="" placeholder="请输入手机号码" /></div> -->
				<div class="icommon">
					<input class="password" type="tel"   @input = "inputchange"   v-model="user.username" maxlength="11" placeholder="请输入手机号码" />
					<img @click="clearInput($event)"      v-show = 'showClear'   class="hide" :src="imgUrl" />
				</div>
			</div>
			<Button :disabled="loginBtn"  @click.native="next">下一步</Button>
		</div>
		</transition>
				<!-- <transition  name="vux-pop-in"> -->
	 <transition enter-active-class="lightSpeedIn" >
			<div v-show="go_password&&!go_register">
			<div class="input-list">
				<div class="title">
					欢迎回来
				</div>
				<div class="icommon"><input class="password" :type="inputType" v-model="user.password" maxlength="16" placeholder="请输入登录密码" />
					<span @click="changeImg($event)"   class="hide">{{inputType  == "password"  ? '显示': '隐藏'}}</span>
				</div>
			</div>
			<Button :disabled="loginBtn"  @click.native="submit">登录</Button>
			<p class="go_regiester"   @click="forgetFun()">忘记密码？</p>
		</div>
		</transition>
        <transition enter-active-class="lightSpeedIn" >
             <div v-show="go_password&&go_register">
			<div class="input-list">
				 <div class="title" style="margin-bottom:3rem">
					注册
				</div>
				<!--<div class="icommon"><input class="password" :type="inputType" v-model="user.password" maxlength="16" placeholder="请输入登录密码" />
					<span @click="changeImg($event)"   class="hide">{{inputType  == "password"  ? '显示': '隐藏'}}</span>
				</div> -->
				<!-- <div class="icommon"><input type="text" name="" v-model="username" maxlength="11" value="" placeholder="请输入手机号码" /></div> -->
				<div class="icommon"><input type="text" name="" v-model="yzm" maxlength="6" value="" placeholder="请输入验证码" /><button class="getMa" @click.prevent="getYzm()" :disabled="findYzm">{{ codeTitle }}</button></div>
				<div class="icommon"><input type="text" v-model="inviteId" name="" value="" placeholder="请输入邀请码（选填）" /></div>
				<div class="icommon"><input class="password" type="password" v-model="password" name="" value="" placeholder="请设置登录密码" /></div>
				<!-- <div class="icommon"><input class="password" type="password" v-model="pwd" name="" value="" placeholder="请重复登录密码" /></div> -->
			
			<!--<button class="registerBtn" @click.prevent="nextFun()">下一步</button>-->
			<!-- <button class="registerBtn" @click="nextFun()">注册</button> -->
            <Button :style="{width:'95%'}"  @change="nextFun()">注册</Button>
			<p class="ser-res">注册即表示您同意
				<router-link to="/app_terminal/use_agreement">《集财理财注册协议》</router-link>
			</p>
			</div>
		</div>
        </transition>
		<!-- <div class="login-bottom clearfix">
			<p class="fl" @click="zhuFun()">立即注册？</p>
			<p class="fr" @click="forgetFun()" style="color: #666;">忘记密码？</p>
		</div> -->
	<v-footer  bgColor="#fff"	:style="{position: 'fixed',bottom: 0}"/>
	</div>
</template>


<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
import hide from "../../../assets/img/wechat/mine/clearInput.png";
import footer from "@/components/wechat/public/Footer";
import {
  usernameKey,
  authKey,
  authName,
  usernameName
} from "@/config/config.js";
export default {
  name: "register",
  components: {
    "v-footer": footer
  },
  data() {
    return {
      go_register: false,
      go_password: false,
      showClear: false,
      user: {
        //   17525896598
        username: "",
        password: "",
        phoneSys: "",
        sysVersion: ""
      },
      inputType: "password",
      imgUrl: hide,
      message: "",
      close: false,
      loginBtn: false,
      username: '',
				yzm: '',
				inviteId: '',
				close: false,
				findYzm: false,
				codeTitle: '获取验证码',
				show: true,
				hide: false,
				password: '',
				pwd: '',
				yzmIsRight:false,
    };
  },
  methods: {
    submit: function() {
      var _this = this;
      var formData = JSON.stringify(_this.user); //这里是你的表单数据
      if (!/^\w{6,16}$/.test(_this.user.password)) {
             _this.$Toast( "密码至少为6位")
        return;
      }

      _this.$http
        .post("/Product/login", {
          parameters: formData
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            var auth = res.data.obj.authorization;
            var username = res.data.obj.username;

            //新加：设置 cookie  username 和 auth  :start
            _this.$setCookie(
              authName,
              _this.$encryptByDES(auth, _this.$uncompile(authKey))
            );
            _this.$setCookie(
              usernameName,
              _this.$encryptByDES(username, _this.$uncompile(usernameKey))
            );
          // alert(0)
            if ( _this.$route.query.redirect) {
              // alert(1)
              // console.log(_this.$route.query.redirect)
              //   console.log(_this.$route)
                window.location.replace( _this.$route.query.redirect);
            } else {
              _this.$router.push({
                path: "/"
              });
            }
            //新加：设置 cookie  username 和 auth   :end
          } else if (res.data.end == "error") {
           _this.$Toast(res.data.message)
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    next() {

      if(this.user.username == ''){
          this.$Toast("请输入手机号码");
        return;
      }
      if (!/^[1][345789][0-9]{9}$/.test(this.user.username)) {
        this.$Toast("手机号格式有误");
        return;
      }
      this.$http
        .post("/Product/phoneIsRegister", {
          parameters: JSON.stringify({ username: this.user.username })
        })
        .then(res => {
          if (res.data.end == "ok") {
            if (res.data.data.isRegister == '1') {
              this.go_password = true;
              this.go_register = false;
            } else if (res.data.data.isRegister == '0') {

              this.go_password = true;
              this.go_register = true;

            }
          } else {
            this.$Toast(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeImg: function(e) {
      if (this.inputType == "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
    inputchange() {
      this.showClear = this.user.username === "" ? false : true;
    },
    clearInput() {
      // alert(1)
      this.user.username = "";
      this.showClear = false;
    },
    forgetFun: function() {
      this.$router.push({
        path: "forget_password",
        name: "forget_password"
      });
    },
     loginFun: function() {
      var _this = this;
      // _this.nextFun();
    //   var pwd = _this.pwd;
      var password = _this.password;
      var username = _this.user.username;

      var yzm = _this.yzm;
      if (!/^[1][345789][0-9]{9}$/.test(this.user.username)) {
           _this.$Toast( "用户名格式有误")
        return;
      }
      if (!/^[0-9]{6}$/.test(this.yzm)) {
 
            _this.$Toast( "验证码格式有误")
        return;
      }

      if (!/^\w{6,16}$/.test(this.password)) {
   
                _this.$Toast( "密码至少为6位")
        return;
      }
    //   if (this.password != this.pwd) {
    //     _this.close = true;
    //     _this.message = "密码不一致";
    //     setTimeout(function() {
    //       _this.close = false;
    //     }, 1800);
    //     return;
    //   }
      if (!_this.yzmIsRight) {
      _this.$Toast( "验证码错误")      
            return;
      }
    //   "pwd":"' + pwd + '",
      _this.$http
        .post("/Product/phoneRegisterUser", {
          parameters:
            '{"username":"' +
            username +
            '","type":"0","apiVersion":"","phoneId":"wx23a7bffb625dc3de", "pwd":"' + password + '","password":"' +
            password +
            '","registPlatform":"3","channel":"wechat"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
     //新加：设置 cookie  username 和 auth  :start
            var auth = res.data.obj.authorization;
            var username = res.data.obj.username;
       
            _this.$setCookie(
              authName,
              _this.$encryptByDES(auth, _this.$uncompile(authKey))
            );
            _this.$setCookie(
              usernameName,
              _this.$encryptByDES(username, _this.$uncompile(usernameKey))
            );
            if ( _this.$route.query.redirect) {
                location.replace( _this.$route.query.redirect);
            } else {
              _this.$router.push({
                path: "/"
              });
            }
            //新加：设置 cookie  username 和 auth   :end
          } else if (res.data.end == "error") {
  
               _this.$Toast( res.data.message)
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getYzm: function() {
      var _this = this;
      var username = _this.user.username;
      if (!/^[1][345789][0-9]{9}$/.test(username)) {
              _this.$Toast('请输入正确上的手机号码')
        return;
      }
      _this.$http
        .post("/Product/findPwdSendYzm", {
          parameters:
            '{"username":"' +
            username +
            '","type":"1","apiVersion":"","phoneId":"wx23a7bffb625dc3de"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            var wait = 60;

            function time() {
              if (wait == 0) {
                _this.findYzm = false;
                _this.codeTitle = "获取验证码";
                wait = 60;
              } else {
                _this.findYzm = true;
                _this.codeTitle = wait + "s后获取";
                wait--;
                setTimeout(function() {
                  time();
                }, 1000);
              }
            }
            time();
            _this.close = true;
            _this.message = res.data.message;
            setTimeout(function() {
              _this.close = false;
            }, 1800);
          } else {
            _this.close = true;
            _this.message = res.data.message;
            setTimeout(function() {
              _this.close = false;
            }, 1800);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    nextFun: function() {
      var _this = this;
      var username = _this.user.username;
      var yzm = _this.yzm;

      if (!/^[1][345789][0-9]{9}$/.test(username)) {
   
           _this.$Toast('用户名格式有误')
        return;
      }

      if (!/^[0-9]{6}$/.test(this.yzm)) {

           _this.$Toast('验证码格式有误')
        return;
      }
      _this.$http
        .post("/Product/findPwdYzmIsRight", {
          parameters:
            '{"username":"' +
            username +
            '","type":"1","apiVersion":"","phoneId":"wx23a7bffb625dc3de","yzm":"' +
            yzm +
            '"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.yzmIsRight = true;
            _this.loginFun();
          } else if (res.data.end == "error") {
                _this.$Toast( res.data.message)
            
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped   lang='less'  >
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/main.css");

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active,
.lightSpeedIn,
.lightSpeedOut {
  will-change: transform;
  transition: all 0.5s;
  // height: 100%;
  width: 100%;
  animation-duration: 0.8s;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

// 平滑  滑动
//   .vux-pop-out-enter {
//     opacity: 0;
//     transform: translate3d(-100%, 0, 0);
//   }

//   .vux-pop-out-leave-active {
//     opacity: 0;
//     transform: translate3d(100%, 0, 0);
//   }

//   .vux-pop-in-enter {
//     opacity: 0;
//     transform: translate3d(100%, 0, 0);
//   }

//   .vux-pop-in-leave-active {
//     opacity: 0;
//     transform: translate3d(-100%, 0, 0);
//   }

.lightSpeedIn {
  animation-name: lightSpeedIn;
  animation-timing-function: ease-out;
}
.lightSpeedOut {
  animation-name: lightSpeedOut;
  // animation-timing-function: ease-in
  animation-timing-function: ease-out;
}

@keyframes lightSpeedIn {
  0% {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 1;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
}

@keyframes lightSpeedOut {
  0% {
    opacity: 1;
  }

  to {
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
</style>
