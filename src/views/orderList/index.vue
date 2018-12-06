<template>
<!-- main -->
<div class="main-container">
    <div class="search-box">
        <template>
            <el-radio-group v-model="Status" @change="handleRadioChange">
                <el-radio  :label="0">全部</el-radio>
                <el-radio  :label="201" v-if = "UserRole == 'Administrator'||UserRole == 'Dealer'">待提交</el-radio>
                <el-radio  :label="202">待区域经理审批</el-radio>
                <el-radio  :label="203">被区域经理退回</el-radio>
                <el-radio  :label="204">待宝马审批</el-radio>
                <el-radio  :label="205">被宝马退回</el-radio>
                <el-radio  :label="206">待上传工单和发票</el-radio>
                <el-radio  :label="207">已完成</el-radio>
                <el-radio  :label="208">已删除</el-radio>
            </el-radio-group>
        </template>
        <div style="display:inline-block">
            <div class="sort-select">
                <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                    <el-option v-for="(item, index) in selectList" :key="index" v-if="item.role.includes(UserRole)" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="handle-input">
                <el-input placeholder="" v-model="SearchValue" :disabled="!SearchField" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                </el-input>
            </div>
        </div>

        <router-link class="button" to="/orderDetial" v-if = "UserRole == 'Dealer'">
            <el-button type="primary" class="newOrderButton" style="font-size:13px">新建订单</el-button>
        </router-link>
    </div>
    <el-table :data="Orders" class="table" ref="multipleTable" @sort-change="handleSortChange" :default-sort="{prop: 'CreateDate', order: 'descending'}" border @row-click="goMessageDetail">
        <el-table-column align="center" v-for="(item, index) in tableList" :key="index" v-if="item.role.includes(UserRole)"   :prop="item.prop" :label="item.label" :sortable="item.sortable" resizable :min-width="item.width"></el-table-column>
        <el-table-column prop="RepairCostTotal" label="本次维修价格" sortable min-width="150" align="center"></el-table-column>
        <el-table-column prop="Repair_CurrentPrice_PCT" label="占实际价值比" sortable min-width="150" align="center"></el-table-column>
        <!-- <el-table-column label="占实际价值比"  >
            <template slot-scope="scope">
              {{Math.round(scope.row.RepairCostTotal/scope.row.VehicleCurrentPrice*10000)/100 + '%'}}
          </template>
        </el-table-column> -->
        <el-table-column prop="SparePartCostTotal" label="配件费用" sortable min-width="130" align="center"></el-table-column>
        <el-table-column prop="Part_Repair_PCT" label="配件占比" sortable min-width="130" align="center"></el-table-column>
        <!-- <el-table-column label="配件占比" >
            <template slot-scope="scope">
              {{Math.round(scope.row.SparePartCostTotal/scope.row.RepairCostTotal*10000)/100 + '%'}}
          </template>
        </el-table-column> -->
        <el-table-column label="状态" sortable prop="StatusName"></el-table-column>
        <el-table-column label="操作" align="center"  fixed="right">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
import {General} from '@/networks/api'
import {mapState} from 'vuex'
export default {
    name: 'orderList',
    data() {
        return {
            Status: 0,
            SearchField: '',
            SearchValue: '',
            SortField: '',
            SortType: '',
            RowOffset: 0,
            RowCount: 20,
            Orders: [{
                "OrderID": 0,
                "ReferenceNumber": "",
                "CreateDate": "",
                "RegionID": "",
                "RegionName": "",
                "ProvinceID": "",
                "ProvinceName": "",
                "CityID": "",
                "CityName": "",
                "PlateNumber": "",
                "VIN": "",
                "SubModel": "",
                "Insurer": "",
                "RepairCostTotal": 0,
                "VehicleCurrentPrice": 0,
                "SparePartCostTotal": 0,
                "StatusCode": 0,
                "Status": ""
            }],
            TotalNumber: 0,
            selectList: [{
                label: '区域',
                value: 'RegionName',
                role:  ['BMW-BP','Administrator']
            },{
                label: '省份',
                value: 'ProvinceName',
                role:  ['RegionManager', 'BMW-BP','Administrator']
            },{
                label: '城市',
                value: 'CityName',
                role:  ['RegionManager', 'BMW-BP','Administrator']
            },{
                label: '经销商名称',
                value: 'DealerName',
                role:  ['RegionManager', 'BMW-BP','Administrator']
            },{
                label: '车牌号',
                value: 'PlateNumber',
                role:  ['Dealer','Administrator']
            },{
                label: 'VIN码',
                value: 'VIN',
                role:  ['Dealer','Administrator']
            },
            // {
            //     label: '保险公司',
            //     value: 'InsurerName',
            //     role:  ['Dealer', 'RegionManager','Administrator']
            // },
            {
                label: '车型',
                value: 'SubModelName',
                sortable: true,
                role:  ['Dealer','Administrator']
            }],
            tableList: [{
                prop: 'CreateDate',
                label: '创建日期',
                sortable: true,
                role:  ['Dealer','Administrator'],
                width:110
            },{
                prop: 'PlateNumber',
                label: '车牌号',
                sortable: true,
                role:  ['Dealer','Administrator'],
                width:100
            },{
                prop: 'SubmitDate',
                label: '申请日期',
                sortable: true,
                role:  ['RegionManager', 'BMW-BP','Administrator'],
                width:110
            },{
                prop: 'RegionName',
                label: '区域',
                sortable: true,
                role:  ['BMW-BP','Administrator']
            },{
                prop: 'ProvinceName',
                label: '省份',
                sortable: true,
                role:  ['RegionManager', 'BMW-BP','Administrator']
            },{
                prop: 'CityName',
                label: '城市',
                sortable: true,
                role:  ['RegionManager', 'BMW-BP','Administrator']
            },{
                prop: 'DealerName',
                label: '经销商名称',
                sortable: true,
                role:  ['RegionManager', 'BMW-BP','Administrator'],
                width:120
            },{
                prop: 'VIN',
                label: 'VIN',
                sortable: true,
                role:  ['Dealer','Administrator'],
                width: 165
            },{
                prop: 'SubModelName',
                label: '车型',
                sortable: true,
                role:  ['Dealer','Administrator']
            },{
                prop: 'InsurerName',
                label: '保险公司',
                sortable: true,
                role:  ['Dealer', 'RegionManager','Administrator'],
                width:120
            }]
        }
    },
    methods: {
        handleRadioChange(val) {
            //console.log(val)
            this.getData()
        },
        handleSearch(val) {
            if (this.SearchValue.trim()) {
                this.SearchValue = this.SearchValue.trim()
                this.getData()
            }
        },
        handleSortChange(obj) {
            //console.log(obj)
            this.SortType = obj.order == 'ascending'? 'ASC' : obj.order == 'descending' ? 'DESC' : null
            this.SortField = obj.prop
            this.getData()
        },
        handleCurrentChange(val) {
            this.RowOffset = val;
            this.getData();
        },
        handleEdit(index, data) {
            //console.log(index, data)
            this.$router.push({
                name: 'orderDetial',
                params: {
                    id: data.OrderID
                }
            });
        },
        goMessageDetail(data){
            this.$router.push({
                name: 'orderDetial',
                params: {
                    id: data.OrderID
                }
            });
        },
        async getData() {
            try {
                const response = await General.GetOrderList({
                    "StatusCode": this.Status,
                    "SearchField": this.SearchField,
                    "SearchValue": this.SearchValue,
                    "SortField": this.SortField,
                    "SortType": this.SortType,
                    "RowOffset": this.RowOffset,
                    "RowCount": this.RowCount
                })
                this.TotalNumber = response.Data.TotalNumber
                this.Orders = response.Data.Orders
            } catch (error) {

            }
        },
        search() {

        }
    },
    computed:{
        ...mapState([
            'UserName',
            'UserRole'
        ]),
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
        margin-top: 0;
        width: 100%;
        font-size: 14px;
        .has-gutter {
            .gutter {
                width: 100px;
                display: inline-block!important;
            }
        }
    }
    .el-input--small .el-input__inner {
        height: 34px;
    }
}
</style>
