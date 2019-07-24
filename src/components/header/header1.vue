<template>
    <div
        class="header1"
        style="background: red"
        @click="clickHeader1(header1SlotPropsData)"
    >my is header1 components</div>
</template>
<script>
export default {
    props: {
        header1SlotPropsData: String
    },
    data() {
        return {};
    },
    methods: {
        clickHeader1(msg) {
            alert(msg);
        }
    }
};
</script>
