<template>
<!-- main -->
<div class="main-container">
    <div class="search-box">
        <template>
            <el-radio v-model="radio" label="1">全部</el-radio>
            <el-radio v-model="radio" label="2">未提交</el-radio>
            <el-radio v-model="radio" label="3">待区域审批</el-radio>
            <el-radio v-model="radio" label="4">待宝马审批</el-radio>
            <el-radio v-model="radio" label="5">被宝马退回</el-radio>
            <el-radio v-model="radio" label="6">待上传工单和发票</el-radio>
            <el-radio v-model="radio" label="7">已完成</el-radio>
        </template>
        <div class="handle-input">
            <el-input placeholder="VIN search" v-model="input5" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <router-link class="button" to="/newOrder">
            <el-button type="primary" class="newOrderButton">新建订单</el-button>
        </router-link>
    </div>
    <el-table :data="tableList" class="table" ref="multipleTable">
        <el-table-column prop="time" label="创建日期" sortable></el-table-column>
        <el-table-column prop="pai" label="车牌号"></el-table-column>
        <el-table-column prop="vin" label="VIN"></el-table-column>
        <el-table-column prop="cartype" label="车型"></el-table-column>
        <el-table-column prop="baoxian" label="保险公司"></el-table-column>
        <el-table-column prop="totalprice" label="维修总价"></el-table-column>
        <el-table-column prop="price" label="配件费用"></el-table-column>
        <el-table-column prop="baifenbi" label="配件占比"></el-table-column>
        <el-table-column prop="stat" label="状态"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    name: 'orderList',
    data() {
        return {
            radio: '1',
            selectword: '',
            curpage: 1,
            tableList: [{
                    id: 1,
                    time: '2016-12-12',
                    pai: '京N88888',
                    vin: 'LBVPZ1100ASD77412',
                    cartype: '520LI (E60)',
                    baoxian: '中国人保PICC',
                    totalprice: '107,426',
                    price: '92,509',
                    baifenbi: '86.2%',
                    stat: '待宝马审批'
                },
                {
                    id: 2,
                    time: '2016-12-12',
                    pai: '京N88888',
                    vin: 'LBVPZ1100ASD77412',
                    cartype: '520LI (E60)',
                    baoxian: '中国人保PICC',
                    totalprice: '107,426',
                    price: '92,509',
                    baifenbi: '86.2%',
                    stat: '待宝马审批'
                },
                {
                    id: 3,
                    time: '2016-12-12',
                    pai: '京N88888',
                    vin: 'LBVPZ1100ASD77412',
                    cartype: '520LI (E60)',
                    baoxian: '中国人保PICC',
                    totalprice: '107,426',
                    price: '92,509',
                    baifenbi: '86.2%',
                    stat: '待宝马审批'
                },
                {
                    id: 4,
                    time: '2016-12-12',
                    pai: '京N88888',
                    vin: 'LBVPZ1100ASD77412',
                    cartype: '520LI (E60)',
                    baoxian: '中国人保PICC',
                    totalprice: '107,426',
                    price: '92,509',
                    baifenbi: '86.2%',
                    stat: '待宝马审批'
                }
            ]
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.curpage = val;
            this.getData();
        },
        // 获取 easy-mock 的模拟数据
        getData() {

        },
        search() {

        }
    }
}
</script>

<style lang="less">
.main-container {
    background: #ffffff;
    padding: 10px;
    .search-box {
        padding: 10px 0;
    }
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }
    .el-radio+.el-radio {
        margin-left: 20px;
    }
    .newOrderButton {
        color: #fff;
    }
    .handle-input {
        width: 200px;
        margin: 10px;
        display: inline-block;
    }
    .table {
        width: 100%;
        font-size: 14px;
        .has-gutter {
            .gutter {
                width: 100px;
                display: inline-block!important;
            }
        }
    }

}
</style>
