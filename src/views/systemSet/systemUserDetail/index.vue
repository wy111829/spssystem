<template>
<div class="main-container">
    <div class="EmailDetail">
        <el-form ref="Data" :model="Data" class="inline-form el-row" label-width="150px" :rules="rules">
            <el-form-item label="账号(邮箱) :" prop="MailBox">
                <el-input v-model="Data.LoginName" clearable></el-input>
            </el-form-item>
            <el-form-item label="名称 :" prop="Name">
                <el-input v-model="Data.Name" clearable></el-input>
            </el-form-item>
            <el-form-item label="角色 :" prop="RoleName">
                <el-select v-model="Data.RoleCode" placeholder="--请选择角色--">
                    <el-option label="总部管理员" value="HQ-Administrator"></el-option>
                    <el-option label="物流部" value="Logistics"></el-option>
                </el-select>
            </el-form-item>
            <template v-if="Data.RoleCode == 'HQ-Administrator'">
                <template v-if="Data.UserID == 0">
                    <el-form-item label="密码：" prop="Password">
                        <el-input v-model="Data.Password" type="Password" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="密码确认：" prop="Passwordagain">
                        <el-input v-model="Data.Passwordagain" type="Password" clearable></el-input>
                    </el-form-item>
                </template>
                <el-form-item label="状态：" prop="StatusCode">
                    <el-radio-group v-model="Data.StatusCode">
                        <el-radio :label="101">启用</el-radio>
                        <el-radio :label="102">停用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <template v-if="Data.UserID != 0">
                    <el-form-item label="修改密码：" prop="pswCheck">
                        <el-checkbox v-model="pswCheck"></el-checkbox>
                    </el-form-item>
                    <template v-if="pswCheck">
                        <el-form-item label="密码：" prop="Password">
                            <el-input v-model="Data.Password" type="Password" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="密码确认：" prop="Passwordagain">
                            <el-input v-model="Data.Passwordagain" type="Password" clearable></el-input>
                        </el-form-item>
                    </template>
                </template>
            </template>
            <el-row class="text-center">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('Data')">保存</el-button>
                    <el-button type="danger" @click="handleDeletUser('Data')" v-if="Data.ID != 0">删除</el-button>
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
import {hex_sha1} from '@/utils/sha1'
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '' || value === undefined || value.trim() == '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.Data.Passwordagain !== '') {
                    this.$refs.Data.validateField('Passwordagain')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '' || value === undefined || value.trim() == '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.Data.Password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return{
            Data:{
                "UserID":10,
                "LoginName":"body-paint@list.bmw.com",
                "Name":"宝马总部",
                "RoleCode":"HQ-Administrator",
                "RoleName":"总部管理员",
                "StatusCode":101,
                "StatusName":"启用",
                Password:'',
            },
            pswCheck: false,
            rules: {
                LoginName: [{
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
                Password: [{
                    required: true,
                    validator: validatePass,
                    trigger: 'blur'
                }],
                Passwordagain: [{
                    required: true,
                    validator: validatePass2,
                    trigger: 'blur'
                }],
            }
        }
    },
    methods: {
        ...mapMutations([
          'closeTags'
        ]),
        async UpdateUser (){
            try {
                const response = await BMW.CreateOrUpdateUser({
                    Operation: this.Data.UserID ? 'Update' : 'Create',
                    User: this.Data
                })
                if (response.Code == 200) {
                    this.alertDialog()
                }
            } catch (e) {
                console.log(e)
            }
        },
        submitForm(formName) {
            if (!this.pswCheck) {
                this.$delete(this.Data, 'Password'),
                this.$delete(this.Data, 'Passwordagain')
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.Data.Password) {
                        this.Data.Password = hex_sha1(this.Data.Password)
                        this.Data.Passwordagain = hex_sha1(this.Data.Passwordagain)
                    }
                    console.log(this.Data)
                    this.UpdateUser()
                } else {
                    alert('error submit!!');
                    return false;
                }
            })
        },
        async handleDeletUser(data){
            try {
                const response = await BMW.ChangeUserStatus({
                    "UserID": data.ID,
                    "StatusCode": 103
                })
                if (response.Code == 200) {
                    this.alertDialog()
                }
            } catch (error) {
                console.log(error)
            }
        },
        routeChange() {
            this.Data.UserID = this.$route.params.id ? this.$route.params.id : 0
            if (this.Data.UserID ) {
                this.GetUserInfo()
            }
        },
        async GetUserInfo() {
            try {
                const response = await BMW.GetUserInfo({
                    ID : this.Data.UserID
                })
                this.Data = response.Data
            } catch (error) {
                console.log(error)
            }
        },
        alertDialog() {
            this.$alert('操作完成，返回用户列表', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() {
            this.closeTags(this.$route.name)
            this.$router.push({
                name: 'systemUserManager'
            })
        }
    },
    watch: {
        '$route': 'routeChange'
    },
    created() {
        this.routeChange()
    }
}
</script>

<style lang="less">
.EmailDetail{
    max-width: 700px;
    margin: 0 auto;
}
</style>
