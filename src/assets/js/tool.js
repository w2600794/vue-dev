import {apiPost} from '@/assets/js/commne/apiPost'

/*获取url中?后面的参数*/
// export const getRequest = function getRequest(){
//     var url = location.search; //获取url中"?"符后的字串
//     var theRequest = new Object();
//     if (url.indexOf("?") != -1) {
//         var str = url.substr(1);
//         var strs = str.split("&");
//         for (var i = 0; i < strs.length; i++) {
//             theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
//         }
//     }
//     return theRequest;
// }
/*获取参数*/
export const getRequest = function getRequest() {
    var url = location.href; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {

        var str = url.split('?')[1];

        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

/*禁止后退*/
export const noBack = function () {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });
}

/*设置cookie*/
export const eybSetCookieFun = function (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

/*获取cookie*/
export const eybGetCookieFun = function (c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            let c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}


/*验证姓名*/
export const regName = /^([\u4e00-\u9fa5]){2,7}$/; //姓名
/*验证 身份证*/
export const regID = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
/*验证 手机号*/
export const regMobile = /^1[23456789]\d{9}$/;


/*获取验证码倒计时*/
export const Countdown = function (seconds, cb) {
    var s = seconds;
}


export const hasClass = function (elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

export const addClass = function (ele, cls) {
    if (!hasClass(elem, cls)) {
        ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
}

export const removeClass = function (ele, cls) {
    if (hasClass(elem, cls)) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

//获取滚动条当前的位置
export const getScrollTop = function (mainScroll) {
    var scrollTop = 0;
    if(mainScroll!='') {
        scrollTop = mainScroll.scrollTop;
    }else {
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
    }
    return scrollTop;
}

//获取当前可视范围的高度
export const getClientHeight = function (mainClientHeight) {
    var clientHeight = 0;
    if(mainClientHeight!='') {
        clientHeight = mainClientHeight.clientHeight;
    }else {
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
    }
    return clientHeight;
}

//获取文档完整的高度
export const getScrollHeight = function (mainScrollHeight) {
    var getScrollHeight = 0;
    if(mainScrollHeight!='') {
        getScrollHeight = Math.max(mainScrollHeight.scrollHeight);
    }else {
        getScrollHeight =  Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    return getScrollHeight
}


// 分享 朋友圈
export const share = function (url) {
    var data = '';
    apiPost(url, {
        locationUrl: window.location.href.split('#')[0]
    }).then(res => {
        if (res.respCode == '0000') {
            var data = res.data;
            data = data;
            wx.config({
                // debug: true,

                appId: data.config.appId,

                timestamp: data.config.timestamp,

                nonceStr: data.config.noncestr,

                signature: data.config.signature,

                jsApiList: ["onMenuShareTimeline", 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
            });
            wx.ready(function () {

                wx.onMenuShareTimeline({ // 分享朋友圈
                    title: data.shareContent.title,
                    link: data.shareContent.link,
                    imgUrl: data.shareContent.shareUrLimg,
                    success: function () {
                    },
                    cancel: function () {

                    }
                })
                wx.onMenuShareAppMessage({
                    title: data.shareContent.title,
                    desc: data.shareContent.desc,
                    link: data.shareContent.link,
                    imgUrl: data.shareContent.shareUrLimg,
                    type: data.shareContent.type,
                    success: function () {
                    },
                    cancel: function () {

                    }
                })
            })

            wx.error(function (res) {
            })

            wx.checkJsApi({
                jsApiList: ['onMenuShareTimeline'],
                success: function (res) {
                }
            })
        }
    })
    return data;
}

