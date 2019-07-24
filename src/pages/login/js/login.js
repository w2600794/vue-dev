import Vue from 'vue'
import axios from 'axios'
import login from '../vue/login.vue'

Vue.prototype.$ajax = axios

new Vue({
    el: '#login',
    components: { login },
    template: '<login/>'
})
