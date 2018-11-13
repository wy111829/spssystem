<template >
    <div class="main-container">
        <router-link class="button" to="/systemMsgNew">
            <el-button type="primary" v-if="UserRole == 'BMW-BP' ||UserRole == 'Administrator' ">新建消息</el-button>
        </router-link>
        <el-table :data="Messages" class="table" ref='multipleTable' @row-click="goMessageDetail">
            <el-table-column label="消息内容" prop="MessageContent"></el-table-column>
            <el-table-column label="消息发送日期" prop="PublishDate"></el-table-column>
            <el-table-column label="操作" align="center"  v-if="UserRole == 'BMW-BP' ||UserRole == 'Administrator' ">
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
    BMW
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
            dialogFormVisible: false,
            MessageDetail: '',
            MessageDetailPublishDate:''
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
            this.GetSysMessageList()
        },
        async DeleteSysMessage(data) {
            try {
                const response = await BMW.DeleteSysMessage({
                    ID : data.ID
                })
                if (response.Code == 200) {
                    this.$alert('删除成功')
                }
            } catch (error) {
                console.log(error)
            }
        },
        async GetSysMessageList() {
            try {
                const response = await General.GetSysMessageList({
                    "RowOffset":this.RowOffset,
                    "RowCount":this.RowCount
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
.table{
    margin-top: 20px;
}
.MessageDetail{
    min-height: 50px;
    margin:20px;
}
.PublishDate{
    float: right;
}
</style>
