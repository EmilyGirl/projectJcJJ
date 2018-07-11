<template>
	<div class="yybg">
		<div class="mouth6 yybg_module">
			<h5 class="title">
				<span class="text">集财6月运营报告</span>
			</h5>
			<router-link :to="{path:'yybg/yybg_active',query:{month:'6'}}" class="imgBlock" tag="div">
				<img src="../../../assets/img/xp/yybg/banner_home@2x.png"/>
			</router-link>
		</div>
		<div class="mouth4 yybg_module">
			<h5 class="title">
				<span class="text">集财4月运营报告</span>
			</h5>
			<router-link :to="{path:'yybg/yybg_active',query:{month:'4'}}" class="imgBlock" tag="div">
				<img src="../../../assets/img/xp/yybg/publish_report_muth.png"/>
			</router-link>
		</div>
		<div class="year2017 yybg_module">
			<h5 class="title">
				<span class="text">集财年度运营报告</span>
			</h5>
			<router-link :to="{path:'yybg/yybg_active',query:{year:'2017'}}" class="imgBlock" tag="div">
				<img src="../../../assets/img/xp/yybg/publish_report_annual.png"/>
			</router-link>
		</div>
		<!--<div class="router">
			<span  @click='hrefTo("1")'></span>
			<span @click='hrefTo("2")'></span>
		</div>-->
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'yybg',
		methods: {
			hrefTo(num) {
				if(num=='1'){
					this.$router.push({
						path:'yybg/yybg_active',
						query:{month:'4'}
					});
				}else if(num=='2'){
					this.$router.push({
						path:'yybg/yybg_active',
						query:{year:'2017'}
					});
				}
			},
		}
		
	}
</script>

<style scoped lang="less">
	@import url("../../../assets/css/wechat/reset_rem.css");
	.yybg{
		position: relative;
		.yybg_module{
			width: 100%;
			padding: 1.8rem 1.55rem;
			box-sizing:border-box;
			background: #FFFFFF;
			line-height: normal;
			margin-bottom: 1rem;
			.aa{
			
			}
			.title{
				font-size: 1.8rem;
				margin-bottom: 1.1rem;
				font-weight: 600;
				span{
					border-bottom: .6rem solid #FFFBC9;
					padding-right: 1.2rem;
					display: inline-block;
					height: 1.6rem;
				}
			}
		}
	}
</style>