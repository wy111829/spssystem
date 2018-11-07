<template>
<div class="main-container">
    <!-- <div class="handle-input">
        <el-input placeholder="Typing dealer name to search" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div> -->
    <!-- <el-button type="primary" class="newOrderButton" @click="dialogFormVisible=true">新建区域经理</el-button> -->
    <el-table :data="RegionManagers" class="table" ref="multipleTable">
        <el-table-column prop="RegionName" label="区域"></el-table-column>
        <el-table-column prop="Name" label="姓名"></el-table-column>
        <el-table-column prop="MailBox" label="邮箱"></el-table-column>
        <el-table-column prop="Mobile" label="电话"></el-table-column>
        <el-table-column prop="StatusName" label="状态">
            <template slot-scope="scope">
                <el-switch v-model="scope.row.StatusCode" @change="handleChangeDealerStatus(scope.$index, scope.row)" active-color="#13ce66" inactive-color="#ff4949" active-text="启用" inactive-text="停用" :active-value="101" :inactive-value="102"></el-switch>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
                <el-button type="text" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import {
    BMW
} from '@/networks/api'
export default {
    data() { //选项 / 数据
        return {
            TotalNumber: 5,
            RegionManagers: [{
                "UserID": 15,
                "RegionID": "100001",
                "RegionName": "东区",
                "Name": "张无忌",
                "LoginName": "zhangwuji",
                "MailBox": "Test@Test.com",
                "Mobile": "13900000000",
                "StatusCode": 101,
                "StatusName": "启用"
            }, ],
        }
    },
    methods: { //事件处理器
        handleEdit(index, data) {
            console.log(index, data)
            this.$router.push({
                name: 'systemRegionManagerDetail',
                params: {
                    id: data.UserID
                }
            });
        },
        async getData() {
            try {
                const response = await BMW.GetRMList()
                this.TotalNumber = response.Data.TotalNumber
                this.RegionManagers = response.Data.RegionManagers
            } catch (error) {
                console.log(error)
            }
        },

        async handleChangeDealerStatus(index, data) {
            console.log(data)
            try {
                const response = await BMW.ChangeRMStatus({
                    "UserID": data.UserID,
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

<style lang="less">
.main-container {
    background-color: #fff;
    padding: 10px;
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
