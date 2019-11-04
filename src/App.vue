
<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="main-warp"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            transitionName: ""
        };
    },
    components: {},
    watch: {
        $route(to, from) {
            //如果to索引大于from索引,判断为前进状态,反之则为后退状态
            if (to.meta.index === 0) {
                this.transitionName = "router-fade";
            } else {
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = "slide-left";
                } else {
                    this.transitionName = "slide-right";
                }
            }
        }
    },
    created() {},
    mounted() {}
};
</script>
<style lang="less">
@import url("~@/assets/less/cssVar.less");
.main-box {
    width: 100%;
    height: 80vh;
}
</style>
