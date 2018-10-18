<template>
    <div class="main-container">
        <div class="handle-input">
            <el-input placeholder="Typing parts descrition to search" v-model="input5" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <el-button type="primary" class="newOrderButton">导入</el-button>
        <el-table :data="tableList" class="table" ref="multipleTable">
            <el-table-column prop="partsNum" label="零件号"></el-table-column>
            <el-table-column prop="partsName" label="零件名称"></el-table-column>
            <el-table-column prop="unitprice" label="单价"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() { //选项 / 数据
        return {
            tableList: [{
                    partsNum: "83190301421",
                    partsName: "lube oil",
                    unitprice: "82.56",
                },
                {
                    partsNum: "83190301639",
                    partsName: "螺栓",
                    unitprice: "2.56",
                },
            ],
        }
    },
    methods: { //事件处理器

    },
    components: { //定义组件

    },
    created() { //生命周期函数

    }
}
</script>

<style lang="less">
.main-container {
    background-color: #fff;
    padding: 10px;
    .handle-input {
        width: 300px;
        margin: 10px;
        display: inline-block;
    }
    .newOrderButton {
        color: #fff;
    }
}
</style>
