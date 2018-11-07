<template>
<div class="main-container">
    <div class="RMDetail">
        <el-form ref="Data" :model="Data" class="inline-form el-row" label-width="150px" :rules="rules">
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
        var validatePass = (rule, value, callback) => {
            if (value === '' || value=== undefined || value.trim() == '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.Data.Passwordagain !== '') {
                    this.$refs.Data.validateField('Passwordagain')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '' || value=== undefined || value.trim() == '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.Data.Password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return{
            Data: {
                "UserID":2,
                "RegionID":"100001",
                "RegionName":"东区",
                "Name":"张无忌",
                "LoginName":"zhangwuji",
                "MailBox":"Test@Test.com",
                "Mobile":"13900000000",
                "Status":101,
                Password:'',
            },
            pswCheck: false,
            rules: {
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
    methods:{
        ...mapMutations([
          'closeTags'
        ]),
        async UpdateRM (){
            try {
                const response = await BMW.UpdateRM(this.Data)
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
                    this.UpdateRM()
                } else {
                    alert('error submit!!');
                    return false;
                }
            })
        },
        async GetRMInfo() {
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
        alertDialog() {
            this.$alert('操作完成，返回区域经理列表', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() {
            this.closeTags(this.$route.name)
            this.$router.push({
                name: 'systemRegionalManger'
            })
        }
    },
    created() {
      console.log(this.Data, this.pswCheck)
        this.GetRMInfo()
    }
}
</script>

<style lang="less">
.RMDetail{
    max-width: 700px;
    margin: 0 auto;
}
</style>
