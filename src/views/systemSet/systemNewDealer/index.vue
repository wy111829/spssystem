<template>
<div class="newDealer-container main-container">
    <div class="form-box-newdealer">
        <el-form class="inline-form el-row" :rules="rules" label-width="150px">
            <el-form-item label="CBU：" prop="cbu">
                <el-input v-model="form.cbu" clearable></el-input>
            </el-form-item>
            <el-form-item label="CKD：" prop="ckd">
                <el-input v-model="form.ckd" clearable></el-input>
            </el-form-item>
            <el-form-item label="经销商名称(全称)：" prop="dealerfullname">
                <el-input v-model="form.dealerfullname" clearable></el-input>
            </el-form-item>
            <el-form-item label="经销商名称(简称)：" prop="dealername">
                <el-input v-model="form.dealername" clearable></el-input>
            </el-form-item>
            <el-form-item label="登录名：" prop="username">
                <el-input v-model="form.username" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="form.password" type="password" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码确认：" prop="passwordagain">
                <el-input v-model="form.passwordagain" type="password" clearable></el-input>
            </el-form-item>
            <el-form-item label="经销商集团：" prop="dealercompany">
                <el-input v-model="form.dealercompany" clearable></el-input>
            </el-form-item>
            <el-form-item label="区域： " prop="region">
                <el-select v-model="form.region" @change="regionChange" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in area" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="省份：" prop="province">
                <el-select v-model="form.province" @change="provinceChange" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in provinceList" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="城市：" prop="city">
                <el-select v-model="form.city" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in cityList" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="邮箱：" prop="email">
                <el-input v-model="form.email" clearable></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="stat">
                <el-radio-group v-model="form.stat">
                    <el-radio label="1">启用</el-radio>
                    <el-radio label="0">停用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-row class="text-center">
                <el-button type="primary">保存</el-button>
                <el-button type="info">取消</el-button>
            </el-row>
        </el-form>
    </div>
</div>
</template>

<script>
import areaData from '@/defined/area.js'
export default {
    data() { //选项 / 数据
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            form: {
                cbu: '',
                ckd: '',
                dealerfullname: '',
                dealername: '',
                username: '',
                password: '',
                passwordagain: '',
                region: '',
                province: '',
                city: '',
                dealercompany: '',
                email: '',
                stat: 0,
            },
            rules: {
                cbu: [{
                        required: true,
                        message: '请输入CBU',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                ckd: [{
                        required: true,
                        message: '请输入CKD',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                dealerfullname: [{
                        required: true,
                        message: '请输入经销商名称',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                dealername: [{
                        required: true,
                        message: '请输入CKD',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                username: [{
                        required: true,
                        message: '请输入CKD',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                password: [{
                    required: true,
                    validator: validatePass,
                    trigger: 'blur'
                }],
                passwordagain: [{
                    required: true,
                    validatePass2,
                    trigger: 'blur'
                }],
                region: [{
                    required: true,
                    message: '选择地区',
                    trigger: 'change'
                }],
                province: [{
                    required: true,
                    message: '选择地区',
                    trigger: 'change'
                }],
                city: [{
                    required: true,
                    message: '选择地区',
                    trigger: 'change'
                }],
                dealercompany: [{
                        required: true,
                        message: '请输入CKD',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                email: [{
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
                stat: [{
                    required: true,
                    message: '请填写活动形式',
                    trigger: 'blur'
                }]
            },
            area: [],
            provinceList: [],
            cityList: []
        }
    },
    methods: { //事件处理器
        regionChange(region) {
            console.log('regionChange', region)
            this.provinceList = []
            this.cityList = []
            this.form.province = ''
            this.form.city = ''
            this.area.map((item) => {
                if (item.id == region) {
                    this.provinceList = item.child
                }
            })
        },
        provinceChange(province) {
            console.log('provinceChange', province)
            this.cityList = []
            this.form.city = ''
            this.area.map((item) => {
                if (item.id == this.form.region) {
                    item.child.map((citem) => {
                        if (citem.id == province) {
                            this.cityList = citem.child
                        }
                    })
                }
            })
        },
        initAreaFun(areaData) {
            var arr = []
            for (var index in areaData) {
                // console.log('区---------------',index, areaData[index])
                var item = areaData[index]
                var child = []
                if (item.child) {
                    for (var pindex in item.child) {
                        var pitem = item.child[pindex]
                        // console.log('省-----------', pindex, pitem)
                        var pchild = []
                        if (pitem.child) {
                            for (var cindex in pitem.child) {
                                var citem = pitem.child[cindex]
                                // console.log('市----------', cindex, citem)
                                pchild.push({
                                    id: citem.id,
                                    name: citem.name
                                })
                            }
                        }
                        child.push({
                            id: pitem.id,
                            name: pitem.name,
                            child: pchild
                        })
                    }
                }
                arr.push({
                    id: item.id,
                    name: item.name,
                    child: child
                })
            }
            console.log('处理后', arr)
            this.area = arr
        },
        formTest() {
            if (!form.cbu) {
                this.openalert(rule.cbu[0].message)
                return
            }
            if (!form.ckd) {
                this.openalert(rule.ckd[0].message)
                return
            }
            if (!form.dealerfullname) {
                this.openalert(rule.dealerfullname[0].message)
                return
            }
            if (!form.dealename) {
                this.openalert(rule.dealename[0].message)
                return
            }
            if (!form.username) {
                this.openalert(rule.username[0].message)
                return
            }
            if (!form.dealercompany) {
                this.openalert(rule.dealercompany[0].message)
                return
            }
            if (form.passwordagain == '') {
                this.openalert('请再次输入密码')
                return
            } else if (form.passwordagain == form.password) {
                this.openalert('两次输入密码不一致!')
                return
            }
        },
        openalert(msg) {
            this.$alert(msg, '提示', {
                confirmButtonText: '确定',
                callback: action => {

                }
            })
        }
    },
    components: { //定义组件

    },
    created() { //生命周期函数
        console.log(areaData)
        this.initAreaFun(areaData)
    }
}
</script>

<style lang='less'>
.newDealer-container {
    .form-box-newdealer {
        max-width: 700px;
        margin: 0 auto;
    }
}
</style>
