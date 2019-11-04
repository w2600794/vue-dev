<template>
    <div class="header header-warp">
        <span class="back" v-if="back===1?true:false"></span>
        <span>{{title}}</span>
        <span></span>
    </div>
</template>
<script>
export default {
    props: {
        back: {
            type: Number,
            default: 1
        },
        title: {
            type: String,
            default: "ladfasdf "
        }
    },
    data() {
        return {};
    }
};
</script>
<style lang="less">
@import "../../assets/less/componentsLess/header";
</style>
