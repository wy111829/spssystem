<template>
<!-- main -->
<div class="main-container">
    <div class="search-box">
        <template>
            <el-radio-group v-model="Status" @change="handleRadioChange">
                <el-radio  :label="null">全部</el-radio>
                <el-radio  label="201">待提交</el-radio>
                <el-radio  label="202">待区域经理审批</el-radio>
                <el-radio  label="203">被区域经理退回</el-radio>
                <el-radio  label="204">待宝马审批</el-radio>
                <el-radio  label="205">被宝马退回</el-radio>
                <el-radio  label="206">待上传工单和发票</el-radio>
                <el-radio  label="207">已完成</el-radio>
            </el-radio-group>
        </template>
        <div class="sort-select">
            <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                <el-option label="车牌号" value="PlateNumber"></el-option>
                <el-option label="VIN码" value="VIN"></el-option>
                <el-option label="车型" value="SubModel"></el-option>
                <el-option label="地区" value="RegionID"></el-option>
                <el-option label="经销商" value="DealerName"></el-option>
            </el-select>
        </div>
        <div class="handle-input">
            <el-input placeholder="VIN search" v-model="SearchValue" :disabled="!SearchField" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
            </el-input>
        </div>
        <router-link class="button" to="/orderDetial">
            <el-button type="primary" class="newOrderButton">新建订单</el-button>
        </router-link>
    </div>
    <el-table :data="Orders" class="table" ref="multipleTable" @sort-change="handleSortChange" :default-sort="{prop: 'CreateDate', order: 'descending'}">
        <el-table-column prop="CreateDate" label="创建日期" sortable></el-table-column>
        <el-table-column prop="PlateNumber" label="车牌号" sortable></el-table-column>
        <el-table-column prop="VIN" label="VIN"></el-table-column>
        <el-table-column prop="SubModel" label="车型"></el-table-column>
        <el-table-column prop="Insurer" label="保险公司"></el-table-column>
        <el-table-column prop="RepairCostTotal" label="维修总价"></el-table-column>
        <el-table-column prop="SparePartCostTotal" label="配件费用"></el-table-column>
        <el-table-column label="配件占比">
            <template slot-scope="scope">
              {{Math.round(scope.row.SparePartCostTotal/scope.row.RepairCostTotal*10000)/100 + '%'}}
          </template>
        </el-table-column>
        <el-table-column prop="Status" label="状态"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="TotalNumber">
        </el-pagination>
    </div>
</div>
</template>

<script>
import {
    General
} from '@/networks/api'
export default {
    name: 'orderList',
    data() {
        return {
            Status: null,
            SearchField: null,
            SearchValue: '',
            SortField: null,
            SortType: null,
            RowOffset: 0,
            RowCount: 6,
            Orders: [{
                "OrderID": 122121,
                "ReferenceNumber": "DAT-20181019152745251",
                "CreateDate": "2018-10-19",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N88888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModel": "520Li",
                "Insurer": "中国人保",
                "RepairCostTotal": 10726,
                "VehicleCurrentPrice": 92000,
                "SparePartCostTotal": 8000,
                "StatusCode": 201,
                "Status": "待提交"
            }],
            TotalNumber: 0
        }
    },
    methods: {
        handleRadioChange(val) {
            console.log(val)
            this.getData()
        },
        handleSearch(val) {
            if (this.SearchValue.trim()) {
                this.SearchValue = this.SearchValue.trim()
                this.getData()
            }
        },
        handleSortChange(obj) {
            console.log(obj)
            this.SortType = obj.order == 'ascending'? 'ASC' : obj.order == 'descending' ? 'DESC' : null
            this.SortField = obj.prop
            this.getData()
        },
        handleCurrentChange(val) {
            this.RowOffset = val;
            this.getData();
        },
        handleEdit(index, data) {
            console.log(index, data)
            this.$router.push({
                name: 'orderDetial',
                query: {
                    id: data.OrderID
                }
            });
        },
        async getData() {
            try {
                const response = await General.GetOrderList({
                    "Status": this.Status,
                    "SearchField": this.SearchField,
                    "SearchValue": this.SearchValue,
                    "SortField": this.SortField,
                    "SortType": this.SortType,
                    "RowOffset": this.RowOffset,
                    "RowCount": this.RowCount
                })
                console.log('订单列表', response)
                this.TotalNumber = response.Data.TotalNumber
                this.Orders = response.Data.Orders
            } catch (error) {

            }
        },
        search() {

        }
    },
    created() {
        this.getData()
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
    .sort-select {
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
