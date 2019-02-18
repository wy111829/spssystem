<template>

</template>

<script>
    import Schart from 'vue-schart';
    export default {
        name: 'report',
        components: {
            Schart
        },
    }
</script>

<style scoped>
.schart-box{
    display: inline-block;
    margin: 20px;
}
.schart{
    width: 500px;
    height: 400px;
}
.content-title{
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}

</style>
