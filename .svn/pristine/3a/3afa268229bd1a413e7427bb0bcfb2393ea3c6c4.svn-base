<template>
  <div class="product-detail">
    <transition   enter-active-class="slideInDown"       leave-active-class="slideOutUp">
     <!-- <transition    name="fade"> -->
          <vue-touch  tag="div"  v-on:swipeup  =  "showPage(true,$event)"   v-if = "page1"  >
        <div class="bang-mask" v-if="bang">
          <div class="bang-content">
            <p class="bang-title">提示</p>
            <p class="bang-common">您尚未绑定银行卡</p>
            <p class="bang-common">绑定完成后即可充值出借哦~</p>
            <div class="bangBtn clearfix">
              <span class="fl firstBtn" @click="bang = !bang">取消</span>
              <router-link class="fr secondBtn" :to="{path:'./bind_bank',query:{productId:this.$route.query.productId}}">前往绑卡</router-link>
            </div>
          </div>
        </div>
        <div class="bang-mask" v-if="set">
          <div class="bang-content">
            <p class="bang-title">提示</p>
            <p class="bang-common">您尚未设置交易密码</p>
            <p class="bang-common">设置完成后即可充值出借哦~</p>
            <div class="bangBtn clearfix">
              <span class="fl firstBtn" @click="set = !set">取消</span>
              <router-link class="fr secondBtn" :to="{path:'./personal_data'}">前往设置</router-link>
            </div>
          </div>
        </div>
        <div class="product-header">
          <p class="interest">
            <span class="yuan">{{ baseEarnings | fixNum }}</span>
            <var class="yuan-mum">%</var>
            <span class="jiali" v-if="isJiangLi == '1'">+{{ Number(jiangLiEarnings) | fixNum }}
              <var class="jiali-num">%</var>
            </span>
          </p>
          <p class="title-top">预期年化收益率 <img src="./../../../assets/img/wechat/product/tips2.png" alt=""></p>
   
        </div>

        <!-- 进度 -->
        <div class="progress">
          <!-- parseInt(wcjd*100) -->
          <span class="progress_text" :style="{width:getprogress(50)}">{{50+'%'}}</span>
          <span class="schedule schedule1" v-if="qxType != 99">
            <span class="progress-width">
              <var class="jindu-bg" style="background:'rgba(39.114.255,.2)" :style="'width:'+50+'%'"></var>
            </span>
          </span>
          <div class="product_desc">
            <div class="desc_item">
              <p class="desc_num">{{(parseInt(item.financingAmount)) |  toCurrencyString}}</p>
              <p>项目金额(元)</p>
            </div>
            <div class="desc_item">
              <p  class="desc_num">{{item.lcqx}}  </p>
              <p>借款期限</p>
            </div>
             <div class="desc_item">
             <p   class="desc_num">  {{   parseInt(leftCopies/100)  |  toCurrencyString}}</p> 
              <p>剩余可投(元)</p>
            </div>
          </div>

        </div>
        <!-- 进度 -->
        <div class="calculator">
          <div class="calculator-content">
            <div class="calculator-common border clearfi x">
              <span class="fl">金额</span>
                          <span class="fr" style="padding-left:1rem">元</span>
              <input class="fr " type="number"   v-model="message"  oninput="if(value.length>10)value=value.slice(0,10)" :placeholder="parseInt(atleastMoney/100) + '元起投'" />
  
            </div>
            <div class="calculator-common clearfix" style="border:none" >
              <var class="fl"    style="width: 60%"   >  <img    style="width: 1.6rem;"    src="./../../../assets/img/wechat/product/money$.png" alt="">    预期收益</var>
              <p class="fr">{{ message*(baseEarnings + Number(jiangLiEarnings))*tzqx/(365*100) | fixNum }}元</p>
            </div>

          </div>
        </div>


        <div class="algorithm">
          <p class="productIntroduction">
            <span> </span> 项目简介</p>
          <p>项目名称：{{title}} </p>
          <p> 产品类型：{{cplx}}</p>
          <p> 还款方式：{{fxfs}}</p>  
          <p>起息时间：T{{daytime}},募集成功{{daytime ? "次日" : "当日"}}计息</p>
          <p>募集期：{{ collectDays }}天 </p>
        </div>

        <p class="prompting">- 预期收益不代表实际收益，市场有风险，出借需谨慎 -</p>
        <p    class="more"     > <img src="../../../assets/img/wechat/product/more.png">向上拖动，查看更多详情</p>
   </vue-touch>



    </transition>

  






    <transition     enter-active-class="slideInUp"      leave-active-class="slideOutDown"   >
              <!-- <transition   name="fade" > -->
         <vue-touch  tag="div"  v-on:swipedown  =  "showPage(false,$event)"   v-if = "!page1"   >
        <product-detail :productId="this.$route.query.productId" :messageText='message' />
       </vue-touch>
    </transition>
    <transition name="fade">
      <div v-if="close" class="prompt">{{closeMeg}}</div>
    </transition>
    <div class="btn">
      <span class="botTitle">
        {{balance}}
      </span>
      <button class="btnBot" :class="{on:isShow}" @click="buyFun()">{{info}}</button>
      <!--<button class="btnBot " :class="{on:isShow==true}" v-if="parseInt(leftCopies/100) == 0" disabled>{{info}}</button>-->
    </div>
    <vue-public-alert :isAlert='isAlert' :isHistory='iscode' @alert-close='alertClose'></vue-public-alert>
  </div>
</template>

<script>
// import productDetail from "./details";
import productDetail from "./project_details";
import vueTouch from 'vue-touch'
// Vue.use(VueTouch, {name: 'v-touch'})
console.log(vueTouch)
import vuePublicAlert from "../public/publicAlert.vue";
import {
    usernameKey,
    authKey,
    authName,
    usernameName
} from "@/config/config.js";
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
    name: "hello",
    components: {
        vuePublicAlert,
        productDetail,
        vueTouch :vueTouch.component

    },
    data: function() {
        return {
            loading: false,
            isMove: 0,
            lock: true,
            startX: "",
            startY: "",
            page1: true,
            isAlert: false,
            closeMeg: "请阅读或同意 服务协议与项目详情",
            daytime: "",
            qxType: "",
            wcjd: "",
            baseEarnings: 0,
            jiangLiEarnings: "",
            leftCopies: "",
            productStatus: "",
            title: "",
            atleastMoney: "",
            message: "",
            lcqx: "",
            lock: false,
            unlock: true,
            close: false,
            bang: false,
            isBindBank: "",
            isPayPwd: "",
            productId: "",
            noLogin: "",
            set: false,
            isJiangLi: "",
            tzqx: "",
            isHistory: "",
            balance: "加载中..",
            allmoney: 0,
            info: "请先充值",
            isShow: true,
            cplx:'',
            fxfs:'',
            collectDays:'',
            item: {
                title: "",
                financingAmount: "", //项目总金额
                leftCopies: "", //剩余分数
                lcqx: "", //项目期限
                wcjd: "", //预期利率
                productStatus: ""
            },
            code: "4",
            iscode: "",
            isnum: "",
            islogin: false,
            message: ""
        };
    },
    watch: {
        message: function(val) {
            if (!this.islogin) return;
            if (this.leftCopies == 0 && this.productStatus == 0) {
                this.info = "已售罄";
                return;
            }
            if (parseFloat(this.allmoney) < parseInt(this.atleastMoney / 100)) {
                this.balance =
                    "余额不足" +
                    parseFloat(this.atleastMoney / 100).toFixed(2) +
                    "元";
                this.info = "请先充值";
                this.isShow = true;
            } else if (
                val > parseFloat(this.allmoney) &&
                this.leftCopies != 0
            ) {
                this.balance =
                    "余额不足" + parseFloat(this.message).toFixed(2) + "元";
                this.info = "请先充值";
                this.isShow = true;
                // setTimeout(function() {
                // 	this.$router.push({
                // 		name: "wx_recharge"
                // 	});
                // }, 2000);
            } else if (
                parseFloat(this.allmoney) >= val &&
                this.leftCopies != 0 &&
                val != 0 &&
                val != "" &&
                this.productStatus == 0
            ) {
                this.balance = "可用余额" + this.allmoney + "元";
                this.info = "立即出借";
                this.isShow = true;
            }
        },
        allmoney: function(val) {
            // console.log(1234656);
        }
    },
    filters: {
        fixNum(value) {
            //  return value.toFixed(2);
            var num2 = value.toFixed(3);
            return num2.substring(0, num2.lastIndexOf(".") + 3);
        }
    },
    created: function() {
        this.islogin = this.getxxx() ? true : false;
        this.loadData();
        if (this.islogin) {
            var _this = this;
            _this.iscode = true;

            // _this.$http
            //   .post("/Product/User/isActivate", {
            //     parameters: "{}"
            //   })
            //   .then(function(res) {
            //     _this.isnum = res.data.data.code;
            //     if (_this.isnum == "0") {
            //     } else if (_this.isnum == "1") {
            //       //					alert("新用户绑卡")
            //       _this.iscode = false;
            //     } else {
            //       //					alert("老用户激活")
            //       _this.iscode = true;
            //     }
            //   })
            //   .catch(function(err) {});
        }
    },
    methods: {
        showPage(bol,e){
             var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
            //  console.log(t)
            if(bol){
                   this.page1 = false;
            }else{
                      this.page1 = true;
            }
        },
        getprogress(number) {
            if (3 < number && number < 97) {
                return number + 3 + "%";
            } else {
                return number + "%";
            }
        },
        getxxx() {
            if (this.$getCookie(authName)) {
                return this.$decryptByDES(
                    this.$getCookie(authName),
                    this.$uncompile(authKey)
                );
            }
        },
        loadData: function() {
            this.productId = this.$route.query.productId;
            var _this = this;

            _this.$http
                .post("/Product/getProductById", {
                    parameters: '{"productId":"' + _this.productId + '"}'
                })
                .then(function(res) {
                    if (res.data.end == "ok") {
                        _this.daytime = Number(res.data.obj.calcInterestWay);
                        _this.qxType = res.data.obj.qxType;
                        _this.wcjd = res.data.obj.wcjd;
                        _this.baseEarnings = res.data.obj.baseEarnings;
                        _this.jiangLiEarnings = res.data.obj.jiangLiEarnings;
                        _this.leftCopies = res.data.obj.leftCopies;
                        _this.productStatus = res.data.obj.productStatus;
                        _this.title = res.data.obj.title;
                        _this.atleastMoney = res.data.obj.atleastMoney;
                        _this.lcqx = res.data.obj.lcqx;
                        _this.isJiangLi = res.data.obj.isJiangLi;
                        _this.tzqx = res.data.obj.tzqx;
                        // 产品类型
                        _this.cplx =  res.data.obj.cplx;
                        _this.fxfs = res.data.obj.fxfs;
                        _this.collectDays =  res.data.obj.collectDays;

                        //项目详情
                        _this.item.title = res.data.obj.title;
                        _this.item.financingAmount = (
                            res.data.obj.financingAmount / 100
                        ).toFixed(2);
                        _this.item.leftCopies = res.data.obj.leftCopies / 100;
                        _this.item.lcqx = res.data.obj.lcqx;
                        _this.item.wcjd = res.data.obj.wcjd * 100;
                        _this.item.productStatus = res.data.obj.productStatus;

                        if (_this.item.leftCopies == 0) {
                            _this.info = "已售罄1";
                            //   _this.balance =
                            //     "余额不足" +
                            //     parseFloat(_this.atleastMoney / 100).toFixed(2) +
                            //     "元";
                            //   _this.isShow = false;
                            _this.$http
                                .post("/Product/User/showMyAccountNew", {
                                    parameters: "{}"
                                })
                                .then(function(res) {
                                    if (res.data.end == "ok") {
                                        _this.allmoney = parseFloat(
                                            res.data.obj.leftMoney / 100
                                        ).toFixed(2);
                                        if (
                                            parseFloat(_this.allmoney) >=
                                            parseInt(_this.atleastMoney / 100)
                                        ) {
                                            _this.balance =
                                                "可用余额" +
                                                _this.allmoney +
                                                "元";
                                            _this.isShow = false;
                                        } else if (
                                            parseFloat(_this.allmoney) <
                                            parseInt(_this.atleastMoney / 100)
                                        ) {
                                            _this.balance =
                                                "余额不足" +
                                                parseFloat(
                                                    _this.atleastMoney / 100
                                                ).toFixed(2) +
                                                "元";
                                            _this.isShow = false;
                                        }
                                    }
                                })
                                .catch(function(err) {});
                        } else {
                            if (_this.islogin) {
                                _this.$http
                                    .post("/Product/User/showMyAccountNew", {
                                        parameters: "{}"
                                    })
                                    .then(function(res) {
                                        if (res.data.end == "ok") {
                                            _this.allmoney = parseFloat(
                                                res.data.obj.leftMoney / 100
                                            ).toFixed(2);

                                            if (
                                                parseFloat(_this.allmoney) >=
                                                parseInt(
                                                    _this.atleastMoney / 100
                                                )
                                            ) {
                                                _this.info = "立即出借";
                                                _this.balance =
                                                    "可用余额" +
                                                    _this.allmoney +
                                                    "元";
                                                _this.isShow = true;
                                            } else if (
                                                parseFloat(_this.allmoney) <
                                                parseInt(
                                                    _this.atleastMoney / 100
                                                )
                                            ) {
                                                _this.info = "请先充值";
                                                _this.balance =
                                                    "余额不足" +
                                                    parseFloat(
                                                        _this.atleastMoney / 100
                                                    ).toFixed(2) +
                                                    "元";
                                                _this.isShow = true;
                                            }
                                        }
                                    })
                                    .catch(function(err) {});
                            } else {
                                _this.balance =
                                    "余额不足" +
                                    parseInt(_this.atleastMoney / 100).toFixed(
                                        2
                                    ) +
                                    "元"; //
                            }
                        }

                        if (_this.item.productStatus == 1) {
                            _this.info = "已售罄";
                        } else if (_this.item.productStatus == 2) {
                            _this.info = "结算中";
                        } else if (_this.item.productStatus == 3) {
                            _this.info = "已还款";
                        } else if (_this.item.productStatus == -1) {
                            _this.info = "未审核";
                        } else if (_this.item.productStatus == 4) {
                            _this.info = "已流标";
                        } else if (_this.item.productStatus == 5) {
                            _this.info = "已满标";
                        } else if (_this.item.productStatus == 6) {
                            _this.info = "还款中";
                        } else if (_this.item.productStatus == -3) {
                            _this.info = "排队中";
                        }
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
            //					});
            //判断起投金额和剩余金额
        },
        buyFun: function() {
            var _this = this;
            if (
                _this.info == "已售罄" ||
                _this.info == "结算中" ||
                _this.info == "已还款" ||
                _this.info == "未审核" ||
                _this.info == "已流标" ||
                _this.info == "已满标" ||
                _this.info == "还款中" ||
                _this.info == "排队中"
            ) {
                return;
                // 123123
            } else if (!this.islogin) {
                // else if (_this.unlock) {
                //   _this.closeMeg = "请阅读或同意 服务协议与项目详情";
                //   _this.close = true;

                //   setTimeout(function() {
                //     _this.close = false;
                //   }, 2000);
                //   return;
                // }
                //未登录
                sessionStorage.removeItem("isAlert");
                // 删除首页弹窗
                var href = window.btoa(location.href);
                // location.href = `/#/wechat/homepage/login?redirect=${href}`
                location.replace(`/#/wechat/homepage/login?redirect=${href}`);
            } else if (_this.info == "请先充值") {
                //_this.closeMeg = "余额不足";
                if (_this.isnum != 0) {
                    _this.isAlert = true;
                    return;
                } else {
                    _this.$router.push({
                        name: "wx_recharge"
                    });
                }
            } else {
                if (_this.message == "") {
                    _this.close = true;
                    _this.closeMeg = "请输入出借金额";
                    setTimeout(function() {
                        _this.close = false;
                    }, 2000);
                    return;
                } else if (_this.message < parseInt(_this.atleastMoney / 100)) {
                    _this.close = true;

                    _this.closeMeg =
                        "起投金额为" +
                        parseInt(_this.atleastMoney / 100) +
                        "元";
                    setTimeout(function() {
                        _this.close = false;
                    }, 2000);

                    return;
                } else if (parseInt(_this.message) % 100 > 0) {
                    _this.closeMeg = "出借金额必须为100的整数倍";
                    _this.close = true;
                    setTimeout(function() {
                        _this.close = false;
                    }, 2000);
                    return;
                } else {
                    if (_this.isnum != 0) {
                        _this.isAlert = true;
                        return;
                    }
                    _this.$http
                        .post("/Product/User/showMyAccountNew", {
                            parameters: "{}" //'+ auth +'
                        })
                        .then(function(res) {
                            if (res.data.end == "ok") {
                                _this.isBindBank = res.data.obj.isBindBank;
                                _this.isPayPwd = res.data.obj.isPayPwd;
                                _this.isHistory = res.data.obj.isHistory;

                                //									if(_this.isnum != 0) {//_this.isBindBank == "0"
                                //										_this.bang = true;
                                //									} else if(_this.isBindBank == "1") {
                                _this.$router.push({
                                    name: "go_invest",
                                    query: {
                                        productId: _this.productId,
                                        moneyData: _this.message,
                                        productMessage: _this.item,
                                        baseEarnings: _this.baseEarnings
                                    }
                                });
                                //									}
                            }
                        })
                        .catch(function(err) {
                            console.log(err);
                        });
                }
            }
        },

        //金額全投
        allMoney() {
            this.message = this.allmoney;
        },
        alertClose() {
            this.isAlert = false;
        },
    }
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/product_detail.less");
</style>