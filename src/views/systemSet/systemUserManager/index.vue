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
        <router-link to="/systemUserDetail" class="button">
            <el-button type="primary" class="newOrderButton">新建用户</el-button>
        </router-link>
    </div>
    <el-table :data="Users" class="table" ref="multipleTable" @row-click="goUserDetail" @sort-change="handleSortChange">
        <el-table-column prop="LoginName" label="账号(邮箱)" sortable ></el-table-column>
        <el-table-column prop="Name" label="名称" sortable></el-table-column>
        <el-table-column prop="RoleName" label="角色" sortable></el-table-column>
        <el-table-column prop="LastModified" label="更新时间" sortable></el-table-column>
        <el-table-column prop="StatusName" label="状态">
            <template slot-scope="scope">
                <el-switch v-model="scope.row.StatusCode" @click.native="stopBubble" @change="ChangeUserStatus(scope.$index, scope.row)" active-color="#13ce66" inactive-color="#ff4949" active-text="启用" inactive-text="停用" :active-value="101" :inactive-value="102"></el-switch>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="goUserDetail(scope.row)" @click.native="stopBubble">编辑</el-button>
                <el-button type="text" icon="el-icon-delete" @click.stop="confirmOperation(scope.row)" @click.native="stopBubble" style="color:#ff4949">删除</el-button>
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
import {
    mapState
} from 'vuex'
export default {
    data() { //选项 / 数据
        return {
            SearchField: '',
            SearchValue: '',
            SortField: '',
            SortType: '',
            RowOffset: 0,
            RowCount: 6,
            TotalNumber: 2,
            Users: [{
                UserID:0,
                LoginName:"",
                Name:"",
                RoleCode:"",
                RoleName:"",
                StatusCode:101,
                StatusName:"启用",
                LastModified:""
            }],
            selectList: [{
                label: '账号(邮箱)',
                value: 'LoginName',
            },{
                label: '名称',
                value: 'Name',
            },{
                label: '角色',
                value: 'RoleName',
            },{
                label: '状态',
                value: 'StatusName',
            },]
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
        goUserDetail(data){
            this.$router.push({
                name: 'systemUserDetail',
                params: {
                    id: data.UserID
                }
            });
        },
        handleSearch(val) {
            if (this.SearchValue.trim()) {
                this.SearchValue = this.SearchValue.trim()
                this.getData()
            }
        },
        async ChangeUserStatus(index, data) {
            console.log(data);
            try {
                const response = await HQ.ChangeUserStatus({
                    "UserID": data.UserID,
                    "RoleCode":data.RoleCode,
                    "StatusCode": data.StatusCode
                })
                if (response.Code != 200) {
                    this.Users[index].StatusCode = data.StatusCode == 101 ? 102 : 101
                }
            } catch (error) {
                console.log(error)
            }
        },
        confirmOperation(data) {
            console.log(data);
            this.$confirm('确认删除'+ data.Name +'？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.handleDeletUser(data)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消操作'
                });
            });
        },
        async handleDeletUser(data){
            try {
                const response = await HQ.ChangeUserStatus({
                    "UserID": data.UserID,
                    "RoleCode": data.RoleCode,
                    "StatusCode": 103
                })
                if (response.Code == 200) {
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    });
                    let arrindex = this.Users.indexOf(data)
                    this.Users.splice(arrindex,1)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async getData(){
            try {
                const response = await HQ.GetUserList({
                    "SearchField": this.SearchField,
                    "SearchValue": this.SearchValue,
                    "SortField": this.SortField,
                    "SortType": this.SortType,
                    "RowOffset": this.RowOffset,
                    "RowCount": this.RowCount
                })
                this.TotalNumber = response.Data.TotalNumber
                this.Users = response.Data.Users
            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {
        ...mapState([
            'UserName',
            'UserRole'
        ]),
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
