<template>
<div class="dispose">
    <img class="dispose_img" src="../../../assets/img/wechat/mine/disposing.png" alt="">
    <div class="chuli">{{text}}</div>
    <div class="information">存管账户已成功开通<br /><br />
前往我的页面充值完成后即可出借</div>
    <div class="null_go1" @click="finish">完成</div>
</div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
  data() {
    return {
     text:'恭喜您，账户开通成功'
    };
  },
  created: function() {},
  methods: {
   	finish(){
   		this.$router.push({ path: '/wechat/homepage/mine' });
   	},
  }
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/dispose.less");
</style>