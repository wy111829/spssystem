<template>
<!-- main -->
<div class="main-container">
    <div class="search-box">
        <template>
            <el-radio-group v-model="Status" @change="handleRadioChange">
                <el-radio :label="0">全部 {{OrderNumbers.Total}}</el-radio>
                <el-radio v-if="UserRole == 'Dealer'||UserRole == 'Administrator'" :label="201">草稿 {{OrderNumbers['201']}}</el-radio>
                <el-radio v-if="UserRole == 'Dealer'||UserRole == 'Administrator'||UserRole =='RegionManager'" :label="202">区域审批 {{OrderNumbers['202']}}</el-radio>
                <el-radio :label="203">总部审批 {{OrderNumbers['203']}}</el-radio>
                <el-radio :label="204">审批通过 {{OrderNumbers['204']}}</el-radio>
                <el-radio :label="205">已发物流 {{OrderNumbers['205']}}</el-radio>
                <el-radio :label="206">已结束 {{OrderNumbers['206']}}</el-radio>
                <el-radio :label="207">区域驳回 {{OrderNumbers['207']}}</el-radio>
                <el-radio :label="208">总部驳回 {{OrderNumbers['208']}}</el-radio>
                <el-radio :label="209">已取消 {{OrderNumbers['209']}}</el-radio>
                <el-radio :label="210">已拒绝支持 {{OrderNumbers['210']}}</el-radio>
            </el-radio-group>
        </template>
        <div style="display:inline-block">
            <div class="sort-select">
                <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                    <el-option v-for="(item, index) in selectList" :key="index" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="handle-input">
                <el-input placeholder="" v-model="SearchValue" :disabled="!SearchField" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                </el-input>
            </div>
        </div>

        <router-link class="button" to="/orderDetial" v-if="UserRole == 'Dealer'">
            <el-button type="primary" class="newOrderButton" style="font-size:13px">新建订单</el-button>
        </router-link>
    </div>
    <el-table :data="Orders" class="table" ref="multipleTable" @sort-change="handleSortChange" :default-sort="{prop: 'CreateDate', order: 'descending'}" border @row-click="goMessageDetail" empty-text="搜索结果为空">
        <el-table-column align="center" v-for="(item, index) in tableList" :key="index" :prop="item.prop" :label="item.label" :sortable="item.sortable" resizable :min-width="item.width"></el-table-column>
        <!-- <el-table-column prop="RepairCostTotal" label="本次维修价格" sortable min-width="150" align="center"></el-table-column>
        <el-table-column prop="Repair_CurrentPrice_PCT" label="占实际价值比" sortable min-width="150" align="center"></el-table-column> -->
        <!-- <el-table-column label="占实际价值比"  >
            <template slot-scope="scope">
              {{Math.round(scope.row.RepairCostTotal/scope.row.VehicleCurrentPrice*10000)/100 + '%'}}
          </template>
        </el-table-column> -->
        <!-- <el-table-column prop="SparePartCostTotal" label="配件费用" sortable min-width="130" align="center"></el-table-column>
        <el-table-column prop="Part_Repair_PCT" label="配件占比" sortable min-width="130" align="center"></el-table-column> -->
        <!-- <el-table-column label="配件占比" >
            <template slot-scope="scope">
              {{Math.round(scope.row.SparePartCostTotal/scope.row.RepairCostTotal*10000)/100 + '%'}}
          </template>
        </el-table-column> -->
        <el-table-column label="操作" align="center" fixed="right">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click.stop="goMessageDetail(scope.row)" @click.native="stopBubble" v-if="UserRole=='Dealer'&& [201,205,207,208].includes(scope.row.StatusCode)">编辑</el-button>
                <el-button type="text" icon="el-icon-view" @click.stop="goMessageDetail(scope.row)" @click.native="stopBubble" v-else>查看</el-button>
                <el-button type="text" icon="el-icon-delete" @click.stop="handleCancelOrder(scope.row)" @click.native="stopBubble" style="color:#ff4949" v-if="UserRole=='Dealer'&&[201,202,203,204,207,208].includes(scope.row.StatusCode)">取消</el-button>
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
    General,
    Dealer
} from '@/networks/api'
import {
    mapState
} from 'vuex'
export default {
    name: 'orderList',
    data() {
        return {
            Status: 0,
            SearchField: '',
            SearchValue: '',
            SortField: 'CreateDate',
            SortType: 'DESC',
            RowOffset: 0,
            RowCount: 10,
            OrderNumbers: '',
            Orders: [{
                "OrderID": 122122,
                "OrderNumber": "3613320181226143421",
                "AccidentTypeID": 1,
                "AccidentType": "大事故",
                "SubmitDate": "2018-10-19 10:23:31",
                "LastModified": "2018-10-19 10:23:31",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "PlateNumber": "京N88888",
                "VIN": "LBVPZ1100ASD77412",
                "SubModelName": "520Li",
                "DealerName": "北京华德宝",
                "StatusCode": 201,
                "StatusName": "草稿"
            }],
            TotalNumber: 0,
            selectList: [{
                    label: '区域',
                    value: 'RegionName',
                }, {
                    label: '省份',
                    value: 'ProvinceName',

                }, {
                    label: '城市',
                    value: 'CityName',

                }, {
                    label: '经销商名称',
                    value: 'DealerName',

                }, {
                    label: '车牌号',
                    value: 'PlateNumber',

                }, {
                    label: '车架号',
                    value: 'VIN',

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

                }
            ],
            tableList: [{
                prop: 'OrderNumber',
                label: '订单号',
                sortable: true,
                width:110
            }, {
                prop: 'AccidentTypeName',
                label: '申请类型',
                sortable: true,
                width:70
            }, {
                prop: 'StatusName',
                label: '状态',
                sortable: true,
                width:55
            }, {
                prop: 'DealerName',
                label: '经销商名称',
                sortable: true,

            }, {
                prop: 'SubModelName',
                label: '车型',
                sortable: true,
                width:55
            }, {
                prop: 'PlateNumber',
                label: '车牌号',
                sortable: true,
                width:60
            }, {
                prop: 'VIN',
                label: '车架号',
                sortable: true,
                width:110
            }, {
                prop: 'LastModified',
                label: '更新日期',
                sortable: true,
                width:100
            }]
        }
    },
    methods: {
        stopBubble() { //阻止事件冒泡
            event.stopPropagation()
        },
        handleRadioChange(val) { //radio事件重新获取列表数据
            //console.log(val)
            this.getData()
        },
        handleSearch(val) { //点击搜索获取列表数据
            if (this.SearchValue.trim()) {
                this.SearchValue = this.SearchValue.trim()
                this.getData()
            }
        },
        handleSortChange(obj) { //排序获取列表数据
            //console.log(obj)
            this.SortType = obj.order == 'ascending' ? 'ASC' : obj.order == 'descending' ? 'DESC' : null
            this.SortField = obj.prop
            this.getData()
        },
        handleCurrentChange(val) { //切换页签
            this.RowOffset = val;
            this.getData();
        },
        handleEdit(index, data) { //点击编辑进入详情页
            //console.log(index, data)
            this.$router.push({
                name: 'orderDetial',
                params: {
                    id: data.OrderID
                }
            });
        },
        goMessageDetail(data) { //进入详情页
            this.$router.push({
                name: 'orderDetial',
                params: {
                    id: data.OrderID
                }
            });
        },
        async handleCancelOrder(data) { //取消订单
            console.log(data);
            try {
                const response = await Dealer.CancelOrder({
                    "OrderID": data.OrderID
                })
                if (response.Code == 200) {
                    this.$router.go(0)
                }
            } catch (e) {
                console.log(e)
            }
        },
        async getData() { //调用接口获取列表数据
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
                console.log(error)
            }
        },
        async getOrderNumbers() { //获取订单各类型数量
            try {
                const response = await General.GetOrderNumbers()
                this.OrderNumbers = response.Data
            } catch (e) {
                console.log(e)
            }
        }
    },
    computed: {
        ...mapState([
            'UserName',
            'UserRole'
        ]),
    },
    created() {
        this.getData()
        this.getOrderNumbers()
    }
}
</script>

<style lang="less">
.main-container {
    .el-radio {
        margin: 5px 0;
    }
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
