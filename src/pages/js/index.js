// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import Index from '../view/index'
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



/* eslint-disable no-new */
new Vue({
    el: '#index',
    components: { Index },
    template: '<Index/>'
})


