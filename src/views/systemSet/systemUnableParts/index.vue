<template>
    <div class="main-container">
        <el-upload class="ImportList" action="/BigAccident/Action/ImportUnAvailablePart" :show-file-list="false" :headers="{'content-type': 'multipart/form-data'}" :on-success="handleFileUploadSuccess">
            <el-button type="primary">导入不可订购配件清单</el-button>
        </el-upload>
        <div class="search-box">
            <div class="sort-select">
                <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                    <el-option v-for="(item, index) in selectList" :key="index" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="handle-input">
                <el-input placeholder="请输入要查询的字段" v-model="SearchValue" class="input-with-select" :disabled="!SearchField">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <!-- <el-button type="primary" class="newOrderButton">导入不可订购配件清单</el-button> -->
            <el-table :data="SpareParts" class="table" ref="multipleTable" @sort-change="handleSortChange">
                <el-table-column prop="PartNumber" label="零件号" sortable ></el-table-column>
                <el-table-column prop="PartName" label="零件名称" sortable></el-table-column>
                <el-table-column prop="Price" label="单价" sortable></el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import {
    BMW
} from '@/networks/api'
export default {
    data() { //选项 / 数据
        return {
            SearchField: null,
            SearchValue: '',
            SortField: null,
            SortType: null,
            TotalNumber: 0,
            RowOffset: 0,
            RowCount: 6,
            SpareParts: [{
                "ID":1021,
                "PartNumber":"83190301639",
                "PartName":"螺栓",
                "Price":2.56
            }],
            selectList: [{
                label: '零件号',
                value: 'PartNumber'
            },{
                label: '零件名称',
                value: 'PartName'
            }]
        }
    },
    methods: { //事件处理器
        handleCurrentChange(val) {
            this.RowOffset = val;
            this.getData();
        },
        handleSortChange(obj) {
            console.log(obj)
            this.SortType = obj.order == 'ascending' ? 'ASC' : obj.order == 'descending' ? 'DESC' : null
            this.SortField = obj.prop
            this.getData()
        },
        handleFileUploadSuccess (res,file)  {
            console.log(res,file)
            if(res.Code == 200) {
                this.getData()
            }
        },
        async getData() {
            try {
                const response = await BMW.GetUnAvailablePartList({
                    "SearchField": this.SearchField,
                    "SearchValue": this.SearchValue,
                    "SortField": this.SortField,
                    "SortType": this.SortType,
                    "RowOffset": this.RowOffset,
                    "RowCount": this.RowCount
                })
                this.TotalNumber = response.Data.TotalNumber
                this.SpareParts = response.Data.SpareParts
            } catch (error) {
                console.log(error)
            }
        },
    },
    components: { //定义组件

    },
    created() { //生命周期函数
        this.getData()
    }
}
</script>

<style lang="less">
.main-container {
    .ImportList{
        margin: 10px;
    }
    background-color: #fff;
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
    .sort-select {
        width: 200px;
        margin: 10px;
        display: inline-block;
    }
    .handle-input {
        width: 300px;
        margin: 10px;
        display: inline-block;
    }
    .newOrderButton {
        color: #fff;
    }
}
</style>
