<template>
    <div class="header">
        <span></span>
        <span>{{title}}头</span>
        <span></span>
        <div>我是header</div>
        <slot name="head"></slot>
        <slot name="main"></slot>
        <slot name="foot"></slot>
        <div>我是footer</div>

        <div class="child-text">
            <slot :text="childSlotData"></slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "首页",
            childSlotData: "我是childSlotData"
        };
    }
};
</script>
<style lang="less">
@import "../../assets/less/componentsLess/header";
</style>
