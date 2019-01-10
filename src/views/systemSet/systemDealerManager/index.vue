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
        <router-link to="/systemDealerDetail" class="button">
            <el-button type="primary" class="newOrderButton">新建经销商</el-button>
        </router-link>
    </div>
    <el-table :data="tableList" class="table" ref="multipleTable" @sort-change="handleSortChange" empty-text='搜索结果为空' @row-click="goMessageDetail">
        <el-table-column prop="CustomerNumber" label="账号" sortable></el-table-column>
        <el-table-column prop="CKD" label="CKD" sortable></el-table-column>
        <el-table-column prop="Name" label="经销商名称" sortable width="120"></el-table-column>
        <el-table-column prop="RegionName" label="地区"></el-table-column>
        <el-table-column prop="ProvinceName" label="省份" sortable></el-table-column>
        <el-table-column prop="CityName" label="城市" sortable></el-table-column>
        <el-table-column prop="MailBox1" label="邮箱1" sortable width="160" align="center"></el-table-column>
        <el-table-column prop="MailBox2" label="邮箱2" sortable width="160" align="center"></el-table-column>
        <el-table-column prop="RegionManagerName" label="区域经理" sortable width="100"></el-table-column>
        <el-table-column prop="LastModified" label="更新日期" sortable width="140" align="center"></el-table-column>
        <el-table-column prop="StatusName" label="状态" sortable width="140" fixed="right" align="center">
            <template slot-scope="scope" >
                <el-switch v-model="scope.row.StatusCode"  @click.native="stopBubble"  @change="handleChangeDealerStatus(scope.$index, scope.row)" active-color="#13ce66" inactive-color="#ff4949" active-text="启用" inactive-text="停用" :active-value="101" :inactive-value="102"></el-switch>
            </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="120" fixed="right">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="goMessageDetail(scope.row)" @click.native="stopBubble">编辑</el-button>
                <el-button type="text" icon="el-icon-delete" @click.stop="handleDeletDealer(scope.row)" @click.native="stopBubble" style="color:#ff4949">删除</el-button>
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
    BMW
} from '@/networks/api'
import {mapMutations} from 'vuex'
export default {
    data() { //选项 / 数据
        return {
            SearchField: '',
            SearchValue: '',
            SortField: '',
            SortType: '',
            TotalNumber: 0,
            RowOffset: 0,
            RowCount: 6,
            tableList: [{
                "DealerID": 0,
                "CBU": "",
                "CKD": "",
                "DealerName": "",
                "RegionID": "",
                "RegionName": "",
                "ProvinceID": "",
                "ProvinceName": "",
                "CityID": "",
                "CityName": "",
                "DealerGroup": "",
                "StatusCode": 0,
                "StatusName": ""
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
        goMessageDetail(data) {
            this.$router.push({
                name: 'systemDealerDetail',
                params: {
                    id: data.DealerID
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
                    "StatusCode": data.StatusCode
                })
                if (response.Code != 200) {
                    this.tableList[index].StatusCode = data.StatusCode == 101 ? 102 : 101
                }
            } catch (error) {
                console.log(error)
            }
        },
        async handleDeletDealer(data){
            try {
                const response = await BMW.ChangeDealerStatus({
                    "DealerID": data.DealerID,
                    "StatusCode": 103
                })
                if (response.Code == 200) {
                    let arrindex = this.tableList.indexOf(data)
                    this.tableList.splice(arrindex,1)
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
    .el-input--small .el-input__inner {
        height: 34px;
    }
}
</style>
