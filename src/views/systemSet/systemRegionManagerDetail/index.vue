<template>
<div class="main-container">
    <div class="RMDetail">
        <el-form :model="Data" class="inline-form el-row" label-width="150px">
            <el-form-item label="地区：" prop="RegionName">
                <el-input v-model="Data.RegionName" disabled></el-input>
            </el-form-item>
            <el-form-item label="区域经理姓名：" prop="Name">
                <el-input v-model="Data.Name"></el-input>
            </el-form-item>
            <el-form-item label="登录名：" prop="LoginName">
                <el-input v-model="Data.LoginName"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="MailBox">
                <el-input v-model="Data.MailBox"></el-input>
            </el-form-item>
            <el-form-item label="手机：" prop="Mobile">
                <el-input v-model="Data.Mobile"></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="Status">
                <el-radio-group v-model="Data.Status">
                    <el-radio :label="101">启用</el-radio>
                    <el-radio :label="102">停用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-row class="text-center">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('')">保存</el-button>
                    <el-button type="info">取消</el-button>
                </el-form-item>
            </el-row>
        </el-form>

    </div>
</div>
</template>

<script>
import {BMW} from '@/networks/api'
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return{
            Data: {
                "UserID":2,
                "RegionID":"100001",
                "RegionName":"东区",
                "Name":"张无忌",
                "LoginName":"zhangwuji",
                "MailBox":"Test@Test.com",
                "Mobile":"13900000000",
                "Status":101
            }
        }
    },
    methods:{
        async GetDealerInfo() {
            try {
                const response = await BMW.GetRMInfo({
                    UserID: this.Data.UserID
                })
                this.Data = response.Data
                // console.log(this.detailData)
            } catch (error) {
                console.log(error)
            }
        },
    },
    created() {
        this.GetDealerInfo()
    }
}
</script>

<style lang="less">
.RMDetail{
    max-width: 700px;
    margin: 0 auto;
}
</style>
