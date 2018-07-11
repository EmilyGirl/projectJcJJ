/**
使用 范例
 引入
import footer from "@/components/wechat/public/Footer";
注册
  components: {
    'v-footer':footer
  },
  使用
  	<v-footer	/>
		// 白色 在最底部
	<v-footer  bgColor="#fff"	:style="{position: 'fixed',bottom: 0}"/>
 */

<template>
	<div class="pubFooter"  :style="{background:bgColor}" >
	
		<img src="../../../assets/img/wechat/product/bg_logo.png" alt="">
	</div>
</template>
<script>
export default {
		props: {
		  bgColor: {   
		  	type: String,
		    default: ' #F5F5F5'
		  }
		}
};

</script>
<style  lang= 'less' >

.pubFooter {
height: 8rem;
	width:100%;
	/* background-color: #F5F5F5; */
	text-align: center;
	padding-top: 3rem;
	img{
		width:60%;
	}
}
</style>
