<template>
<div class="newOrder-container">
    <div class="container">
        <!-- 经销商 -->
        <div class="form-box-neworder" v-if="UserRole == 'Dealer'|| UserRole == 'Administrator'">
            <div class="form-title">
                导入定损单信息
            </div>
            <el-form class="inline-form el-row" label-width="300px">
                <el-form-item label="请输入需导入的定损单单号：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.ReferenceNumber" placeholder=""></el-input>
                </el-form-item>
                <el-button type="primary" @click="handleImport">导入</el-button>
            </el-form>
        </div>
        <!-- 区域经理和bmw -->
        <div class="form-box-neworder" v-if="UserRole == 'RegionManager' || UserRole == 'BMW-BP' || UserRole == 'Administrator' ">
            <div class="form-title">
                经销商信息
            </div>
            <el-row class="DealerMessage">
                <el-col :span="5">经销商名称：{{detailData.DealerName}}</el-col>
                <el-col :span="5">区域 :{{detailData.RegionName}}</el-col>
                <el-col :span="5">省份：{{detailData.ProvinceName}}</el-col>
                <el-col :span="5">城市：{{detailData.CityName}}</el-col>
            </el-row>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                客户及车辆信息
            </div>
            <el-form class="inline-form el-row" label-width="150px">
                <el-form-item label="车主：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.VehicleOwner"></el-input>
                </el-form-item>
                <el-form-item label="车牌号：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.PlateNumber"></el-input>
                </el-form-item>
                <el-form-item label="车架号：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.VIN" readonly></el-input>
                </el-form-item>
                <el-form-item label="车型：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.SubModelName" readonly></el-input>
                </el-form-item>
                <el-form-item label="车辆首次登记日期：" class="el-col el-col-12 el-col-xs-24">
                    <el-date-picker type="date" @change="handleDatePicker" placeholder="选择日期" v-model="detailData.VehicleFirstRegDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="保险公司：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.InsurerName" readonly></el-input>
                </el-form-item>
                <el-form-item label="报案号:" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.InsuranceNumber"></el-input>
                </el-form-item>
                <el-form-item label="是否厂商喷漆:" class="el-col el-col-12 el-col-xs-24 small-label">
                    <el-radio-group v-model="detailData.IsManufacturerPaint">
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否额外工时支持：" class="el-col el-col-12 el-col-xs-24 small-label">
                    <el-radio-group v-model="detailData.HasAdditionalLabor">
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="事故描述:" class="el-col el-col-24">
                    <el-input type="textarea" v-model="detailData.AccidentBrief" :autosize="{minRows:5}"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                配件明细
            </div>
            <el-table ref="multipleTable" :data="detailData.SpareParts" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column label="配件号" sortable>
                    <template slot-scope="scope">{{ scope.row.PartNumber }}</template>
                </el-table-column>
                <el-table-column prop="PartName" label="配件名称">
                </el-table-column>
                <el-table-column prop="Quantity" label="订购数量" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="Price" label="单价" sortable show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="总价" show-overflow-tooltip>
                    <template slot-scope="scope">{{scope.row.Quantity*scope.row.Price}}</template>
                </el-table-column>
                <el-table-column prop="IsOrdered" label="订购">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.IsOrdered"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="" label="物流说明" show-overflow-tooltip width="200">
                    <template slot-scope="scope">
                        <el-input placeholder="请输入内容" v-model="scope.row.LogisticsCmt" clearable>
                        </el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="" label="宝马审批说明" show-overflow-tooltip width="200">
                    <template slot-scope="scope">
                        <el-input placeholder="请输入内容" v-model="scope.row.BMWApprovalCmt" clearable>
                        </el-input>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                本次维修成本
            </div>
            <el-form class="inline-form el-row" label-width="150px">
                <el-form-item label="新车销售价：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.VehicleMSRP"></el-input>
                </el-form-item>
                <el-form-item label="车辆实际价值：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.VehicleCurrentPrice"></el-input>
                </el-form-item>
                <el-form-item label="本次维修报价：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.RepairCostTotal"></el-input>
                </el-form-item>
                <el-form-item label="实际价值占比：" class="el-col el-col-12 el-col-xs-24">
                    <el-input disabled :value="detailData.VehicleCurrentPrice?Math.round(detailData.RepairCostTotal/detailData.VehicleCurrentPrice*10000)/100 + '%': ''"></el-input>
                </el-form-item>
                <el-form-item label="配件费用：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.SparePartCostTotal"></el-input>
                </el-form-item>
                <el-form-item label="配件占比：" class="el-col el-col-12 el-col-xs-24">
                    <el-input disabled :value="detailData.RepairCostTotal?Math.round(detailData.SparePartCostTotal/detailData.RepairCostTotal*10000)/100 + '%':''"></el-input>
                </el-form-item>
                <el-form-item label="工时及其他：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.LaborCostTotal"></el-input>
                </el-form-item>
                <el-form-item label="保险公司估损金额：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.InsuredAmount"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                其他
            </div>
            <el-form class="inline-form el-row" label-width="150px">
                <el-form-item label="车龄（月）：" class="el-col el-col-12 el-col-xs-24">
                    <el-input disabled v-model="detailData.VehicleAge"></el-input>
                </el-form-item>
                <el-form-item label="是否流失：" class="el-col el-col-12 el-col-xs-24 small-label">
                    <el-radio-group v-model="detailData.IsCustomerChurned">
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="案件状态：" class="el-col el-col-12 el-col-xs-24">
                    <el-select v-model="detailData.CaseStatus" placeholder="Please select case status">
                        <el-option label="自店" value="1"></el-option>
                        <el-option label="外拓" value="2"></el-option>
                        <el-option label="推荐" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="流失去向：" class="el-col el-col-12 el-col-xs-24">
                    <el-select v-model="detailData.ChurnTo" placeholder="请选择流失去向">
                        <el-option label="其他宝马4S店" value="1"></el-option>
                        <el-option label="综合修理厂" value="2"></el-option>
                        <el-option label="其他" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="保险公司联系人：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.InsurerContactPerson"></el-input>
                </el-form-item>
                <el-form-item label="流失原因：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.ChurnReason"></el-input>
                </el-form-item>
                <el-form-item label="客户挽留措施:" class="el-col el-col-24">
                    <el-input type="textarea" v-model="detailData.RetentionActions" :autosize="{minRows:5}" placeholder="Within 500 characters"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <!-- 经销商 -->
        <div v-if="UserRole == 'Dealer' || UserRole == 'Administrator' " class="">
            <div class="form-box-neworder">
                <div class="form-title">
                    附件
                </div>
                <el-upload class="upload-demo" action="/BigAccident/Action/FileUpload" :show-file-list="false" :headers="{'content-type': 'multipart/form-data'}" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleFileUploadSuccess">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
                <div class="">
                    <div class="" v-for="(item, index) in detailData.Attachments" :key="index">
                        <i class="el-icon-close" @click="handleRemoveFile(index, item.DownloadFileName)"></i>
                        <div v-if="isImg(item.FileName)" class="">
                            <img :src="item.DownloadFileName"/> {{item.FileName}}
                        </div>
                        <div v-else  class="">
                            <a :href="item.DownloadFileName">{{item.FileName}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-box-neworder text-center">
                <el-button type="primary" @click="handleSaveOrder">保存但不提交</el-button>
                <el-button type="primary" @click="handleSubmitOrder">保存并提交</el-button>
                <el-button @click="handleGoBack">取消</el-button>
                <el-button type="danger" @click="handleDeleteOrder">删除</el-button>
            </div>
        </div>
        <!-- 区域经理和bmw -->
        <div v-if="UserRole == 'RegionManager' || UserRole == 'BMW-BP' || UserRole == 'Administrator' " class="">
            <div class="form-box-neworder">
                <div class="form-title">
                    附件
                </div>
            </div>
            <div class="form-box-neworder text-center">
                <el-form class="inline-form el-row" label-width="200px">
                    <el-form-item label="审核备注：" class="el-col el-col-12 el-col-xs-24">
                        <el-input v-model="Comment" placeholder=""></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="handleApproved('Approved')">通过</el-button>
                    <el-button type="danger" @click="handleApproved('Rejected')">不通过</el-button>
                    <el-button @click="handleGoBack">退出</el-button>
                </el-form>
            </div>
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
export default {
    name: 'orderDetail',
    data: function() {
        return {
            Result: '', // 审批结果 “Approved”：通过 “Rejected”：不通过
            Comment: '', //审核备注
            detailData: {
                DATECode: "",
                FZA: 0,
                HST: 0,
                HT: 0,
                UT: 0,
                MyClaimID: "",
                ReferenceNumber: "",
                AccidentBrief: "",
                ApplicationLogs: [],
                Attachments: [],
                CaseStatus: "",
                ChurnReason: "",
                ChurnTo: "",
                ContractID: null,
                HasAdditionalLabor: false,
                InsuranceNumber: "",
                InsuredAmount: null,
                Insurer: "",
                InsurerContactPerson: "",
                IsCustomerChurned: false,
                IsManufacturerPaint: true,
                LaborCostTotal: null,
                OrderID: 0,
                PlateNumber: "",
                ReferenceNumber: "",
                RepairCostTotal: null,
                RetentionActions: "",
                SparePartCostTotal: null,
                SpareParts: [],
                Status: "",
                StatusCode: null,
                SubModelID: 0,
                SubModelName: "",
                VIN: "",
                VehicleAge: null,
                VehicleCurrentPrice: null,
                VehicleFirstRegDate: "",
                VehicleMSRP: null,
                VehicleOwner: "",
            },
            fileList:[
                {name: 'img1.jpeg', url: ''},
                {name: 'img2.jpeg', url: ''}
            ],
        }
    },
    computed: {
        ...mapState([
            'UserName',
            'UserRole'
        ])
    },
    methods: {
        ...mapMutations([
            'closeTags'
        ]),
        isImg (filename) {
            return true
        },
        handleDatePicker(val) {
            console.log(this.detailData.VehicleFirstRegDate, val)
            let now = new Date()
            let cartime = new Date(val)
            let carage = Math.round((now - cartime) / 1000 / 60 / 60 / 24 / 30)
            console.log(carage)
            this.detailData.VehicleAge = carage
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
            try{
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
        handleFileUploadSuccess(res, file) { //  附件上传成功
            console.log(res, file)
            if (res.Code == 200) {
                this.detailData.Attachments.push({
                    FileName: res.Data.FileName,
                    DownloadFileName: res.Data.DownloadFileName,
                    FileSize: file.size,
                    UploadDate: new Date()
                })
            }
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },

        onSubmit() {

        },
        async handleSaveOrder() { // 保存并不提交-经销商
            // 验证字段、
            try {
                const response = await Dealer.SaveOrder({
                    "Operation": this.detailData.OrderID ? 'Update' : 'Create',
                    "Order": this.detailData
                })
                if (response.Code == 200) {
                    this.alertDialog()
                }
            } catch (error) {
                console.log(error)
            }
        },
        async handleSubmitOrder() { // 保存并提交-经销商
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
                this.detailData = importInfo.Data
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
    .form-box-neworder {
        .form-title {
            font-size: 16px;
            font-weight: bold;
            padding-left: 10px;
            border-bottom: 1px solid #000000;
            margin: 20px 0;
        }
        button {
            margin-left: 10px;
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
div.small-label {
    height: 33px;
}
</style>
