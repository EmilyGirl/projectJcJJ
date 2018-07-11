<template>
	<div class="safe">
		<a class="mao" @click='mao(1)'>安全保障</a>
		<a  class="mao1" @click='mao(2)'>资金安全</a>
		<a  class="mao2" @click='mao(3)'>存管答疑</a>
		<!--<img src="../../assets/img/about_jc.png" alt="" />-->
		<img class="img1" src="../../assets/img/xp/cgsm/aboutCg_01.png" alt="" />
		<img   class="img2"  ref="mao1" src="../../assets/img/xp/cgsm/aboutCg_02.png" alt="" />
		<img   class="img3" src="../../assets/img/xp/cgsm/aboutCg_03.png" alt="" />
		<img  class="img4" ref="mao2" src="../../assets/img/xp/cgsm/aboutCg_04.png" alt="" />
		<img   class="img4"   src="../../assets/img/xp/cgsm/aboutCg_05.png" alt="" />
		<img class="img4"    ref="mao3" src="../../assets/img/xp/cgsm/aboutCg_06.png" alt="" />

	</div>
</template>
<script>
import reset_rem from "../../assets/js/wechat/reset_rem.js";
export default {
    name: "aboutCG",
    data: function() {
        return {};
		},
methods: {
	mao(type){
		if(type == 1){
				this.$refs.mao1.scrollIntoView()
		} else if(type == 2) {
						this.$refs.mao2.scrollIntoView()
		} else {
					this.$refs.mao3.scrollIntoView()
		}

	}
}


};
</script>

<style scoped lang = 'less'>
@import url("../../assets/css/wechat/reset_rem.css");

.safe {
    width: 100%;
    .mao,.mao1,.mao2 {
				position: fixed;
				display: inline-block;
				right: 0;;
				width: 7rem;
				text-align: center;
				line-height: 3rem;
				top: 1rem;
				font-size: 1.2rem;
				color: #fff;
				background-color: rgba(0, 0, 0, .4);
				border-radius: 100px 0 0 100px;
		}
		.mao1{
				top: 5rem;
		}
			.mao2{
							top: 9rem;
		}
		
}

</style>