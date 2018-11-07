<template>
<div class="main-container">
    <div class="search-box">
        <div class="sort-select">
            <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                <el-option v-for="(item, index) in selectList" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="handle-input">
            <el-input placeholder="Typing dealer name to search" v-model="SearchValue" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <router-link to="/systemDealerDetail" class="button">
            <el-button type="primary" class="newOrderButton">新建经销商</el-button>
        </router-link>
    </div>
    <el-table :data="tableList" class="table" ref="multipleTable" @sort-change="handleSortChange">
        <el-table-column prop="CBU" label="CBU" sortable></el-table-column>
        <el-table-column prop="CKD" label="CKD" sortable></el-table-column>
        <el-table-column prop="ShortName" label="经销商名称（简称）" sortable></el-table-column>
        <el-table-column prop="RegionName" label="地区"></el-table-column>
        <el-table-column prop="ProvinceName" label="省份" sortable></el-table-column>
        <el-table-column prop="CityName" label="城市" sortable></el-table-column>
        <el-table-column prop="DealerGroup" label="经销商集团" sortable></el-table-column>
        <el-table-column prop="StatusName" label="状态" sortable width=150>
            <template slot-scope="scope">
                <el-switch v-model="scope.row.StatusCode" @change="handleChangeDealerStatus(scope.$index, scope.row)" active-color="#13ce66" inactive-color="#ff4949" active-text="启用" inactive-text="停用" :active-value="101" :inactive-value="102"></el-switch>
            </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
            tableList: [{
                "DealerID": 122121,
                "CBU": "36133",
                "CKD": "36131",
                "ShortName": "北京华德宝",
                "RegionID": "100004",
                "RegionName": "北区",
                "ProvinceID": "110000",
                "ProvinceName": "北京",
                "CityID": "110100",
                "CityName": "北京",
                "DealerGroup": "北京经销商集团",
                "StatusCode": 101,
                "StatusName": "启用"
            }],
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
                label: '地区',
                value: 'RegionName',
            }, {
                label: '省份',
                value: 'ProvinceName',
            }, {
                label: '城市',
                value: 'CityName',
            }]
        }
    },
    methods: { //事件处理器
        handleCurrentChange(val) {
            this.RowOffset = val;
            this.getData();
        },
        handleSortChange(obj) {
            this.SortType = obj.order == 'ascending' ? 'ASC' : obj.order == 'descending' ? 'DESC' : null
            this.SortField = obj.prop
            this.getData()
        },
        handleEdit(index, data) {
            this.$router.push({
                name: 'systemDealerDetail',
                params: {
                    id: data.DealerID
                }
            });
        },
        async getData() {
            try {
                const response = await BMW.GetDealerList({
                    "SearchField": this.SearchField,
                    "SearchValue": this.SearchValue,
                    "SortField": this.SortField,
                    "SortType": this.SortType,
                    "RowOffset": this.RowOffset,
                    "RowCount": this.RowCount
                })
                this.TotalNumber = response.Data.TotalNumber
                this.tableList = response.Data.Dealers
            } catch (error) {
                console.log(error)
            }
        },
        async handleChangeDealerStatus(index, data) {
            try {
                const response = await BMW.ChangeDealerStatus({
                    "DealerID": data.DealerID,
                    "Status": data.StatusCode
                })
                if (response.Code != 200) {
                    this.tableList[index].StatusCode = data.StatusCode == 101 ? 102 : 101
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

<style lang='less'>
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
