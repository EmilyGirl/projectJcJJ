import Vue from 'vue';
import button from './button.vue'
const Button = {
    install:function(Vue){
        Vue.component('Button',button)
    }
}


export default Button;
