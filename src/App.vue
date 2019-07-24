
<template>
    <div id="app">
        <headerBox>
            <div class="slot" slot="head" style="background: yellow">
                <header1 :header1SlotPropsData="header1SlotPropsData"></header1>
            </div>
            <div class="main" slot="main">
                <ul>
                    <li v-for="(i) in 3" :key="i">{{i+1}}</li>
                </ul>
            </div>
            <template slot-scope="props">
                <p>{{props.text}}</p>
            </template>
        </headerBox>
    </div>
</template>
<script>
import headerBox from "@/components/header/header";
import header1 from "@/components/header/header1";
export default {
    data() {
        return {
            slotMsg: "my name is slot components",
            header1SlotPropsData:
                "发斯蒂芬拉开始的减肥拉水电费拉独食难肥阿萨德放开了按道理"
        };
    },
    components: {
        headerBox,
        header1
    },
    created() {
        console.log(this.abc);
    },
    mounted() {}
};
</script>
<style lang="less">
@import "./assets/less/cssVar.less";
.main-box {
    width: 100%;
    height: 80vh;
}
ul li:nth-child(2n) {
    background: #dddddd;
}
</style>
