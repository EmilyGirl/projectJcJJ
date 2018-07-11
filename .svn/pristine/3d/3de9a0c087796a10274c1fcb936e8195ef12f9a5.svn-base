<template>
	<div class="zeek" id="zeek">
		<ul class="wrapped_title">
			<li v-for="(wrap,index) in wrapped" :class="{'wrap_li':selected==index}" @click="switchover(index)">{{wrap.title}}</li>
			<li class="clear"></li>
		</ul>
		<div class="wrapped_box">
			  <div class="zeek_rewards" style="height:100rem" v-show="selected == 0">
                 <div class="remind">- 预期收益不代表实际收益，市场有风险，出借需谨慎 -</div>
                 <!-- 项目说明 -->
                 <div class="repayaccount">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">项目说明</div> 
                 <div class="clear"></div>
                 <div class="repaycontent" v-if="introduce.newInfo">{{introduce.newInfo[1].title}}</div>
                 </div>
                 <!-- 项目简介 -->
                 <div class="repayaccount">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">项目信息</div> 
                 <div class="clear"></div>
                 <div class="repayoneinfo1">
                   <span>项目名称&nbsp;:&nbsp;</span><span v-if="introduce.newInfo">{{introduce.newInfo[0].title}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>产品类型&nbsp;:&nbsp;</span><span>{{introduce.cplx}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>项目总额&nbsp;:&nbsp;</span><span>{{introduce.financingAmount}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>预期年化&nbsp;:&nbsp;</span><span>{{ Number(introduce.baseEarnings) | fixNum }}</span><span>%</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>借款期限&nbsp;:&nbsp;</span><span>{{introduce.lcqx}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>还款方式&nbsp;:&nbsp;</span><span>{{introduce.fxfs}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>起息时间&nbsp;:&nbsp;</span><span>T{{introduce.daytime}},募集成功{{introduce.daytime ? "次日"
              : "当日"}}计息</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>借款用途&nbsp;:&nbsp;</span><span>{{introduce.jkyt}}</span>
                 </div>
                 <div  v-if='showinfo==false'> 
                   <div class="repayoneinfo1">
                   <span>募集期&nbsp;:&nbsp;</span><span>{{introduce.collectDays}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>撮合进度&nbsp;:&nbsp;</span><span>{{ (parseInt(introduce.wcjd*100)) }}%</span>
                 </div>
                 <div class="repayoneinfo1">
                   <span>发起时间&nbsp;:&nbsp;</span><span>{{introduce.money}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>募集结束时间&nbsp;:&nbsp;</span><span>{{getDate(introduce.endTime)[0]}}</span>
                 </div>
                 <div class="repayoneinfo1">
                   <span>担保措施&nbsp;:&nbsp;</span><span>{{introduce.money}}</span>
                 </div>
                 <div class="repayoneinfo1">
                   <span>还款来源&nbsp;:&nbsp;</span><span>{{introduce.money}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>还款保障&nbsp;:&nbsp;</span><span>{{introduce.money}}</span>
                 </div>
                 </div>
                 <div v-if='showinfo'   class="watchmore" @click="more">
                   <img style="width:1.4rem" src="../../../assets/img/wechat/mine/icon_shanghua.png" alt="">
                   查看更多</div>
                 <div v-if='!showinfo'   class="watchmore" @click="more">收起</div>
               </div>     
                
               <!-- 风险提示 -->
                 <div class="repayaccount">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">风险提示</div> 
                 <div class="clear"></div>
                 <div class="repaycontent">1、平台从借款人和第三方处获得的信息可能不准确或不
                能准确反映其实际情况，可能影响评估正确性；<br/>
                2、平台依赖于自己的信用评估模型来评估用户的信誉
                度，模型可能存在缺陷或者无效；<br/>
                3、更多提示详见 
                <span  style="color: rgb(89,147,255);" @click="tourl(introduce.xxwH5Url)">《出借风险说明和禁止性行为说明书》</span></div>
               </div>
               <!-- 综合评级 -->
                <div class="repayaccount">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">综合评级</div> 
                 <div class="clear"></div>
                 <div class="repaycontent">根据借款人提供基本资料，以及通过第三方公开渠道对
                  借款人的涉诉和行政处罚情况进行查询，在平台能力范
                  围内，根据平台自有的信用评估模型对本项目评估；
                  适合的出借人评测结果为：
                <span>{{introduce.resultLevel}}</span>
                （内部评级，
                仅限参考）借款人风险评估结果为：
                <span>{{introduce.borrowLevel}}</span>
                </div>
                <div class="tishi" @click="warning">查看您的出借人风险提示</div>
               </div>
               <!-- 协议范本 -->
               <div class="repayaccount">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">协议范本</div> 
                 <div class="clear"></div>
                 <div @click="tourl(introduce.detailsUrl)"  style="color: #3291FF;line-height: 2.5rem;margin-top: 1rem;">《{{introduce.protocolName}}》</div>
               </div>
                <!-- 借款人信息 -->
                 <div class="repayaccount">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">借款人基本信息</div> 
                 <div class="clear"></div>
                 <div class="repayoneinfo1">
                   <span>姓名&nbsp;:&nbsp;</span><span>{{introduce.borrowerName}}</span>
                 </div>
                  <div class="repayoneinfo1" v-if="introduce.borrowerType==0">
                   <span>手机号码&nbsp;:&nbsp;</span><span>{{introduce.mobile}}</span>
                 </div>
                 <div class="repayoneinfo1" v-if="introduce.borrowerType==1">
                   <span>手机号码&nbsp;:&nbsp;</span><span>{{introduce.contactPhone}}</span>
                 </div>
                  <div class="repayoneinfo1" v-if="introduce.borrowerType==0">
                   <span>银行卡号&nbsp;:&nbsp;</span><span>{{introduce.bankcardNoPrivate}}</span>
                 </div>
                 <div class="repayoneinfo1" v-if="introduce.borrowerType==1">
                   <span>银行卡号&nbsp;:&nbsp;</span><span>{{introduce.bankcardNo}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>婚姻状况&nbsp;:&nbsp;</span><span>{{introduce.isMarry}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>籍贯&nbsp;:&nbsp;</span><span>{{introduce.nativePlace}}</span>
                 </div>
                  <div class="repayoneinfo1" v-if="introduce.borrowerType==0">
                   <span>主体性质&nbsp;:&nbsp;</span><span>个人</span>
                 </div>
                  <div class="repayoneinfo1" v-if="introduce.borrowerType==1">
                   <span>主体性质&nbsp;:&nbsp;</span><span>企业</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>性别&nbsp;:&nbsp;</span><span>{{introduce.sex}}</span>
                 </div>
                  <div class="repayoneinfo1" v-if="introduce.borrowerType==0">
                   <span>证件号&nbsp;:&nbsp;</span><span>{{introduce.idCardNo}}</span>
                 </div>
                 <div class="repayoneinfo1" v-if="introduce.borrowerType==1">
                   <span>证件号&nbsp;:&nbsp;</span><span>{{introduce.businessLicense}}</span>
                 </div>
             
                   <div class="repayoneinfo1" v-if="introduce.borrowerType==0">
                   <span>年龄&nbsp;:&nbsp;</span><span>{{introduce.age}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>所属行业&nbsp;:&nbsp;</span><span>{{introduce.industry}}</span>
                 </div>
                 <div class="repayoneinfo1">
                   <span>年收入&nbsp;:&nbsp;</span><span>{{introduce.yearlySalaries}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>负债情况&nbsp;:&nbsp;</span><span>{{introduce.debtSituation}}</span>
                 </div>
                 <div class="repayoneinfo1" v-if="introduce.borrowerType==0">
                   <span>征信逾期次数&nbsp;:&nbsp;</span><span>{{introduce.overdueNumber}}</span>
                 </div>
                 <div class="repayoneinfo1" v-if="introduce.borrowerType==0">
                   <span>征信逾期金额&nbsp;:&nbsp;</span><span>{{introduce.overdueMoney}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>在其他网络借贷平台借款情况&nbsp;:&nbsp;</span><span>{{introduce.otherPlatformCase}}</span>
                 </div>
                  <div class="repayoneinfo1" v-if="introduce.borrowerType==0">
                   <span>工作性质&nbsp;:&nbsp;</span><span>{{introduce.jobNature}}</span>
                 </div>
                 <div class="repayoneinfo1">
                   <span>在平台逾期次数&nbsp;:&nbsp;</span><span>{{introduce.platformOverdueNumber}}</span>
                 </div>
                  <div class="repayoneinfo1">
                   <span>在平台逾期总金额&nbsp;:&nbsp;</span><span>{{introduce.platformOverdueMoney}}</span>
                 </div>
               </div>
               <!-- 资质审核 -->
                <div class="repayaccount" v-if="introduce.shenlist">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">资质审核</div> 
                 <div class="clear"></div>
                 <div class="repayoneinfo">
                   <span style="display:inline-block">审核资料</span><span style="display:inline-block;float:right">审核结果</span>
                 </div>
                  <div class="repayoneinfo" v-for="(value, key, index) in introduce.shenlist">
                   <span style="display:inline-block">{{key}}</span><span style="display:inline-block;float:right">{{value}}</span>
                 </div>
               </div>
                 <!-- 抵质押物信息 -->
                <div class="repayaccount" v-if="introduce.loan">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">抵质押物信息（车贷）</div> 
                 <div class="clear"></div>
                  <div class="repayoneinfo" v-for="(value, key, index) in introduce.loan">
                   <span style="display:inline-block">{{key}}</span><span style="display:inline-block;float:right">{{value}}</span>
                 </div>
               </div>
                <!-- 贷后信息 -->
                <div class="repayaccount" v-if="introduce.hhxx">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">贷后信息</div> 
                 <div class="clear"></div>
                  <div class="repayoneinfo" v-for="(value, key, index) in introduce.hhxx">
                   <span style="display:inline-block">{{key}}</span><span style="display:inline-block;float:right">{{value}}</span>
                 </div>
               </div>
               <!-- 图文信息 -->
                <div class="repayaccount1">
                 <div class="repayLine1"></div> 
                 <div class="repayTitle1">图文信息</div> 
                 <div class="clear"></div>
                  <div class="infoimg-box">
                  <div class="imginfo">
                  <img src="../../../assets/img/wechat/mine/c01.png" alt="">
                   <img src="../../../assets/img/wechat/mine/c01.png" alt="">
                   <img src="../../../assets/img/wechat/mine/c01.png" alt="">
                   <img src="../../../assets/img/wechat/mine/c01.png" alt="">
                   <img src="../../../assets/img/wechat/mine/c01.png" alt="">
                   <img src="../../../assets/img/wechat/mine/c01.png" alt="">
                   <img src="../../../assets/img/wechat/mine/c01.png" alt="">
                   <img src="../../../assets/img/wechat/mine/c01.png" alt="">      
                  </div>
                  </div>
               </div>

			</div>
		    <div class="zeek_rewards" style="height:70rem" v-show="selected == 1">
          <div class="huankuan">项目总额为{{introduce.financingAmount}}元，如满标日为{{getDate(introduce.endTime)[0]}}，还款方式为{{introduce.fxfs}},预计回款时间和回款本息参考如下：</div>
            <div class="repay">
            <div class="repayLine"></div>
            <div class="repayTitle">第一期</div>
            <div class="clear"></div>
              <div class="repay1 repayTop">预计还款时间：<span>
                {{ ((new Date()).valueOf() + introduce.dayTime*(24*60*60*1000) + introduce.lcqx*24*60*60*1000) | formatDate }}
                </span>  </div>
              <div class="repay1">预计还款本息：<span>{{Number(messageText)+messageText*(introduce.baseEarnings + Number(introduce.jiangLiEarnings))*introduce.tzqx/(365*100) | fixNum}}</span> 元</div>
              <div class="repay1" v-if="introduce.productStatus==3">还款状态：<span>还款中</span></div>
              <div class="repay1" v-else>还款状态：<span>-</span></div>
             </div>
             <div class="repayinfo">
               注：<br/>
              1、上诉还款计划未借款人不会提前还款的情况；如借款人提前还<br/>
              款，项目提前结束，剩余本金和实际持有有效期的收益会回到您的<br/>
              账户中。<br/>
              2、因计算中存在小数点后两位舍尾，具体以您的投资记录为准。<br/>
              </div>
        
            </div>
            <div class="zeek_rewards" style="height:70rem" v-show="selected == 2">
			         <record-jie :productId='productId'></record-jie>
           </div>
            
			
        </div>
        <!-- 出借人风险弹框提示 -->
        <div class="risk" v-if="risk">
          <!-- 没有评分 -->
        <div class="tishifenxian" v-if="norisk">
          <div class="fenxian_tishi1">提示</div>
          <div class="fenxian_tishi2">您还没进行风险等级评测，请在<br/>
        评测后再进行出借操作</div>
     <div class="fengxian_tishi3">
      <div class="fengxian_tishi31" @click="close">取消</div>
      <div class="fengxian_tishi32" @click="evalute">确定</div> 
      <div class="clear"></div>
     </div>
        </div>
        <div class="tishifenxian" v-if="isrisk">
          <div class="fenxian_tishi1">提示</div>
          <div class="fenxian_tishi2">您的风险评测等级为&nbsp;:&nbsp;{{evaluating.type}}<br/>
          {{evaluating.text}}
          </div>
      <div class="fengxian_tishi3">
      <div class="fengxian_tishi33" @click="close">好的</div> 
      <div class="clear"></div>
     </div>
    </div>
    </div>
	</div>
</template>

<script>
import recordJie from "./record";
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
import { formatDate } from '../../../assets/js/wechat/date.js';
export default {
  props: {
    productId: {
      type: String
    },
    messageText: {
      type: String
    }
  },
  components: {
    recordJie
  },
  data() {
    return {
      pageSize: 10,
      showinfo: true,
      selected: 0,
      currentPage: 1,
      risk: false,
      norisk: false,
      isrisk: false,
      evaluating: {
        type: "",
        level: {},
        text: ""
      },
      wrapped: [
        {
          title: "项目介绍"
        },
        {
          title: "还款计划"
        },
        {
          title: "出借记录"
        }
      ],
      planlist: [
        {
          name: "章**",
          time: "2018-04-23 15:00:00",
          money: "633.00元"
        },
        {
          name: "章**",
          time: "2018-04-23 15:00:00",
          money: "633.00元"
        },
        {
          name: "章**",
          time: "2018-04-23 15:00:00",
          money: "633.00元"
        }
      ],
      info: {
        time: "2018-02-03",
        money: "175,663.00",
        status: "-"
      },
      introduce: {
        fxfs: "",
        dayTime: "",
        finishTime: "",
        endTime: "",
        shenlist: [],
        loan: [],
        hhxx: [],
        name: "集财小微融季度一号",
        money: "10000",
        jkyt: "", //资金用途
        financingAmount: "", //总金额
        cplx: "", //产品类型
        wcjd: "",
        protocolName: "", //协议名称
        baseEarnings: "", //年化收益
        collectDays: "", //募集期
        xxwH5Url: "", //说明书
        borrowLevel: "",
        resultLevel: "",
        borrowerName: "", //借款人姓名
        borrowerType: "", //主体性质
        industry: "", //所属行业
        yearlySalaries: "", //年收入
        debtSituation: "",
        age: "", //年纪
        sex: "",
        bankcardNo: "",
        borrowerName: "",
        borrowerType: "",
        debtSituation: "",
        idCardNo: "",
        industry: "",
        isMarry: "",
        jobNature: "",
        mobile: "",
        nativePlace: "",
        otherPlatformCase: "",
        overdueMoney: "",
        businessLicense: "",
        contactPhone: "",
        bankcardNo: "",
        place: "",
        legal: "",
        legalIdCardNo: "",
        auth: "",
        productIdBl: ""
      }
    };
  },

  created: function() {
    this.auth = this.$route.query.auth;
    this.productIdBl = this.$route.query.productId;
    if (this.productIdBl) {
      //  客户端
      this.productId = this.productIdBl;
    }
    this.loaddata();
  },

  mounted() {},
  methods: {
    //   时间转换**************************
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    getDate(shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      var time1 = this.add0(m) + "月" + this.add0(d) + "日";
      var time2 = y + "-" + this.add0(m) + "-" + this.add0(d);
      var timess = [time1, time2];
      // + " "+ this.add0(h) + ":" + this.add0(mm)
      return timess;
      // y + "-" +
      // this.add0(m) + ":" + this.add0(d) + " "
      // + this.add0(h) + ":" + this.add0(mm)
    },
    loaddata: function() {
      var _this = this;
      if (_this.selected == 0) {
        _this.$http
          .post("/Product/getProductById", {
            parameters: '{"productId":"' + _this.productId + '"}'
          })
          .then(function(res) {
            if (res.data.end == "ok") {
              _this.introduce.daytime = Number(res.data.obj.calcInterestWay);
              _this.introduce.jkyt = res.data.obj.jkyt;
              _this.introduce.baseEarnings = res.data.obj.baseEarnings;
              _this.introduce.jiangLiEarnings = res.data.obj.jiangLiEarnings;
              _this.introduce.leftCopies = res.data.obj.leftCopies;
              _this.introduce.cplx = res.data.obj.cplx;
              _this.introduce.newInfo = res.data.obj.newInfo;
              _this.introduce.protocolName = res.data.obj.protocolName;
              _this.introduce.financingAmount = (
                res.data.obj.financingAmount / 100
              ).toFixed(2);
              //  借款期限  lcqx collectDays xxwH5Url resultLevel detailsUrl borrowLevel
              _this.introduce.lcqx = res.data.obj.lcqx;
              _this.introduce.collectDays = res.data.obj.collectDays;
              _this.introduce.xxwH5Url = res.data.obj.xxwH5Url;
              _this.introduce.resultLevel = res.data.obj.resultLevel;
              _this.introduce.detailsUrl = res.data.obj.detailsUrl;
              _this.introduce.baseEarnings = res.data.obj.baseEarnings;
              _this.introduce.productStatus = res.data.obj.productStatus;
              _this.introduce.borrowLevel = res.data.obj.borrowLevel;
              _this.introduce.resultLevel = res.data.obj.resultLevel;
              _this.introduce.endTime = res.data.obj.endTime;
              _this.introduce.finishTime = res.data.obj.finishTime;
              _this.introduce.fxfs = res.data.obj.fxfs;
              _this.introduce.tzqx = res.data.obj.tzqx;
              // 借款人信息tzqx
              _this.introduce.age = res.data.obj.borrowerInfo.age;
              _this.introduce.bankcardNo = res.data.obj.borrowerInfo.bankcardNo;
              _this.introduce.borrowerName =
                res.data.obj.borrowerInfo.borrowerName;
              _this.introduce.borrowerType =
                res.data.obj.borrowerInfo.borrowerType;
              _this.introduce.debtSituation =
                res.data.obj.borrowerInfo.debtSituation;
              _this.introduce.idCardNo = res.data.obj.borrowerInfo.idCardNo;
              _this.introduce.industry = res.data.obj.borrowerInfo.industry;
              _this.introduce.isMarry = res.data.obj.borrowerInfo.isMarry;
              _this.introduce.sex = res.data.obj.borrowerInfo.sex;
              _this.introduce.jobNature = res.data.obj.borrowerInfo.jobNature;
              _this.introduce.mobile = res.data.obj.borrowerInfo.mobile;
              _this.introduce.nativePlace =
                res.data.obj.borrowerInfo.nativePlace;
              _this.introduce.otherPlatformCase =
                res.data.obj.borrowerInfo.otherPlatformCase;
              _this.introduce.overdueMoney =
                res.data.obj.borrowerInfo.overdueMoney;
              _this.introduce.businessLicense =
                res.data.obj.borrowerInfo.businessLicense;
              _this.introduce.contactPhone =
                res.data.obj.borrowerInfo.contactPhone;
              _this.introduce.bankcardNo = res.data.obj.borrowerInfo.bankcardNo;
              _this.introduce.place = res.data.obj.borrowerInfo.place;
              _this.introduce.legal = res.data.obj.borrowerInfo.legal;
              _this.introduce.legalIdCardNo =
                res.data.obj.borrowerInfo.legalIdCardNo;
              _this.introduce.otherPlatformCase =
                res.data.obj.borrowerInfo.otherPlatformCase;
              // 资质审核
              _this.introduce.shenlist = res.data.obj.zzsh;
              //  车贷
              _this.introduce.loan = res.data.obj.dyhxx;
              // 贷后信息
              _this.introduce.hhxx = res.data.obj.hhxx;
            }
          });
      }
    },
    // ****************************************
    switchover: function(index) {
      this.selected = index;
      this.loaddata();
    },
    tourl: function(index) {
      window.location.href = index;
    },
    close: function() {
      let _this = this;
      _this.risk = false;
    },
    warning: function() {
      let _this = this;
      _this.$http
        .post("/Product/User/queryResultSource", {
          parameters: "{}"
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.risk = true;
            _this.isrisk = true;
            _this.evaluating.type = res.data.borrowLevel.type;
            _this.evaluating.level = res.data.borrowLevel.level;
            //  比较风险评估是否匹配
            var strs = new Array(); //定义一数组
            strs = _this.evaluating.level.split(","); //字符分割
            for (let i in strs) {
              if (_this.introduce.borrowLevel == strs[i]) {
                _this.evaluating.text = "当前项目与您的风险评估等级匹配";
              } else {
                _this.evaluating.text = "当前项目与您的风险评估等级不匹配";
              }
            }
          } else if (res.data.end == "error") {
            _this.risk = true;
            _this.norisk = true;
          }
        });

      // this.risk=true;
    },
    more: function() {
      this.showinfo = !this.showinfo;
    },
    evalute: function() {
      this.$router.push({
        name: "evaluate",
        query: {
          auth: this.auth
        }
      });
    }
  },
  filters: {
    fixNum(value) {
      //  return value.toFixed(2);
      var num2 = value.toFixed(3);
      return num2.substring(0, num2.lastIndexOf(".") + 3);
    },
    formatDate(time) {
				var date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd');
			}
  }
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/details.less");
</style>