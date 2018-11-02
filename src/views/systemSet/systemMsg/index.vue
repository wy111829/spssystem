<template >
    <div class="main-container">
        <el-button type="primary">新建消息</el-button>
        <el-table :data="tableList" class="table" ref='multipleTable'>
            <el-table-column label="消息内容" prop="MessageContent"></el-table-column>
            <el-table-column label="消息发送日期" prop="PublishDate"></el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
    </div>

</template>

<script>
export default {
    name: 'systemMsg',
    data(){
        return {
            tableList: [
                {
                    MessageContent:"这是一条测试消息。",
                    PublishDate:"2018-10-19 14:23:38"
                },
                {
                    MessageContent:"这是一条测试消息。",
                    PublishDate:"2018-10-19 14:23:38"
                },
                {
                    MessageContent:"这是一条测试消息。",
                    PublishDate:"2018-10-19 14:23:38"
                },
            ],
            TotalNumber:120,
            RowOffset: 0,
            RowCount: 6,
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.curpage = val;
            this.getData();
        },
    }
}
</script>

<style lang="less">
.table{
    margin-top: 20px;
}
</style>
