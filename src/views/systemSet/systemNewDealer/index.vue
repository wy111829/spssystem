<template>
<div class="newDealer-container main-container">
    <div class="form-box-newdealer">
        <el-form class="inline-form el-row" ref="Dealer" :model="Dealer" :rules="rules" label-width="150px">
            <el-form-item label="CBU：" prop="CBU">
                <el-input v-model="Dealer.CBU" clearable></el-input>
            </el-form-item>
            <el-form-item label="CKD：" prop="CKD">
                <el-input v-model="Dealer.CKD" clearable></el-input>
            </el-form-item>
            <el-form-item label="经销商名称(全称)：" prop="FullName">
                <el-input v-model="Dealer.FullName" clearable></el-input>
            </el-form-item>
            <el-form-item label="经销商名称(简称)：" prop="ShortName">
                <el-input v-model="Dealer.ShortName" clearable></el-input>
            </el-form-item>
            <el-form-item label="登录名：" prop="LoginName">
                <el-input v-model="Dealer.LoginName" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="Password">
                <el-input v-model="Dealer.Password" type="Password" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码确认：" prop="Passwordagain">
                <el-input v-model="Dealer.Passwordagain" type="Password" clearable></el-input>
            </el-form-item>
            <el-form-item label="经销商集团：" prop="DealerGroup">
                <el-input v-model="Dealer.DealerGroup" clearable></el-input>
            </el-form-item>
            <el-form-item label="区域： " prop="RegionID">
                <el-select v-model="Dealer.RegionID" @change="RegionIDChange" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in area" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="省份：" prop="ProvinceID">
                <el-select v-model="Dealer.ProvinceID" @change="ProvinceIDChange" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in ProvinceIDList" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="城市：" prop="CityID">
                <el-select v-model="Dealer.CityID" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in CityIDList" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="邮箱：" prop="MailBox">
                <el-input v-model="Dealer.MailBox" clearable></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="Status">
                <el-radio-group v-model="Dealer.Status">
                    <el-radio label="1">启用</el-radio>
                    <el-radio label="0">停用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-row class="text-center">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('Dealer')">保存</el-button>
                    <el-button type="info">取消</el-button>
                </el-form-item>
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
                if (this.Dealer.Passwordagain !== '') {
                    this.$refs.Dealer.validateField('Passwordagain')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.Dealer.Password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            Dealer: {
                CBU: '',
                CKD: '',
                FullName: '',
                ShortName: '',
                LoginName: '',
                Password: '',
                Passwordagain: '',
                RegionID: '',
                ProvinceID: '',
                CityID: '',
                DealerGroup: '',
                MailBox: '',
                Status: 0,
            },
            rules: {
                CBU: [{
                        required: true,
                        message: '请输入CBU',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                CKD: [{
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
                FullName: [{
                        required: true,
                        message: '请输入经销商名称(全称)',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                ShortName: [{
                        required: true,
                        message: '请输入经销商名称(简称)',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
                LoginName: [{
                        required: true,
                        message: '登录名',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
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
                RegionID: [{
                    required: true,
                    message: '选择地区',
                    trigger: 'change'
                }],
                ProvinceID: [{
                    required: true,
                    message: '选择地区',
                    trigger: 'change'
                }],
                CityID: [{
                    required: true,
                    message: '选择地区',
                    trigger: 'change'
                }],
                DealerGroup: [{
                        required: true,
                        message: '请输入经销商集团',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
                        message: '长度小于100个字',
                        trigger: 'blur'
                    }
                ],
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
                Status: [{
                    required: true,
                    message: '请填写活动形式',
                    trigger: 'blur'
                }]
            },
            area: [],
            ProvinceIDList: [],
            CityIDList: []
        }
    },
    methods: { //事件处理器
        RegionIDChange(RegionID) {
            console.log('RegionIDChange', RegionID)
            this.ProvinceIDList = []
            this.CityIDList = []
            this.Dealer.ProvinceID = ''
            this.Dealer.CityID = ''
            this.area.map((item) => {
                if (item.id == RegionID) {
                    this.ProvinceIDList = item.child
                }
            })
        },
        ProvinceIDChange(ProvinceID) {
            console.log('ProvinceIDChange', ProvinceID)
            this.CityIDList = []
            this.Dealer.CityID = ''
            this.area.map((item) => {
                if (item.id == this.Dealer.RegionID) {
                    item.child.map((citem) => {
                        if (citem.id == ProvinceID) {
                            this.CityIDList = citem.child
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
        openalert(msg) {
            this.$alert(msg, '提示', {
                confirmButtonText: '确定',
                callback: action => {

                }
            })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
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
