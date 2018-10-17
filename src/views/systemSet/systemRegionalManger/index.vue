<template>
    <div class="main-container">
        <div class="handle-input">
            <el-input placeholder="Typing dealer name to search" v-model="input5" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <el-button type="primary" class="newOrderButton">新建区域经理</el-button>
        <el-table :data="tableList" class="table" ref="multipleTable">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="area" label="所辖区域"></el-table-column>
            <el-table-column prop="Email" label="邮箱"></el-table-column>
            <el-table-column prop="region" label="地区"></el-table-column>
            <el-table-column prop="telephone" label="电话"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="text"  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button type="text"  @click="handleDelete(scope.$index, scope.row)">Disable</el-button>
                    <el-button type="text"  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
                    name:"Kenny",
                    area:"North",
                    Email:"regionmanager@bmw.com",
                    telephone:"13911118888"
                }
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
