<template>
    <div class="main-container">
        <div class="handle-input">
            <el-input placeholder="Typing dealer name to search" v-model="input5" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <router-link to="/systemNewDealer">
            <el-button type="primary" class="newOrderButton">新建经销商</el-button>
        </router-link>
        <el-table :data="tableList" class="table" ref="multipleTable">
            <el-table-column prop="cbu" label="CBU"></el-table-column>
            <el-table-column prop="ckd" label="CKD"></el-table-column>
            <el-table-column prop="dealerName" label="经销商名称（简称）"></el-table-column>
            <el-table-column prop="region" label="地区"></el-table-column>
            <el-table-column prop="provinces" label="省份"></el-table-column>
            <el-table-column prop="city" label="城市"></el-table-column>
            <el-table-column prop="Email" label="邮箱"></el-table-column>
            <el-table-column prop="DealerGroup" label="经销商集团"></el-table-column>
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
            tableList: [
                {
                    cbu: '36133',
                    ckd: '36131',
                    dealerName: '北京经销商',
                    region: '北区',
                    provinces: '北京',
                    city: '北京',
                    Email: 'aftsersalesmgr@bmw.com',
                    DealerGroup: '中国和谐集团',

                },
                {
                    cbu: '36133',
                    ckd: '36131',
                    dealerName: '北京经销商',
                    region: '北区',
                    provinces: '北京',
                    city: '北京',
                    Email: 'aftsersalesmgr@bmw.com',
                    DealerGroup: '中国和谐集团',

                },
                {
                    cbu: '36133',
                    ckd: '36131',
                    dealerName: '北京经销商',
                    region: '北区',
                    provinces: '北京',
                    city: '北京',
                    Email: 'aftsersalesmgr@bmw.com',
                    DealerGroup: '中国和谐集团',

                },
                {
                    cbu: '36133',
                    ckd: '36131',
                    dealerName: '北京经销商',
                    region: '北区',
                    provinces: '北京',
                    city: '北京',
                    Email: 'aftsersalesmgr@bmw.com',
                    DealerGroup: '中国和谐集团',

                },
                {
                    cbu: '36133',
                    ckd: '36131',
                    dealerName: '北京经销商',
                    region: '北区',
                    provinces: '北京',
                    city: '北京',
                    Email: 'aftsersalesmgr@bmw.com',
                    DealerGroup: '中国和谐集团',

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

<style lang='less'>
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
