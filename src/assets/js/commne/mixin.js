Date.prototype.toLocaleString = function() {
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + "  " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
};

//年月日时分秒
Date.prototype.toLocaleDateH = function() {
    return this.getFullYear() + "-" + ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1)) + "-" + (this.getDate() < 10 ? '0' + this.getDate() : this.getDate()) + "  " + (this.getHours() < 10 ? '0' + this.getHours() : this.getHours()) + ":" + (this.getMinutes() < 10 ? '0' + this.getMinutes() : this.getMinutes());
};

/**
 * 
 * 年月日
 * 
 */
Date.prototype.toLocaleDate = function() {
    return this.getFullYear() + "-" + ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1)) + "-" + (this.getDate() < 10 ? '0' + this.getDate() : this.getDate());
};

import VHeader from '~com/header/header'


const mixin = {
    data() {
        return {}
    },
    components: {
        VHeader
    },
    created() {},
    methods: {
        //  单页面路由跳转
        routerLinkFun(link, query) {
            if (query != undefined) {
                this.$router.push({ path: link, query: query })
            } else {
                this.$router.push({ path: link })
            }

        },
        //点击进入输入框
        changeInput(e) {
            e.target.focus();
        },

        // 格式化时间   年月日时分秒
        dateForm(time) {
            var unixTimestamp = new Date(time);
            return unixTimestamp.toLocaleString();
        },
        //格式化日期  toLocaleDateH
        dateFormDate(time) {
            if (time == '') {
                return;
            }
            var unixTimestamp = new Date(time);
            return unixTimestamp.toLocaleDate();
        },
        //格式化时分  
        toLocaleDateH(time) {
            if (time == '') {
                return;
            }
            var unixTimestamp = new Date(time);
            return unixTimestamp.toLocaleDateH();
        },
    }
}

export default mixin