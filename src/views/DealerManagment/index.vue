<template>
<div class="main-container">
    <div class="search-box">
        <div class="sort-select">
            <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                <el-option v-for="(item, index) in selectList" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="handle-input">
            <el-input placeholder="" v-model="SearchValue" class="input-with-select" :disabled="!SearchField">
                <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
            </el-input>
        </div>
    </div>
    <el-table :data="tableList" class="table" ref="multipleTable" @sort-change="handleSortChange" empty-text='搜索结果为空'>
        <el-table-column prop="CustomerNumber" label="账号" sortable ></el-table-column>
        <el-table-column prop="CKD" label="CKD" sortable ></el-table-column>
        <el-table-column prop="Name" label="经销商名称" sortable width="120"></el-table-column>
        <el-table-column prop="RegionName" label="区域" ></el-table-column>
        <el-table-column prop="ProvinceName" label="省份" sortable ></el-table-column>
        <el-table-column prop="CityName" label="城市" sortable ></el-table-column>
        <el-table-column prop="MailBox1" label="邮箱1" sortable align="center" width="160"></el-table-column>
        <el-table-column prop="MailBox2" label="邮箱2" sortable align="center" width="160"></el-table-column>
        <el-table-column label="审批策略" width="200" align="center" sortable >
            <template slot-scope="scope">
                <el-radio-group v-model="scope.row.ApproveMethod" @change="handleRadioChange(scope.$index, scope.row)">
                    <el-radio label="AutoApprove">自动审核</el-radio>
                    <el-radio label="ManualApprove">逐单审核</el-radio>
                </el-radio-group>
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
    RegionManagers
} from '@/networks/api'
export default {
    name: 'DealerManagment',
    data() {
        return {
            tableList: [],
            SearchField: '',
            SearchValue: '',
            SortField: '',
            SortType: '',
            RowOffset: 0,
            RowCount: 20,
            TotalNumber: 0,
            selectList: [{
                label: 'CBU',
                value: 'CBU',
            }, {
                label: 'CKD',
                value: 'CKD',
            }, {
                label: '经销商名称',
                value: 'DealerName',
            }, {
                label: '经销商集团',
                value: 'DealerGroup',
            }, {
                label: '省份',
                value: 'ProvinceName',
            }, {
                label: '城市',
                value: 'CityName',
            },{
                label: '审批策略',
                value: 'ApproveMethod'
            }]
        }
    },
    methods: {
        async getData() { //获取数据
            try {
                const response = await RegionManagers.GetDealerPolicyList({
                  "SearchField": this.SearchField,
                  "SearchValue": this.SearchValue,
                  "SortField": this.SortField,
                  "SortType": this.SortType,
                  "RowOffset": this.RowOffset,
                  "RowCount": this.RowCount
                })
                this.tableList = response.Data.Dealers
                this.TotalNumber = response.Data.TotalNumber
            } catch(error){

            }
        },
        async changeApprovePolicy(index, data){ //审批策略设置
            try{
                const response = await RegionManagers.SetDealerApprovePolicy({
                    "DealerID":data.DealerID,
                    "ApproveMethod":data.ApproveMethod
                })
                if (response.Code != 200) {
                  this.tableList[index].ApproveMethod = data.ApproveMethod == 'AutoApprove' ? 'ManualApprove' : 'AutoApprove'
                }
            }catch(error){
                console.log(error)
            }
        },
        handleSearch(val) {
            if (this.SearchValue.trim()) {
                this.SearchValue = this.SearchValue.trim()
                this.getData()
            }
        },
        handleRadioChange(DealerID,ApproveMethod){
            this.changeApprovePolicy(DealerID,ApproveMethod)
        },
        handleCurrentChange(val) {
            this.RowOffset = val;
            this.getData();
        },
        handleSortChange(obj) {
            this.SortType = obj.order == 'ascending'? 'ASC' : obj.order == 'descending' ? 'DESC' : null
            this.SortField = obj.prop
            this.getData()
        },
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
    .handle-input {
        width: 200px;
        margin: 10px;
        display: inline-block;
    }
    .handle-select {
        width: 120px;
    }
    .el-radio+.el-radio {
        margin-left: 20px;
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
    .el-input--small .el-input__inner {
        height: 34px;
    }
}
</style>
