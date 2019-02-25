<template>
<div class="newDealer-container main-container">
    <div class="form-box-newdealer">
        <el-form class="inline-form el-row" ref="Dealer" :model="Dealer" :rules="rules" label-width="180px">
            <el-form-item label="账号(DAT客户编号)：" prop="CustomerNumber">
                <el-input v-model.trim="Dealer.CustomerNumber" clearable></el-input>
            </el-form-item>
            <el-form-item label="经销商ID(CKD)：" prop="CKD">
                <el-input v-model.trim="Dealer.CKD" clearable></el-input>
            </el-form-item>
            <el-form-item label="经销商名称：" prop="Name">
                <el-input v-model.trim="Dealer.Name" clearable></el-input>
            </el-form-item>
            <el-form-item label="邮箱1：" prop="MailBox1">
                <el-input v-model.trim="Dealer.MailBox1" clearable></el-input>
            </el-form-item>
            <el-form-item label="邮箱2：" prop="MailBox2">
                <el-input v-model.trim="Dealer.MailBox2" clearable></el-input>
            </el-form-item>
            <el-form-item label="区域： " prop="RegionID">
                <el-select v-model="Dealer.RegionID" @change="RegionIDChange" placeholder="请选择">
                    <el-option v-for="(item, index) in area" :key="item.ID" :label="item.Name" :value="item.ID">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="省份：" prop="ProvinceID">
                <el-select v-model="Dealer.ProvinceID" @change="ProvinceIDChange" placeholder="请选择">
                    <el-option v-for="(item, index) in ProvinceIDList" :key="item.ID" :label="item.Name" :value="item.ID">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="城市：" prop="CityID">
                <el-select v-model="Dealer.CityID" @change="CityIDChange" placeholder="请选择">
                    <el-option v-for="(item, index) in CityIDList" :key="item.ID" :label="item.Name" :value="item.ID">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="区域经理：" prop="RegionManagerID">
                <el-select v-model="Dealer.RegionManagerID" @change="RegionManagerChange" placeholder="请选择">
                    <el-option v-for="(item, index) in RegionManagersList" :key="item.ID" :label="item.Name" :value="item.ID">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所属经销商集团：" prop="DealerGroup">
                <el-input v-model.trim="Dealer.DealerGroup" clearable></el-input>
            </el-form-item>
            <template v-if="Dealer.DealerID == 0">
                <el-form-item label="密码：" prop="Password">
                    <el-input v-model="Dealer.Password" type="Password" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码确认：" prop="Passwordagain">
                    <el-input v-model="Dealer.Passwordagain" type="Password" clearable></el-input>
                </el-form-item>
            </template>
            <el-form-item label="状态：" prop="StatusCode">
                <el-radio-group v-model="Dealer.StatusCode">
                    <el-radio :label="101">启用</el-radio>
                    <el-radio :label="102">停用</el-radio>
                </el-radio-group>
            </el-form-item>
            <template v-if="Dealer.DealerID != 0">
                <el-form-item label="修改密码：">
                    <el-checkbox v-model="pswCheck"></el-checkbox>
                </el-form-item>
                <template v-if="pswCheck">
                    <el-form-item label="密码：" prop="Password">
                        <el-input v-model="Dealer.Password" type="Password" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="密码确认：" prop="Passwordagain">
                        <el-input v-model="Dealer.Passwordagain" type="Password" clearable></el-input>
                    </el-form-item>
                </template>
            </template>
            <el-row class="text-center">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('Dealer')">保存</el-button>
                    <el-button type="danger" @click="confirmOperation" v-if="Dealer.DealerID != 0">删除</el-button>
                    <el-button type="info" @click="handleGoBack">取消</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
</div>
</template>

<script>
// import areaData from '@/defined/area.js'
import {
    HQ
} from '@/networks/api'
import {
    mapState,
    mapMutations
} from 'vuex'
import {
    hex_sha1
} from '@/utils/sha1'
export default {
    data() { //选项 / 数据
        var validatePass = (rule, value, callback) => {
            if (value === '' || value === undefined || value.trim() == '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.Dealer.Passwordagain !== '') {
                    this.$refs.Dealer.validateField('Passwordagain')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '' || value === undefined || value.trim() == '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.Dealer.Password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            Dealer: {
                "DealerID": 0,
                "CustomerNumber":'',
                "CKD": "",
                "Name": "",
                "MailBox1":"",
                "MailBox2":"",
                "RegionID": "",
                "RegionName": "",
                "ProvinceID": "",
                "ProvinceName": "",
                "CityID": "",
                "CityName": "",
                "RegionManagerID":"",
                "RegionManagerName":"",
                "DealerGroup":"",
                "StatusCode": '',
                "StatusName":"",
                "Password": ''
            },
            areaData: [],
            rules: {
                CustomerNumber: [{
                        required: true,
                        message: '请输入DAT客户编号',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 100,
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
                Name: [{
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
                RegionManagerID: [{
                        required: true,
                        message: '选择区域经理',
                        trigger: 'change'
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
                        required: false,
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
                MailBox1: [{
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
                MailBox2: [{
                        required: false,
                    },
                    {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: ['blur', 'change']
                    }
                ],
                Status: [{
                    required: true,
                    message: '请选择状态',
                    trigger: 'blur'
                }]
            },
            area: [],
            RegionManagersList: [],
            ProvinceIDList: [],
            CityIDList: [],
            pswCheck: false
        }
    },
    methods: { //事件处理器
        ...mapMutations([
            'closeTags'
        ]),
        RegionIDChange(RegionID) {
            this.ProvinceIDList = []
            this.CityIDList = []
            this.RegionManagersList = []
            this.Dealer.ProvinceID = ''
            this.Dealer.CityID = ''
            this.Dealer.RegionManagerID = ''
            this.area.map((item) => {
                if (item.ID == RegionID) {
                    this.RegionManagersList = item.RegionManagers
                    this.Dealer.RegionName = item.Name
                    this.ProvinceIDList = item.Provinces
                }
            })
        },
        ProvinceIDChange(ProvinceID) {
            this.CityIDList = []
            this.Dealer.CityID = ''
            this.ProvinceIDList.map((item) => {
                if (item.ID == ProvinceID) {
                    this.Dealer.ProvinceName = item.Name
                    this.CityIDList = item.Cities
                }
            })
        },
        CityIDChange(CtiyID) {
            this.CityIDList.map((item) => {
                if (item.ID == CtiyID) {
                    this.Dealer.CityName = item.Name
                }
            })
        },
        RegionManagerChange(RegionManagerID) {
            this.RegionManagersList.map((item) => {
                if (item.ID == RegionManagerID) {
                    this.Dealer.RegionManagerName = item.Name
                }
            })
        },
        initAreaFun() { //地区联动初始化
            this.area.map((item) => {
                if (item.ID == this.Dealer.RegionID) {
                    this.ProvinceIDList = item.Provinces
                    this.RegionManagersList = item.RegionManagers
                    item.Provinces.map((citem) => {
                        if (citem.ID == this.Dealer.ProvinceID) {
                            this.CityIDList = citem.Cities
                        }
                    })
                }
            })
        },
        async CreateOrUpdateDealer() {
            try {
                const response = await HQ.CreateOrUpdateDealer({
                    Operation: this.Dealer.DealerID ? 'Update' : 'Create',
                    Dealer: this.Dealer
                })
                if (response.Code == 200) {
                    this.alertDialog()
                }
            } catch (error) {
                console.log(error)
            }
        },
        submitForm(formName) {
            if (this.Dealer.DealerID != 0){
                if (!this.pswCheck){
                    this.$delete(this.Dealer,'Password'),
                    this.$delete(this.Dealer,'Passwordagain')
                }
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.Dealer.Password) {
                        this.Dealer.Password = hex_sha1(this.Dealer.Password)
                        this.Dealer.Passwordagain = hex_sha1(this.Dealer.Passwordagain)
                    }
                    console.log(this.Dealer)
                    this.CreateOrUpdateDealer()
                } else {
                    alert('error submit!!');
                    return false;
                }
            })
        },
        async GetDealerInfo() {
            try {
                const response = await HQ.GetDealerInfo({
                    DealerID: this.Dealer.DealerID
                })
                this.Dealer = response.Data
                this.initAreaFun()
            } catch (error) {
                console.log(error)
            }
        },
        async GetRegionProvCityList() {
            try {
                const response = await HQ.GetRegionProvCityList()
                this.area = response.Data.Regions
                this.initAreaFun()
            } catch (error) {
                console.log(error)
            }
        },
        confirmOperation() {
            this.$confirm('确认删除'+this.Dealer.Name +'？' , '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.handleDeletDealer()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消操作'
                });
            });
        },
        async handleDeletDealer(){
            try {
                const response = await HQ.ChangeDealerStatus({
                    "DealerID": this.Dealer.DealerID,
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
            this.Dealer.DealerID = this.$route.params.id ? this.$route.params.id : 0
            if (this.Dealer.DealerID) {
                this.GetDealerInfo()
            }
        },
        alertDialog() {
            this.$alert('操作完成，返回经销商列表', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() {
            this.closeTags(this.$route.name)
            this.$router.push({
                name: 'systemDealerManager'
            })
        }
    },
    components: { //定义组件

    },
    watch: {
        '$route': 'routeChange'
    },
    async created() { //生命周期函数
        try {
            await this.GetRegionProvCityList()
            this.routeChange()
        } catch (error) {

        }
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
