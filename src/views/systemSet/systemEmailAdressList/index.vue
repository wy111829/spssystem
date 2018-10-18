<template>
    <div class="main-container">
        <div class="handle-input">
            <el-input placeholder="请输入邮箱名称进行查询" v-model="input5" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <el-button type="primary" class="newOrderButton">新建邮箱地址</el-button>
        <el-table :data="tableList" class="table" ref="multipleTable">
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="role" label="角色"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" icon="el-icon-error" class="red" @click="handleDelete(scope.$index, scope.row)">停用</el-button>
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
                {
                    email: "body-paint@list.bmw.com",
                    role: "BMW body paint team",
                    state: "Available"
                },
                {
                    email: "logistics@bmw.com",
                    role: "BMW Logistics team",
                    state: "Available"
                },
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
