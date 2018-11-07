<template>
<div class="main-container">
    <!-- <el-button type="primary" class="newOrderButton" @click="dialogFormVisible=true">新建邮箱地址</el-button> -->
    <el-table :data="MailAddresses" class="table" ref="multipleTable">
        <el-table-column prop="MailBox" label="邮箱"></el-table-column>
        <el-table-column prop="MailBoxName" label="使用人"></el-table-column>
        <el-table-column prop="StatusName" label="状态">
            <template slot-scope="scope">
                <el-switch v-model="scope.row.StatusCode" @change="ChangeMailAddressStatus(scope.$index, scope.row)" active-color="#13ce66" inactive-color="#ff4949" active-text="启用" inactive-text="停用" :active-value="101" :inactive-value="102"></el-switch>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
                <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- <el-dialog title="邮箱地址" :visible.sync="dialogFormVisible">
        <el-form :model="newInfo" label-width="80px">
            <el-form-item label="邮箱地址">
                <el-input v-model="newInfo.emailaddress" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-select v-model="newInfo.role" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="状态">
                <el-radio-group v-model="newInfo.stat">
                    <el-radio label="可用"></el-radio>
                    <el-radio label="禁用"></el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <div slot="footer" class="text-center">
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
    </el-dialog> -->
</div>
</template>

<script>
import {
    BMW
} from '@/networks/api'
export default {
    data() { //选项 / 数据
        return {
            TotalNumber: 2,
            MailAddresses: [{
                "MailBoxCode":"BodyPaint",
                "MailBoxName":"宝马钣喷业务组",
                "MailBox":"body-paint@list.bmw.com",
                "StatusCode":101,
                "StatusName":"启用"
            }],
            newInfo: {
                emailaddress: '',
                role: '',
                stat: false
            },
            dialogFormVisible: false,
        }
    },
    methods: { //事件处理器
        handleEdit(index, data) {
            console.log(index, data)
            this.$router.push({
                name: 'systemEmailAdressDetail',
                params:{
                    id: data.MailBoxCode
                }
            });
        },
        async ChangeMailAddressStatus(index, data) {
            try {
                const response = await BMW.ChangeMailAddressStatus({
                    "MailBoxCode": data.MailBoxCode,
                    "StatusCode": data.StatusCode
                })
                if (response.Code != 200) {
                    this.MailAddresses[index].StatusCode = data.StatusCode == 101 ? 102 : 101
                }
            } catch (error) {
                console.log(error)
            }
        },
        async getData(){
            try {
                const response = await BMW.GetMailAddressList()
                this.TotalNumber = response.Data.TotalNumber
                this.MailAddresses = response.Data.MailAddresses
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
