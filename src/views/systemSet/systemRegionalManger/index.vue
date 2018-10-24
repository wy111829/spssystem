<template>
    <div class="main-container">
        <div class="handle-input">
            <el-input placeholder="Typing dealer name to search" v-model="input5" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <el-button type="primary" class="newOrderButton" @click="dialogFormVisible=true">新建区域经理</el-button>
        <el-table :data="tableList" class="table" ref="multipleTable">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="area" label="所辖区域"></el-table-column>
            <el-table-column prop="Email" label="邮箱"></el-table-column>
            <el-table-column prop="telephone" label="电话"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text"  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button type="text"  @click="handleDelete(scope.$index, scope.row)">Disable</el-button>
                    <el-button type="text"  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="区域经理" :visible.sync="dialogFormVisible">
            <el-form :model="newInfo" label-width="80px">
                <el-form-item label="Name: ">
                    <el-input v-model="newInfo.Name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Region">
                    <el-select v-model="newInfo.role" placeholder="--Please select region--">
                        <el-option label="南区" value=""></el-option>
                        <el-option label="西区" value=""></el-option>
                        <el-option label="北区" value=""></el-option>
                        <el-option label="西南区" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Email: ">
                    <el-input v-model="newInfo.emailaddress"></el-input>
                </el-form-item>
                <el-form-item label="Mobile: ">
                    <el-input v-model="newInfo.Mobile"></el-input>
                </el-form-item>
                <el-form-item label="状态: ">
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
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() { //选项 / 数据
      return {
            tableList:[
                {
                    name:"Kenny",
                    area:"North",
                    Email:"regionmanager@bmw.com",
                    telephone:"13911118888"
                }
            ],
            newInfo: {
                Name: "",
                role: "",
                emailaddress: "",
                Mobile: "",
                stat: ""

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
.main-container{
    background-color: #fff;
    padding: 10px;
    .handle-input{
        width: 300px;
        margin: 10px;
        display: inline-block;
    }
    .newOrderButton {
        color: #fff;
    }
}
</style>
