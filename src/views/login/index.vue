<template>
<div class="login-wrap">
    <div class="ms-login">
        <div class="ms-title">大事故车配件支持系统</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入账号">
                    <el-button slot="prepend"  disabled>账号</el-button>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                    <el-button slot="prepend"  disabled>密码</el-button>
                </el-input>
            </el-form-item>
            <div class="login-btn">
                <el-button type="primary" @click="submitForm">登录</el-button>
            </div>
        </el-form>
    </div>
</div>
</template>

<script>
import {
    General
} from '@/networks/api'
import {
    hex_sha1
} from '@/utils/sha1'
//import '@/MockData/MockData'
export default {
    data: function() {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        submitForm(formName) { //登录button
            if (this.ruleForm.username && this.ruleForm.username.length > 0 && this.ruleForm.password && this.ruleForm.password.length > 0) {
                localStorage.setItem('ms_username', this.ruleForm.username)
                this.goLogin()
            } else {
                this.$alert('用户名或密码错误', '提示')
            }
        },
        async goLogin() { //调用Login接口
            try {
                const response = await General.Login({
                    LoginName: this.ruleForm.username,
                    Password: hex_sha1(this.ruleForm.password)
                })
                if (response.Code == 200){
                    this.$router.push('/orderList')
                }else {
                    //this.$alert('用户名或密码错误', '提示')
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {

    }
}
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/login-bg1.png);
    background-size: 100%;
}

.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}

.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}

.ms-content {
    padding: 30px 30px;
}

.login-btn {
    text-align: center;
}

.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}

.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
