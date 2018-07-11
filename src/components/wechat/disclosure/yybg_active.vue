<template>
	<div class="yybg_active">
		<div class="year" v-if="year==='2017'">
			<img src="../../../assets/img/xp/yybg/year/annual_report_one.png"/>
			<img src="../../../assets/img/xp/yybg/year/annual_report_two.png"/>
			<img src="../../../assets/img/xp/yybg/year/annual_report_three.png"/>
			<img src="../../../assets/img/xp/yybg/year/annual_report_four.png"/>
			<img src="../../../assets/img/xp/yybg/year/annual_report_five.png"/>
			<img src="../../../assets/img/xp/yybg/year/annual_report_six.png"/>
			<img src="../../../assets/img/xp/yybg/year/annual_report_seven.png"/>
			<img src="../../../assets/img/xp/yybg/year/annual_report_eight.png"/>
			<img src="../../../assets/img/xp/yybg/year/annual_report_nine.png"/>
		</div>
		<div class="month" v-if="month==='4'">
			<img src="../../../assets/img/xp/yybg/month/001.png"/>
			<img src="../../../assets/img/xp/yybg/month/002.png"/>
			<img src="../../../assets/img/xp/yybg/month/003.png"/>
			<img src="../../../assets/img/xp/yybg/month/004.png"/>
			<img src="../../../assets/img/xp/yybg/month/005.png"/>
			<img src="../../../assets/img/xp/yybg/month/006.png"/>
			<img src="../../../assets/img/xp/yybg/month/007.png"/>
			<img src="../../../assets/img/xp/yybg/month/008.png"/>
			<img src="../../../assets/img/xp/yybg/month/009.png"/>
			<img src="../../../assets/img/xp/yybg/month/010.png"/>
			<img src="../../../assets/img/xp/yybg/month/011.png"/>
			<img src="../../../assets/img/xp/yybg/month/012.png"/>
		</div>
		<div class="month" v-if="month==='6'">
			<img src="../../../assets/img/xp/yybg/mon6/001.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/002.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/003.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/004.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/005.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/006.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/007.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/008.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/009.png"/>
			<img src="../../../assets/img/xp/yybg/mon6/010.png"/>
		</div>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'yybg_active',
		data: function() {
			return {
				month:false,
				year:false,
				
			}
		},
		created(){
			this.month=this.$route.query.month;
			this.year=this.$route.query.year;
			console.log(typeof(this.month));
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	@import url("../../../assets/css/wechat/reset_rem.css");
</style>