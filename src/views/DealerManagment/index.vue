<template>
<div class="main-container">
    <div class="search-box">
        <div class="sort-select">
            <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                <el-option label="车牌号" value="PlateNumber"></el-option>
                <el-option label="VIN码" value="VIN"></el-option>
                <el-option label="保险公司" value="Insurer"></el-option>
                <el-option label="车型" value="SubModel"></el-option>
            </el-select>
        </div>
        <div class="handle-input">
            <el-input placeholder="VIN search" v-model="SearchValue" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
    <el-table :data="tableList" class="table" ref="multipleTable" @sort-change="handleSortChange">
        <el-table-column prop="CBU" label="CBU" sortable ></el-table-column>
        <el-table-column prop="CKD" label="CKD" sortable ></el-table-column>
        <el-table-column prop="DealerName" label="经销商名称（简称）" sortable ></el-table-column>
        <el-table-column prop="RegionName" label="地区" ></el-table-column>
        <el-table-column prop="ProvinceName" label="省份" sortable ></el-table-column>
        <el-table-column prop="CityName" label="城市" sortable ></el-table-column>
        <el-table-column prop="DealerGroup" label="经销商集团" sortable ></el-table-column>
        <el-table-column label="审批策略" width="280" align="center" sortable >
            <template slot-scope="scope">
                <el-radio-group v-model="scope.row.ApproveMethod" @change="handleRadioChange(scope.row.DealerID,scope.row.ApproveMethod)">
                    <el-radio label="AutoApprove">永远同意</el-radio>
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
            SearchField: null,
            SearchValue: null,
            SortField: null,
            SortType: null,
            RowOffset: 0,
            RowCount: 20,
            TotalNumber: 0
        }
    },
    methods: {
        async getData() {
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
        async changeApprovePolicy(DealerID,ApproveMethod){
            try{
                const response = await RegionManagers.SetDealerApprovePolicy({
                    "DealerID":DealerID,
                    "ApproveMethod":ApproveMethod
                })
            }catch(error){
                console.log(error)
            }
        },
        handleRadioChange(DealerID,ApproveMethod){
            console.log(DealerID,ApproveMethod);
            this.changeApprovePolicy(DealerID,ApproveMethod)
        },
        handleCurrentChange(val) {
            this.RowOffset = val;
            this.getData();
        },
        handleSortChange(obj) {
            console.log(obj)
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

}
</style>
