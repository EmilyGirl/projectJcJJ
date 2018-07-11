<template>
	<div id="index" class="index">
		 <swiper v-if="swiperSlides.length>0" :options="swiperOption">
			 <swiper-slide   v-for="(slide, index) in swiperSlides" :key="index">
			 		<a :href="slide.hdUrl">
			 			<img :src="slide.imgURL">
			 		</a>
			 </swiper-slide>
			 <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		
<!-- iconlist -->
	<div class="iconlist">
	<div v-for= "(icon, index) in iconsList">
		<div >
			<img :src = "icon.iconURL">
		</div>
	</div>

	</div>
		

	</div>
</template>

<script>
	import reset_rem from "../../assets/js/wechat/reset_rem.js";
	import { usernameKey, authKey, authName, usernameName } from '@/config/config.js';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';  
	import 'swiper/dist/css/swiper.css'
	export default {
		name: 'index',
		data() {
			return {
				list: [],
				  swiperOption: {
					loop : true,
					autoplay:true,//等同于以下设置
					pagination: {
						el: '.swiper-pagination',
					},
			     },
			    swiperSlides: [],
			    iconsList:[{
			    	h5URL:"http://nwap-dev.jicai.com/#/app_terminal/guide",
					iconURL:"./../../../../assets/img/01.png"
			    },]

			   }
			 },
			 components: {
			 swiper,
			 swiperSlide
			},
			 computed: {
			
			 },
			mounted: function() {
				 let params = {
				 	bannerType:1 ,
				 	moduleName:'shouye'
				 }
				this.$http.post('/Product/loadStartPageContent', {
						parameters: JSON.stringify(params)
					}).then((res)=>{
						this.swiperSlides = res.data.data.bannerList;
						// this.iconsList =  res.data.data.iconsList;
					})
			
			},
			methods: {
				

			}
		}
</script>

<style type="text/css">
		.index .swiper-pagination-bullet{
		width: 1rem;
		opacity: 0.3;
		background: #FFFFFF;
		border-radius: 8px;
		/*box-shadow:0 2px 1px 0 rgba(0,0,0,1);*/
		border:1px solid rgba(0,0,0,.2);
		/*background-color: rgba(255,255,255,.3);*/
	}
	.index .swiper-pagination-bullet-active{
		width: 1.5rem;
		opacity: 1;
		/*background-color: #fff*/

	}
</style>
<style scoped >
	@import url("../../assets/css/wechat/reset_rem.css");

	.swiper-slide {
		height:15rem;
		background-color: #fff
	}


</style>
