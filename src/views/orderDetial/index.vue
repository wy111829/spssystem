<template>
<div class="newOrder-container">
    <div class="container">
        <div class="form-box-neworder">
            <div class="orderNumber">
                当前订单编号：{{detailData.OrderNumber}}
            </div>
            <div class="form-title">
                基本信息
            </div>
            <el-form class="inline-form">
                <el-row :gutter="20">
                    <el-col :md="6" :sm="12">
                        <el-form-item label="事故类型">
                            <el-radio-group v-model="detailData.AccidentType">
                                <el-radio :label="1">大事故</el-radio>
                                <el-radio :label="2">水淹车</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="DAT定损单单号">
                            <el-input v-model="detailData.ReferenceNumber" placeholder="">
                                <el-button slot="append" @click="handleImport">导入</el-button>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="经销商CKD代码">
                            <el-input v-model="detailData.DealerCKD"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="经销商名称">
                            <el-input v-model="detailData.DealerName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车主姓名">
                            <el-input v-model="detailData.VehicleOwner"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车牌号">
                            <el-input v-model="detailData.PlateNumber"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车架号(VIN)">
                            <el-input v-model="detailData.VIN" disabled=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="主车型名称">
                            <el-input v-model="detailData.BaseModelName" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="子车型名称">
                            <el-input v-model="detailData.SubModelName" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车辆首次登记日期(保修起始时间)">
                            <el-date-picker type="date" @change="handleDatePicker" placeholder="选择日期" v-model="detailData.VehicleFirstRegDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="保险公司：">
                            <el-input v-model="detailData.InsurerName" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="保单号">
                            <el-input v-model="detailData.InsuranceNumber"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车龄">
                            <el-input v-model="detailData.VehicleAge"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                维修成本分析
            </div>
            <el-form class="inline-form">
                <el-row :gutter="20">
                    <el-col :md="6" :sm="12">
                        <el-form-item label="配件费用">
                            <el-input v-model="detailData.PartCost" type="number"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="工时及其他费用">
                            <el-input v-model="detailData.LaborPaintCost" type="number"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="维修费用">
                            <i class="el-icon-info iconInfo" title="=配件费用+工时及其他费用"></i>
                            <el-input v-model="detailData.RepairCost" type="number"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="采购零件总额">
                            <el-input v-model="detailData.OrderPartCost"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车损险保额">
                            <el-input v-model="detailData.InsuranceCoverage"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="维修费用/车损险保额">
                            <!-- <el-popover placement="top-start" trigger="hover" content="=维修费用/车损险保额*100%" placement="right">
                                <i class="el-icon-info iconInfo" slot="reference"></i>
                            </el-popover> -->
                            <i class="el-icon-info iconInfo" title="=维修费用/车损险保额*100%"></i>
                            <el-input v-model="detailData.Repair_Div_Insurance"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="配件费用/维修费用">
                            <i class="el-icon-info iconInfo" title="=配件费用/维修费用*100%"></i>
                            <el-input v-model="detailData.Part_Div_Repair" disabled=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="采购零件总额/配件费用">
                            <i class="el-icon-info iconInfo" title="=采购零件总额/配件费用*100%"></i>
                            <el-input v-model="detailData.OrderPart_Div_Part" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="配件折扣支持">
                            <i class="el-icon-info iconInfo" title="=(采购零件总额-增值税)*15%"></i>
                            <el-input v-model="detailData.OrderPartDiscount" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="是否购买涉水险">
                            <el-radio-group>
                                <el-radio label="">是</el-radio>
                                <el-radio label="">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="申请额外服务费">
                            <el-radio-group v-model="detailData.ApplyExtraServiceCost">
                                <el-radio :label='true'>是</el-radio>
                                <el-radio :label='false'>否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="额外服务费" v-if="detailData.ApplyExtraServiceCost">
                            <i class="el-icon-info iconInfo" title="=(采购零件总额-增值税)*10%"></i>
                            <el-input v-model="detailData.ExtraServiceCost"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                零件列表
            </div>
            <el-table ref="multipleTable" :data="detailData.SpareParts" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" :default-sort="{prop: 'PartNumber', order: 'descending'}">
                <el-table-column label="订购类型"></el-table-column>
                <el-table-column label="配件号" sortable prop="PartNumber" min-width="100">
                </el-table-column>
                <el-table-column prop="PartName" label="配件名称" min-width="150">
                </el-table-column>
                <el-table-column prop="Quantity" label="订购数量">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.Quantity" type="number"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="Price" label="单价" sortable>
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.Price" type="number"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="总价" show-overflow-tooltip>
                    <template slot-scope="scope">{{scope.row.Price?scope.row.Quantity*scope.row.Price:''}}</template>
                </el-table-column>
                <el-table-column prop="IsOrdered" label="是否订购" width="50">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.IsOrdered"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="" label="物流备注" show-overflow-tooltip width="400">
                    <template slot-scope="scope">
                        <el-input placeholder="请输入内容" v-model="scope.row.LogisticsCmt" clearable>
                        </el-input>
                    </template>
                </el-table-column>
            </el-table>
            <el-button type="primary" @click="addPartDialog = true">添加零件</el-button>
            <el-dialog title="添加零件" :visible.sync="addPartDialog" width="40%">
                <el-form label-width="100px">
                    <el-form-item label="订购类型：">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="零件号：">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="订购数量：">
                        <el-input type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="单价：">
                        <el-input type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="总价：">
                        <el-input type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="是否订购：">
                        <el-checkbox></el-checkbox>
                    </el-form-item>
                    <el-form-item label="物流备注：">
                        <el-input type="number"></el-input>
                    </el-form-item>
                </el-form>
                <div class="text-center">
                    <el-button type="primary">添加该零件</el-button>
                    <el-button type="primary" @click="addPartDialog = false">取消添加该零件</el-button>
                </div>
            </el-dialog>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                相关附件
            </div>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                结算信息
            </div>
            <el-form class="inline-form">
                <el-row :gutter="20">
                    <el-col :md="6" :sm="12">
                        <el-form-item label="开工单日期">
                            <el-date-picker type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="工单结算日期">
                            <el-date-picker type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="结算单金额（含税）">
                            <el-input placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="工单号">
                            <el-input placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="结算单号">
                            <el-input placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="总配件金额">
                            <el-input placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!-- <div class="form-box-neworder text-center">
            <el-button type="primary" @click="submitToSaveOrder('detailData')">保存</el-button>
            <el-button type="primary" @click="submitToSubmitOrder('detailData')">保存并提交</el-button>
            <el-button @click="handleGoBack">返回订单列表</el-button>
            <el-button type="danger" @click="handleDeleteOrder">删除</el-button>
        </div> -->

        <el-form class="inline-form el-row" label-width="200px">
            <el-form-item label="审核备注：" class="el-col el-col-12" style="margin-right:10px;">
                <el-input v-model="Comment" placeholder=""></el-input>
            </el-form-item>
            <el-button type="primary" @click="handleApproved('Approved')">通过</el-button>
            <el-button type="danger" @click="handleApproved('Rejected')">驳回</el-button>
            <el-button type="danger" @click="handleApproved('Rejected')">拒绝支持</el-button>
            <el-button type="" @click="handleApproved('Rejected')">返回订单列表</el-button>
        </el-form>

        <div class="form-box-neworder">
            <div class="form-title">
                申请日志
            </div>
            <el-row v-for="(item,index) in this.detailData.ApplicationLogs" :key="index" class="ApplicationLogs">
                <el-col :span="5" class="OperationDate">{{item.OperationDate}}</el-col>
                <el-col :span="5">{{item.Operator}} :{{item.Operation}}</el-col>
                <el-col :span="5">审批备注：{{item.Comments}}</el-col>
            </el-row>
        </div>
    </div>
</div>

</div>
</template>

<script>
import {
    General,
    Dealer,
    RegionManagers,
    BMW
} from '@/networks/api'
import {
    mapState,
    mapMutations
} from 'vuex'
import axios from 'axios'
export default {
    name: 'orderDetail',
    data: function() {
        return {
            addPartDialog: false,
            Result: '', // 审批结果 “Approved”：通过 “Rejected”：不通过
            Comment: '', //审核备注
            detailData: {
                OrderID: '',
                MyClaimID: '',
                AccidentType: '',
                ReferenceNumber: "",
                VehicleOwner: "",
                PlateNumber: "",
                VIN: "",
                DATECode: "",
                FZA: null,
                HST: null,
                HT: null,
                BaseModelID:12,
                BaseModelName:"5 Series (5系) Lim. (F10/F18) (08.2010->)",
                UT: null,
                SubModelID: '',
                SubModelName: "",
                VehicleMadeCountry:'',
                VehicleFirstRegDate: "",
                VehicleAge: '',
                InsurerID: '',
                InsurerName: "",
                InsuranceNumber: "",
                AccidentBrief: "",
                PartCost:'',
                LaborPaintCost: '',
                RepairCost: '',
                OrderPartCost:'',
                InsuranceCoverage:'',
                Repair_Div_Insurance:'',
                Repair_Div_Insurance:'',
                Part_Div_Repair:'',
                OrderPart_Div_Part:'',
                OrderPartDiscount:'',
                ApplyExtraServiceCost:true,
                ExtraServiceCost:'',
                SpareParts: [],
            },
            Attachments: [],
            rules: {
                VehicleMSRP: [{
                    required: true,
                    message: '请输入新车销售价',
                    trigger: 'blur'
                }],
                VehicleCurrentPrice: [{
                    required: true,
                    message: '车辆实际价值',
                    trigger: 'blur'
                }]
            }
        }
    },
    computed: {
        ...mapState([
            'UserName',
            'UserRole',
            'ServerUrl'
        ])
    },
    methods: {
        ...mapMutations([
            'closeTags'
        ]),
        isImg(filename) {
            let fileType = filename.substring(filename.indexOf(".") + 1).toUpperCase();
            if (fileType == "PNG" || fileType == "JPG" || fileType == "JPEG" || fileType == "GIF") {
                return true
            } else {
                return false
            }
        },
        handleDatePicker(val) {
            console.log(val)
            let now = new Date()
            let cartime = new Date(val)
            let cartotlemonth = Math.round((now - cartime) / 1000 / 60 / 60 / 24 / 30)
            let year = parseInt(cartotlemonth / 12)
            let month = cartotlemonth % 12
            this.detailData.VehicleAge = year == 0 ? month + '个月' : year + '年零' + month + '个月'
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        async handleRemoveFile(index, filename) { // 附件删除
            try {
                console.log(index, filename)
                const response = await Dealer.FileDelete({
                    DownloadFileName: filename
                })
                if (response.Code == 200) {
                    this.detailData.Attachments.splice(index, 1)
                }
            } catch (error) {
                console.log(error)
            }

        },
        handleFileUploadSuccess(Data) { //  附件上传成功
            this.detailData.Attachments.push({
                FileName: Data.FileName,
                DownloadFileName: Data.DownloadFileName,
            })
        },

        async uploadSectionFile(f) {
            console.log(f.file)
            let param = new FormData(); //创建form对象
            param.append('file', f.file); //通过append向form对象添加数据
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }; //添加请求头
            // console.log(f.action,param,config)
            // axios.post(f.action,param,config)//上传图片
            // .then(function(res){
            //     console.log(res)
            // })
            // .catch(function (err){
            //     console.log(err)
            // })
            try {
                const response = await Dealer.FileUpload(param, config)
                console.log(response)
                if (response.Code == 200) {
                    this.handleFileUploadSuccess(response.Data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async handleSaveOrder() { // 保存并不提交-经销商
            //将计算后的占比传入
            this.detailData.Repair_CurrentPrice_PCT = parseFloat(this.$refs.Repair_CurrentPrice_PCT.value).toFixed(1)
            this.detailData.Part_Repair_PCT = parseFloat(this.$refs.Part_Repair_PCT.value).toFixed(1)
            try {
                const response = await Dealer.SaveOrder({
                    "Operation": this.detailData.OrderID ? 'Update' : 'Create',
                    "Order": this.detailData
                })
                if (response.Code == 200) {
                    //console.log(this.detailData)
                    this.alertDialog()
                }
            } catch (error) {
                console.log(error)
            }
        },
        async handleSubmitOrder() { // 保存并提交-经销商
            //将计算后的占比传入
            this.detailData.Repair_CurrentPrice_PCT = parseFloat(this.$refs.Repair_CurrentPrice_PCT.value).toFixed(1)
            this.detailData.Part_Repair_PCT = parseFloat(this.$refs.Part_Repair_PCT.value).toFixed(1)
            try {
                const response = await Dealer.SaveOrder({
                    "Operation": this.detailData.OrderID ? 'Update' : 'Create',
                    "Order": this.detailData
                })
                if (response.Code == 200) {
                    this.detailData.OrderID = response.OrderID
                    const subresponse = await Dealer.SubmitOrder({
                        "OrderID": this.detailData.OrderID
                    })
                    console.log(subresponse)
                    if (subresponse.Code == 200) {
                        this.alertDialog()
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        async handleDeleteOrder() {
            try {
                const response = await Dealer.DeleteOrder({
                    "OrderID": this.detailData.OrderID
                })
                if (response.Code == 200) {
                    this.alertDialog()
                }
            } catch (e) {
                console.log(e)
            }
        },
        submitToSaveOrder(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.handleSaveOrder()
                } else {
                    alert('error submit!!');
                    return false;
                }
            })
        },
        submitToSubmitOrder(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.handleSubmitOrder()
                } else {
                    alert('error submit!!');
                    return false;
                }
            })
        },
        async handleApproved(val) { //审批 - 区域经理或BMW
            try {
                if (this.UserRole == 'RegionManager') {
                    const response = await RegionManagers.RMApproveOrder({
                        "OrderID": this.detailData.OrderID,
                        "Result": val,
                        Comment: this.Comment
                    })
                    if (response.Code == 200) {
                        this.alertDialog()
                    }
                } else if (this.UserRole == 'BMW-BP') {
                    const response = await BMW.BMWApproveOrder({
                        "OrderID": this.detailData.OrderID,
                        "Result": val,
                        "Comment": this.Comment,
                        "SpareParts": this.detailData.SpareParts
                    })
                    if (response.Code == 200) {
                        this.alertDialog()
                    }
                }
            } catch (e) {
                console.log(e)
            }
        },
        async GetOrderInfo() {
            try {
                const response = await General.GetOrderInfo({
                    OrderID: this.detailData.OrderID
                })
                this.detailData = response.Data
                // console.log(this.detailData)
            } catch (error) {
                console.log(error)
            }
        },
        routeChange() {
            this.detailData.OrderID = this.$route.params.id ? this.$route.params.id : 0
            if (this.detailData.OrderID) {
                this.GetOrderInfo()
            }
        },
        async handleImport() {
            try {
                const importInfo = await Dealer.ImportOrderInfo({
                    "ReferenceNumber": this.detailData.ReferenceNumber
                })
                // this.detailData = importInfo.Data
                for (var variable in importInfo.Data) {
                    this.detailData[variable] = importInfo.Data[variable]
                }
            } catch (error) {
                console.log(error)
            }
        },
        alertDialog() {
            this.$alert('操作完成，返回订单列表', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() {
            this.closeTags(this.$route.name)
            this.$router.push({
                name: 'orderList'
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
.newOrder-container {
    .orderNumber{
        text-align: center;
        font-weight: 600;
    }
    .form-box-neworder {
        .form-title {
            font-size: 16px;
            font-weight: bold;
            padding-left: 10px;
            border-bottom: 1px solid #dedede;
            margin: 20px 0;
        }
        .DealerMessage {
            font-size: 15px;
            margin-left: 40px;
            color: #606266;
        }
        .ApplicationLogs {
            font-size: 13px;
            margin: 5px 50px;
            .OperationDate {
                color: #606266;
            }
        }
    }
}
.el-form-item__content > div {
    width: 100%;
}
.Attachments {
    margin: 20px 10px;
    .AttachmentItem {
        position: relative;
        margin: 20px;
        .AttachmentContent {
            display: inline-block;
            width: 80%;
            img {
                max-width: 100%;
            }
        }
        .removeAttachmentItem {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
    -webkit-appearance: none;
}

input[type="number"] {
    -moz-appearance: textfield;
}
.el-form-item--small .el-form-item__content,
.el-form-item--small .el-form-item__label {
    line-height: 25px;
}
.iconInfo {
    color: #409EFF;
    cursor: help;
}
</style>
