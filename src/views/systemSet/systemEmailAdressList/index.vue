<template>
<div class="main-container">
    <div class="handle-input">
        <el-input placeholder="请输入邮箱名称进行查询" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
    <!-- <el-button type="primary" class="newOrderButton" @click="dialogFormVisible=true">新建邮箱地址</el-button> -->
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
    <!-- <el-dialog title="邮箱地址" :visible.sync="dialogFormVisible">
        <el-form :model="newInfo" label-width="80px">
            <el-form-item label="邮箱地址">
                <el-input v-model="newInfo.emailaddress" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-select v-model="newInfo.role" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="状态">
                <el-radio-group v-model="newInfo.stat">
                    <el-radio label="可用"></el-radio>
                    <el-radio label="禁用"></el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <div slot="footer" class="text-center">
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
    </el-dialog> -->
</div>
</template>

<script>
export default {
    data() { //选项 / 数据
        return {
            tableList: [{
                    email: "body-paint@list.bmw.com",
                    role: "BMW body paint team",
                    state: "Available"
                },
                {
                    email: "logistics@bmw.com",
                    role: "BMW Logistics team",
                    state: "Available"
                },
            ],
            newInfo: {
                emailaddress: '',
                role: '',
                stat: false
            },
            dialogFormVisible: false,
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
