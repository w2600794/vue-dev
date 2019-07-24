// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App'
import routes from './router'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
import FastClick from 'fastclick'

import mixin from '@/assets/js/commne/mixin'




if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}


Vue.mixin(mixin);


Vue.use(vueRouter)
// 路由
const router = new vueRouter({
    routes
})

// 进入路由之前
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});


//懒加载
Vue.use(VueLazyLoad, {
    preLoad: 2.5,
    error: '',
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})


