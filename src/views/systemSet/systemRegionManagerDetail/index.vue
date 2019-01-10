<template>
<div class="main-container">
    <el-row :gutter="20">
        <el-col :md="12" :sm="24">
            <div class="RMDetail">
                <el-form ref="Data" :model="Data" class="inline-form el-row" label-width="150px" :rules="rules">
                    <el-form-item label="账号(邮箱)：" prop="MailBox">
                        <el-input v-model="Data.MailBox" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="地区：" prop="RegionName">
                        <el-input v-model="Data.RegionName"></el-input>
                    </el-form-item>
                    <el-form-item label="区域经理姓名：" prop="Name">
                        <el-input v-model="Data.Name"></el-input>
                    </el-form-item>
                    <el-form-item label="手机：" prop="Mobile">
                        <el-input v-model="Data.Mobile" clearable></el-input>
                    </el-form-item>
                    <template v-if="Data.ID == 0">
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
                    <template v-if="Data.ID != 0">
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
                </el-form>
            </div>
        </el-col>
        <el-col :md="12" :sm="24">
            <div class="SelectDealerList">
                <template>
                    <el-transfer filterable filter-placeholder="查询关键字"
                     v-model="value2"
                     :titles="[Data.RegionName+'所有经销商',Data.Name+'所辖经销商']"
                     :data="data2">
                    </el-transfer>
                </template>
            </div>
        </el-col>
        <el-col :span="24">
            <div class="text-center" style="margin-top:20px;">
                <el-button type="primary" @click="submitForm('Data')">保存</el-button>
                <el-button type="info" @click="handleGoBack">取消</el-button>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import {
    BMW
} from '@/networks/api'
import {
    mapState,
    mapMutations
} from 'vuex'
import {
    hex_sha1
} from '@/utils/sha1'
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
        return {
            Data: {
                "ID": null,
                "RegionID": "",
                "RegionName": "",
                "Name": "",
                "LoginName": "",
                "MailBox": "",
                "Mobile": 0,
                "StatusCode": 0,
                Password: '',
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
                MailBox: [{
                        //required: true,
                        message: '请输入邮箱地址',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: ['blur', 'change']
                    }
                ],
                // Mobile:[{
                //         required: true,
                //         message: '请输入手机号码',
                //         trigger: 'blur'
                //     },
                //     {
                //         type: 'number',
                //         message: '请输入正确的手机号码',
                //         trigger: ['blur', 'change']
                //     }
                // ]
            }
        }
    },
    methods: {
        ...mapMutations([
            'closeTags'
        ]),
        async UpdateRM() {
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
                    ID: this.Data.ID
                })
                this.Data = response.Data
                // console.log(this.detailData)
            } catch (error) {
                console.log(error)
            }
        },
        routeChange() {
            this.Data.ID = this.$route.params.id ? this.$route.params.id : 0
            if (this.Data.ID) {
                this.GetRMInfo()
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
    watch: {
        '$route': 'routeChange'
    },
    created() {
        this.routeChange()
    }
}
</script>

<style lang="less">
.el-transfer-panel {
    width: 35%;
}
.el-transfer__buttons {
    width: 5%;
}
.el-transfer-panel .el-transfer-panel__header .el-checkbox .el-checkbox__label{
    font-size: 14px;
    color: #606266;
}
</style>
