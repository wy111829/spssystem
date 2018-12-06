<template>
    <div class="main-container">
        <router-link class="button" to="/systemEmailTemNew">
            <el-button type="primary" class="newOrderButton">新建</el-button>
        </router-link>
        <el-table :data="tableList" class="table" ref="multipleTable" @row-click="goMessageDetail">
            <el-table-column prop="emailtemplate" label="邮件模板管理"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" icon="el-icon-error" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() { //选项 / 数据
        return {
            tableList:[
                {emailtemplate: "经销商"},
                {emailtemplate: "区域经理"},
                {emailtemplate: "宝马钣喷组"},
                {emailtemplate: "宝马物流组"},

            ]
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

<style>

</style>
