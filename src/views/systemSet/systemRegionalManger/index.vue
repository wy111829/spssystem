<template>
<div class="main-container">
    <div class="search-box">
        <div class="sort-select">
            <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                <el-option v-for="(item, index) in selectList" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="handle-input">
            <el-input placeholder="" :disabled="!SearchField" v-model="SearchValue" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
            </el-input>
        </div>
        <router-link to="/systemRegionManagerDetail" class="button">
            <el-button type="primary" class="newOrderButton">新建区域经理</el-button>
        </router-link>
    </div>
    <el-table :data="RegionManagers" class="table" ref="multipleTable" @row-click="goRMDetail" @sort-change="handleSortChange">
        <el-table-column prop="RegionName" label="区域" sortable ></el-table-column>
        <el-table-column prop="Name" label="姓名" sortable></el-table-column>
        <el-table-column prop="MailBox" label="邮箱" sortable></el-table-column>
        <el-table-column prop="Mobile" label="电话" sortable></el-table-column>
        <el-table-column prop="LastModified" label="更新日期" sortable></el-table-column>
        <el-table-column prop="StatusName" label="状态" sortable>
            <template slot-scope="scope">
                <el-switch v-model="scope.row.StatusCode" @click.native="stopBubble" @change="handleChangeDealerStatus(scope.$index, scope.row)" active-color="#13ce66" inactive-color="#ff4949" active-text="启用" inactive-text="停用" :active-value="101" :inactive-value="102"></el-switch>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="goRMDetail(scope.row)" @click.native="stopBubble">编辑</el-button>
                <el-button type="text" icon="el-icon-delete" @click.stop="handleDeletRM(scope.row)" @click.native="stopBubble" style="color:#ff4949">删除</el-button>
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
    HQ
} from '@/networks/api'

export default {
    data() { //选项 / 数据
        return {
            SearchField: '',
            SearchValue: '',
            SortField: '',
            SortType: '',
            RowOffset: 0,
            RowCount: 6,
            TotalNumber: 5,
            RegionManagers: [{
                "ID": 15,
                "RegionID": "100001",
                "RegionName": "东区",
                "Name": "张无忌",
                "LoginName": "zhangwuji",
                "MailBox": "Test@Test.com",
                "Mobile": "13900000000",
                "StatusCode": 101,
                "StatusName": "启用"
            }],
            selectList: [{
                label: '地区',
                value: 'RegionName',
            }, {
                label: '区域经理姓名',
                value: 'Name',
            }, {
                label: '邮箱',
                value: 'MailBox',
            }, {
                label: '手机',
                value: 'Mobile',
            }]
        }
    },
    methods: { //事件处理器
        stopBubble () {
            event.stopPropagation()
        },
        handleCurrentChange(val) {
            this.RowOffset = val;
            this.getData();
        },
        handleSortChange(obj) {
            this.SortType = obj.order == 'ascending' ? 'ASC' : obj.order == 'descending' ? 'DESC' : null
            this.SortField = obj.prop
            this.getData()
        },
        goRMDetail(data){
            this.$router.push({
                name: 'systemRegionManagerDetail',
                params: {
                    id: data.ID
                }
            });
        },
        handleSearch(val) {
            if (this.SearchValue.trim()) {
                this.SearchValue = this.SearchValue.trim()
                this.getData()
            }
        },
        async getData() {
            try {
                const response = await HQ.GetRMList({
                    "SearchField": this.SearchField,
                    "SearchValue": this.SearchValue,
                    "SortField": this.SortField,
                    "SortType": this.SortType,
                    "RowOffset": this.RowOffset,
                    "RowCount": this.RowCount
                })
                this.TotalNumber = response.Data.TotalNumber
                this.RegionManagers = response.Data.RegionManagers
            } catch (error) {
                console.log(error)
            }
        },

        async handleChangeDealerStatus(index, data) {
            try {
                const response = await HQ.ChangeRMStatus({
                    "ID": data.ID,
                    "StatusCode": data.StatusCode
                })
                if (response.Code != 200) {
                    this.tableList[index].StatusCode = data.StatusCode == 101 ? 102 : 101
                }
            } catch (error) {
                console.log(error)
            }
        },
        async handleDeletRM(data){
            try {
                const response = await HQ.ChangeRMStatus({
                    "ID": data.ID,
                    "StatusCode": 103
                })
                if (response.Code == 200) {
                    let arrindex = this.RegionManagers.indexOf(data)
                    this.RegionManagers.splice(arrindex,1)
                }
            } catch (error) {
                console.log(error)
            }
        }
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
    background-color: #fff;
    padding: 10px;
    .search-box {
        padding: 10px 0;
    }
    .handle-input {
        width: 300px;
        margin: 10px;
        display: inline-block;
    }
    .sort-select {
        width: 200px;
        margin: 10px;
        display: inline-block;
    }
    .newOrderButton {
        color: #fff;
    }
    .el-input--small .el-input__inner {
        height: 34px;
    }
}
</style>
