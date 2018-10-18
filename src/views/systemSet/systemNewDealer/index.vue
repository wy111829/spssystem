<template>
<div class="newDealer-container main-container">
    <div class="form-box-newdealer">
        <el-form class="inline-form el-row" label-width="150px">
            <el-form-item label="CBU：">
                <el-input v-model="form.cbu"></el-input>
            </el-form-item>
            <el-form-item label="CKD：">
                <el-input v-model="form.ckd"></el-input>
            </el-form-item>
            <el-form-item label="经销商名称(全称)：">
                <el-input v-model="form.dealerfullname"></el-input>
            </el-form-item>
            <el-form-item label="经销商名称(简称)：">
                <el-input v-model="form.dealername"></el-input>
            </el-form-item>
            <el-form-item label="登录名：">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="密码确认:">
                <el-input v-model="form.passwordagain" type="password"></el-input>
            </el-form-item>
            <el-form-item label="经销商集团:">
                <el-input v-model="form.dealercompany"></el-input>
            </el-form-item>
            <el-form-item label="区域:">
                <el-select v-model="form.region" @change="regionChange" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in area" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="省份:">
                <el-select v-model="form.province" @change="provinceChange" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in provinceList" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="城市:">
                <el-select v-model="form.city" clearable placeholder="请选择">
                    <el-option v-for="(item, index) in cityList" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="邮箱:">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="状态：">
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
        return {
            form: {
                cbu: '2220',
                ckd: '222',
                dealerfullname: 'sjsjjs',
                dealername: '855552',
                username: 'jsdjkkkd',
                password: '55555',
                passwordagain: '525525',
                region: '',
                province: '',
                city: '',
                dealercompany: 'dddd',
                email: 'dsdd',
                stat: 0,
                area: []
            },
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
