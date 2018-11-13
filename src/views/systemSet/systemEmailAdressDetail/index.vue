<template>
<div class="main-container">
    <div class="EmailDetail">
        <el-form ref="Data" :model="Data" class="inline-form el-row" label-width="150px" :rules="rules">
            <el-form-item label="使用人" prop="MailBoxName">
                <el-input v-model="Data.MailBoxName" disabled></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="MailBox">
                <el-input v-model="Data.MailBox" clearable></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="StatusCode">
                <el-radio-group v-model="Data.StatusCode">
                    <el-radio :label="101">启用</el-radio>
                    <el-radio :label="102">停用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-row class="text-center">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('Data')">保存</el-button>
                    <el-button type="info" @click="handleGoBack">取消</el-button>
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
            Data:{
                "MailBoxCode":"BodyPaint",
                "MailBoxName":"宝马钣喷业务组",
                "MailBox":"body-paint@list.bmw.com",
                "StatusCode":101,
                "StatusName":"启用"
            },
            rules: {
                MailBox: [{
                        required: true,
                        message: '请输入邮箱地址',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: ['blur', 'change']
                    }
                ],
            }
        }
    },
    methods: {
        ...mapMutations([
          'closeTags'
        ]),
        async UpdateMailAddress (){
            try {
                const response = await BMW.UpdateMailAddress(this.Data)
                if (response.Code == 200) {
                    this.alertDialog()
                }
            } catch (e) {
                console.log(e)
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.UpdateMailAddress()
                } else {
                    alert('error submit!!');
                    return false;
                }
            })
        },
        async GetMailAddressInfo() {
            try {
                const response = await BMW.GetMailAddressInfo({
                    MailBoxCode : this.Data.MailBoxCode
                })
                this.Data = response.Data
            } catch (error) {
                console.log(error)
            }
        },
        alertDialog() {
            this.$alert('操作完成，返回邮件地址列表', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() {
            this.closeTags(this.$route.name)
            this.$router.push({
                name: 'systemEmailAdressList'
            })
        }
    },
    created() {
        this.GetMailAddressInfo()
    }
}
</script>

<style lang="less">
.EmailDetail{
    max-width: 700px;
    margin: 0 auto;
}
</style>
