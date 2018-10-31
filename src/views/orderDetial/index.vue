<template>
<div class="newOrder-container">
    <!-- <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
    <div class="container">
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
                    <el-input v-model="detailData.SubModel" readonly></el-input>
                </el-form-item>
                <el-form-item label="车辆首次登记日期：" class="el-col el-col-12 el-col-xs-24">
                    <el-date-picker type="date" @change="handleDatePicker" placeholder="选择日期" v-model="detailData.VehicleFirstRegDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="保险公司：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="detailData.Insurer" readonly></el-input>
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
                    <el-input  disabled v-model="detailData.VehicleAge"></el-input>
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
        <div class="form-box-neworder">
            <div class="form-title">
                附件
            </div>
            <el-form class="inline-form el-row" lebel-width="150px">
            </el-form>
        </div>
        <div class="form-box-neworder text-center">
            <el-button type="primary" @click="onSubmit">保存但不提交</el-button>
            <el-button type="primary" @click="onSubmit">保存并提交</el-button>
            <el-button>取消</el-button>
            <el-button>删除</el-button>
        </div>
    </div>

</div>
</template>

<script>
import {
    General
} from '@/networks/api'
export default {
    name: 'orderDetail',
    data: function() {
        return {
            detailData: {
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
                SubModel: "",
                VIN: "",
                VehicleAge: null,
                VehicleCurrentPrice: null,
                VehicleFirstRegDate: "",
                VehicleMSRP: null,
                VehicleOwner: "",
            },
            fileList: [{
                    name: 'food.jpeg',
                    url: ''
                },
                {
                    name: 'food2.jpeg',
                    url: ''
                }
            ],
        }
    },
    methods: {
        handleDatePicker(val) {
            console.log(this.detailData.VehicleFirstRegDate, val)
            let now = new Date()
            let cartime = new Date(val)
            let carage = Math.round((now - cartime)/1000/60/60/24/30)
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
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        onSubmit() {

        },
        async GetOrderInfo() {
            try {
                const response = await General.GetOrderInfo({
                    OrderID: this.$route.query.id
                })
                this.detailData = response.Data
                // console.log(this.detailData)
            } catch (error) {
                console.log(error)
            }
        },
        routeChange () {
            this.detailData.OrderID = this.$route.query.id? this.$route.query.id: 0
            if (this.detailData.OrderID) {
                this.GetOrderInfo()
            }
        }
    },
    watch: {
        // '$route': 'routeChange'
    },
    created() {
        console.log('this.$route.query', this.$route)
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
    }
}
.el-form-item__content > div {
    width: 100%;
}
div.small-label {
    height: 33px;
}
</style>
