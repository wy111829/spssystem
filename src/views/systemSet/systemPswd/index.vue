<template>
    <div class="main-container">
        <div class="changePassWord">
            <el-form class="inline-form el-row" label-width="150px" ref="Data" :model="Data" :rules="rules">
                <el-form-item label="用户名：">
                    <el-input v-model="Data.username" readonly></el-input>
                </el-form-item>
                <el-form-item label="当前密码：" prop="OldPassword">
                    <el-input v-model="Data.OldPassword" type="password"></el-input>
                </el-form-item>
                <el-form-item label="请输入新密码："  prop="NewPassword">
                    <el-input v-model="Data.NewPassword" type="password"></el-input>
                </el-form-item>
                <el-form-item label="请再次输入新密码：" prop="NewPasswordAgain">
                    <el-input v-model="Data.NewPasswordAgain" type="password"></el-input>
                </el-form-item>
                <el-row class="text-center">
                    <el-button type="primary" @click="submitForm('Data')">保存</el-button>
                    <el-button type="info" @click="handleGoBack">取消</el-button>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>
import {General} from '@/networks/api'
import {mapState,mapMutations} from 'vuex'
export default {
    data() { //选项 / 数据
        var validatePass = (rule, value, callback) => {
            if (value === '' || value=== undefined || value.trim() == '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.Data.NewPasswordAgain !== '') {
                    this.$refs.Data.validateField('NewPasswordAgain')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '' || value=== undefined || value.trim() == '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.Data.NewPassword) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            Data: {
                username: '',
                OldPassword: '',
                NewPassword: '',
                NewPasswordAgain: ''
            },
            rules: {
                OldPassword: [{
                    required: true,
                    message:'当前密码',
                    trigger: 'blur'
                }],
                NewPassword: [{
                    required: true,
                    validator: validatePass,
                    trigger: 'blur'
                }],
                NewPasswordAgain: [{
                    required: true,
                    validator: validatePass2,
                    trigger: 'blur'
                }],
            }
        }
    },
    computed: {
        ...mapState([
            'UserName',
            'UserRole'
        ])
    },
    methods: { //事件处理器
        ...mapMutations([
          'closeTags'
        ]),
        getUserName() {
            console.log(this.UserName)
            this.Data.username = this.UserName
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.ChangePassword()
                } else {
                    alert('error submit!!');
                    return false;
                }
            })
        },
        async ChangePassword(){
            try {
                const response = await General.ChangePassword({
                    OldPassword:this.Data.OldPassword,
                    NewPassword:this.Data.NewPassword
                })
                if (response.Code == 200) {
                    this.alertDialog()
                }
            } catch (e) {
                console.log(e)
            }
        },
        alertDialog() {
            this.$alert('操作完成', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() {
            this.closeTags(this.$route.name)
            // this.$router.push({
            //     name: 'orderList'
            // })
        }

    },
    components: { //定义组件

    },
    created() { //生命周期函数
        this.getUserName()
    }
}
</script>

<style>
.changePassWord{
    max-width: 700px;
    margin: 0 auto;
}
</style>
