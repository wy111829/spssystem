<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style lang="less">
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
    .main-container{
        min-height: calc(100% - 80px);
    }
    .conent-box{
        height: 100%;
    }
</style>
