<template>
<div class="main-container">
    <div class="search-box">
        <div class="sort-select">
            <el-select v-model="selectword" placeholder="--请选择要查询的字段--" style="width:200px">
                <el-option label="车牌号" value="PlateNumber"></el-option>
                <el-option label="VIN码" value="VIN"></el-option>
                <el-option label="保险公司" value="Insurer"></el-option>
                <el-option label="车型" value="SubModel"></el-option>
            </el-select>
        </div>
        <div class="handle-input">
            <el-input placeholder="VIN search" v-model="input5" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
    <el-table :data="tableList" class="table" ref="multipleTable">
        <el-table-column prop="CBU" label="CBU"></el-table-column>
        <el-table-column prop="CKD" label="CKD"></el-table-column>
        <el-table-column prop="ShortName" label="经销商名称（简称）" width="150"></el-table-column>
        <el-table-column prop="RegionName" label="地区"></el-table-column>
        <el-table-column prop="ProvinceName" label="省份"></el-table-column>
        <el-table-column prop="CityName" label="城市"></el-table-column>
        <el-table-column prop="DealerGroup" label="经销商集团"></el-table-column>
        <el-table-column label="审批策略" width="280" align="center">
            <template slot-scope="scope">
                <el-radio-group v-model="scope.row.ApproveMethod">
                    <el-radio label="AutoApprove">永远同意</el-radio>
                    <el-radio label="ManualApprove">逐单审核</el-radio>
                </el-radio-group>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import {
    General
} from '@/networks/api'
export default {
    name: 'DealerManagment',
    data() {
        return {
            tableList: []
        }
    },
    methods: {
        async getData() {
            try {
                const response = await General.GetDealerPolicyList({
                    "SearchField": "CBU",
                    "SearchValue": "36133",
                    "SortField": "CBU",
                    "SortType": "ASC",
                    "RowOffset": 0,
                    "RowCount": 20
                })
                this.tableList = response.Data.Dealers
            } catch(error){

            }
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
