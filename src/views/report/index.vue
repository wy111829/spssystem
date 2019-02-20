<template>
<div class="container">
    <el-row :gutter="20">
        <el-col :md="12" :sm="24">
            <img src="../../assets/u3608.png" alt="">
        </el-col>
        <el-col :md="12" :sm="24">
            <img src="../../assets/u3610.png" alt="">
        </el-col>
        <el-col :md="12" :sm="24">
            <img src="../../assets/u3616.png" alt="">
        </el-col>
        <el-col :md="12" :sm="24">
            <img src="../../assets/u3612.jpg" alt="">
        </el-col>
        <el-col :md="12" :sm="24">
            <img src="../../assets/u3614.jpg" alt="">
        </el-col>
        <el-col :md="12" :sm="24">
            <img src="../../assets/u3628.png" alt="">
        </el-col>
    </el-row>
</div>
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
img{
    width: 100%;
    margin-bottom: 20px;
}
.schart-box {
    display: inline-block;
    margin: 20px;
}

.schart {
    width: 500px;
    height: 400px;
}

.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>
