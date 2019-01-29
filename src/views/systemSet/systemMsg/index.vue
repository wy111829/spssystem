<template >
    <div class="main-container">
        <router-link class="button" to="/systemMsgNew">
            <el-button type="primary" v-if="UserRole == 'HQ-BP' ||UserRole == 'Administrator' ">新建消息</el-button>
        </router-link>
        <div class="search-box">
            <div class="sort-select">
                <el-select v-model="SearchField" placeholder="--请选择要查询的字段--" style="width:200px">
                    <el-option v-for="(item, index) in selectList" :key="index" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="handle-input">
                <el-input placeholder="" v-model="SearchValue" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                </el-input>
            </div>
        </div>
        <el-table :data="Messages" class="table" ref='multipleTable' @row-click="goMessageDetail" @sort-change="handleSortChange">
            <el-table-column label="消息内容" prop="MessageContent"></el-table-column>
            <el-table-column label="消息发送日期" prop="PublishDate" sortable ></el-table-column>
            <el-table-column label="操作" align="center"  v-if="UserRole == 'HQ-BP' ||UserRole == 'Administrator' ">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-delete" @click.stop="handleDelet(scope.row)" style="color:#ff4949">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="TotalNumber">
            </el-pagination>
        </div>
        <el-dialog title="消息内容" :visible.sync="dialogFormVisible">
            <div class="MessageContentDetail">
                <div class="MessageDetail">{{MessageDetail}}</div>
                <div class="PublishDate">
                    <span>消息发送日期:</span>
                    <span>{{MessageDetailPublishDate}}</span>
                </div>
            </div>
            <div slot="footer" class="text-center">
                <el-button @click="dialogFormVisible = false">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {
    General,
    HQ
} from '@/networks/api'
import {
    mapState,
    mapMutations
} from 'vuex'
export default {
    name: 'systemMsg',
    data(){
        return {
            Messages: [
                {
                "ID":23,
                "MessageContent":"这是一条测试消息。",
                "PublishDate":"2018-10-19 14:23:38"
            }],
            TotalNumber:120,
            RowOffset:0,
            RowCount: 20,
            SearchField: '',
            SearchValue: '',
            SortField: 'CreateDate',
            SortType: 'DESC',
            dialogFormVisible: false,
            MessageDetail: '',
            MessageDetailPublishDate:'',
            selectList: [{
                label: '--请选择要查询的字段--',
                value: ''
            },{
                label: '消息内容',
                value: 'MessageContent'
            }]
        }
    },
    computed: {
        ...mapState([
            'UserName',
            'UserRole'
        ])
    },
    methods: {
        handleCurrentChange(val) {
            this.RowOffset = val
            this.GetSysMessageList()
        },
        handleDelet(data){
            this.DeleteSysMessage(data)
        },
        async DeleteSysMessage(data) {
            try {
                const response = await HQ.DeleteSysMessage({
                    ID : data.ID
                })
                if (response.Code == 200) {
                    this.GetSysMessageList()
                    this.$alert('删除成功')
                }
            } catch (error) {
                console.log(error)
            }
        },
        handleSearch(val) {
            if (this.SearchValue.trim()) {
                this.SearchValue = this.SearchValue.trim()
                this.GetSysMessageList()
            }
        },
        handleSortChange(obj) {
            //console.log(obj)
            this.SortType = obj.order == 'ascending'? 'ASC' : obj.order == 'descending' ? 'DESC' : null
            this.SortField = obj.prop
            this.GetSysMessageList()
        },
        handleCurrentChange(val) {
            this.RowOffset = val;
            this.GetSysMessageList();
        },
        async GetSysMessageList() {
            try {
                const response = await General.GetSysMessageList({
                    "RowOffset":this.RowOffset,
                    "RowCount":this.RowCount,
                    "SearchField": this.SearchField,
                    "SearchValue": this.SearchValue,
                    "SortField": this.SortField,
                    "SortType": this.SortType
                })
                this.TotalNumber = response.Data.TotalNumber
                this.Messages = response.Data.Messages
                this.Messages.forEach((item,index)=>{
                    //控制消息列表消息内容字数
                    item.MessageContent = item.MessageContent.substring(0,15)
                })
            } catch (error) {
                console.log(error)
            }
        },
        async goMessageDetail(data) {
            try {
                const response = await General.GetSysMessage({
                    ID : data.ID
                })
                this.MessageDetail = response.Data.MessageContent
                this.MessageDetailPublishDate = response.Data.PublishDate
                this.dialogFormVisible = true
            } catch (error) {
                console.log(error)
            }
        },
    },
    created(){
        this.GetSysMessageList()
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
    .el-input--small .el-input__inner {
    height: 32px;
    line-height: 30px;
}
}

.MessageDetail{
    min-height: 50px;
    margin:20px;
}
.PublishDate{
    float: right;
}
</style>
