<template>
	<div class="fu-content">
		<p class="listHead">
			<span>银行</span>
			<span>卡片限额</span>
		</p>
		<ul class="mode">
			<li v-for="(banklist, bank) in banklists">	
				<div class=" fu-middle">
					<img class="balance" :src="banklist.logoUri" />
					<p class="yu-common">  <b>{{ banklist.bankName }}</b></p>
				</div>
				<p class="money-common">{{ banklist.bankNote }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import reset_rem from "../../assets/js/wechat/reset_rem.js";
export default {
    name: "hello",
    data: function() {
        return {
            banklists: []
        };
    },
    created: function() {
        this.bankFun();
    },
    methods: {
        bankFun: function() {
            var _this = this;
            _this.$http
                .post("/Product/bankList", {
                    parameters: "{}"
                })
                .then(function(res) {
                    if (res.data.end == "ok") {
                        _this.banklists = res.data.list;
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/wechat/reset_rem.css");
@import url("../../assets/css/wechat/quota.less");
</style>