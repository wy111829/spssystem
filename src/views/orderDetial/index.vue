<template>
<div class="newOrder-container">
    <el-dialog title="你正在创建新订单，请选择事故类型：" class="selectAccidentType" :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="selectAccidentType" :show-close="false">
        <el-radio-group v-model="detailData.AccidentType" style="text-align:center">
            <el-radio :label="1">大事故</el-radio>
            <el-radio :label="2">水淹车</el-radio>
        </el-radio-group>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleGoBack()">取消</el-button>
            <el-button type="primary" @click="handleCreateOrder(detailData.AccidentType)" :disabled="!detailData.AccidentType">确 定</el-button>
        </div>
    </el-dialog>
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
                            <el-input :value="detailData.VehicleAge" disabled></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                维修成本分析
            </div>
            <el-form class="inline-form text-right">
                <el-row :gutter="20">
                    <el-col :md="6" :sm="12">
                        <el-form-item label="配件费用">
                            <el-input :value="PartCost" type="number" disabled></el-input>
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
                            <el-input :value="RepairCost" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="采购零件总额">
                            <el-input :value="OrderPartCost" disabled></el-input>
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
                            <el-input :value="Repair_Div_Insurance" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="配件费用/维修费用">
                            <i class="el-icon-info iconInfo" title="=配件费用/维修费用*100%"></i>
                            <el-input :value="Part_Div_Repair" disabled=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="采购零件总额/配件费用">
                            <i class="el-icon-info iconInfo" title="=采购零件总额/配件费用*100%"></i>
                            <el-input :value="OrderPart_Div_Part" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="配件折扣支持">
                            <i class="el-icon-info iconInfo" title="=(采购零件总额-增值税)*15%"></i>
                            <el-input :value="OrderPartDiscount" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="是否购买涉水险" v-if="detailData.AccidentType=='2'">
                            <el-radio-group v-model="detailData.HasWadingInsurance">
                                <el-radio :label="true">是</el-radio>
                                <el-radio :label="false">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="申请额外服务费" v-if="detailData.AccidentType=='1'">
                            <el-radio-group v-model="detailData.ApplyExtraServiceCost">
                                <el-radio :label="true">是</el-radio>
                                <el-radio :label="false">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="额外服务费" v-if="detailData.AccidentType=='1'&&detailData.ApplyExtraServiceCost">
                            <i class="el-icon-info iconInfo" title="=(采购零件总额-增值税)*10%"></i>
                            <el-input :value="ExtraServiceCost" disabled></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                零件列表
            </div>
            <el-table ref="multipleTable" :data="detailData.SpareParts" tooltip-effect="dark" style="width: 100%" :row-class-name="IsUnOrderable">
                <el-table-column label="订购类型" prop="OrderType"></el-table-column>
                <el-table-column label="" width="25">
                    <template slot-scope="scope">
                        <span v-if="scope.row.IsManualAddPart" class="symbol">M</span>
                        <span v-if="scope.row.IsManualInputPrice">*</span>
                    </template>
                </el-table-column>
                <el-table-column label="配件号" sortable prop="PartNumber" min-width="100">
                </el-table-column>
                <el-table-column prop="PartName" label="配件名称" min-width="120">
                </el-table-column>
                <el-table-column prop="Quantity" label="订购数量" min-width="90">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.Quantity" type="number" style="width:75%" min='0' :disabled="scope.row.IsUnOrderable" :class="IsQuantityRevise(scope.row)?'bgc-green':''"></el-input>
                        <i class="el-icon-info iconInfo" :title="'原始数量:'+scope.row.Quantity_Old" v-if="IsQuantityRevise(scope.row)"></i>
                    </template>
                </el-table-column>
                <el-table-column prop="Price" label="单价" sortable min-width="130">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.Price" type="number" style="width:75%" min='0' :disabled="scope.row.IsUnOrderable" :class="IsPriceRevise(scope.row)?'bgc-green':''"></el-input>
                        <i class="el-icon-info iconInfo" :title="'原始价格:'+scope.row.Price_Old" v-if="IsPriceRevise(scope.row)"></i>
                    </template>
                </el-table-column>
                <el-table-column label="总价" show-overflow-tooltip sortable min-width="135">
                    <template slot-scope="scope">
                        <el-input disabled :value="scope.row.Price?scope.row.Quantity*scope.row.Price:''" style="width:75%" :class="IsTotalPriceRevise(scope.row)?'bgc-green':''"></el-input>
                        <i class="el-icon-info iconInfo" :title="'原始价格:'+scope.row.TotalPrice_Old" v-if="IsTotalPriceRevise(scope.row)"></i>
                    </template>
                </el-table-column>

                <el-table-column prop="IsOrdered" label="是否订购" width="50">
                    <template slot-scope="scope">
                        <i class="el-icon-error" title="不可订货零件" v-if="scope.row.IsUnOrderable" style="color:#ff4949"></i>
                        <el-checkbox v-model="scope.row.IsOrdered" v-else></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="LogisticsCmt" label="物流备注" show-overflow-tooltip width="200" >
                    <template slot-scope="scope">
                        <el-input placeholder="请输入内容" v-model="scope.row.LogisticsCmt" clearable :disabled="scope.row.IsUnOrderable">
                        </el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-delete" style="color:#ff4949" @click="handleDeletPart(scope.$index, scope)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            </el-table>
            <el-button type="primary" @click="addPartDialog = true">添加零件</el-button>
            <el-dialog title="添加零件" :visible.sync="addPartDialog" width="40%">
                <el-form label-width="100px">
                    <el-form-item label="订购类型：">
                        <el-input disabled v-model="newSpareParts.OrderType"></el-input>
                    </el-form-item>
                    <el-form-item label="零件号：">
                        <el-input v-model="newSpareParts.PartNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="配件名称：">
                        <el-input v-model="newSpareParts.PartName"></el-input>
                    </el-form-item>
                    <el-form-item label="订购数量：">
                        <el-input type="number" v-model="newSpareParts.Quantity"></el-input>
                    </el-form-item>
                    <el-form-item label="单价：">
                        <el-input type="number" v-model="newSpareParts.Price"></el-input>
                    </el-form-item>
                    <el-form-item label="总价：">
                        <el-input type="number" disabled :value="newSpareParts.Quantity&&newSpareParts.Price?newSpareParts.Quantity*newSpareParts.Price:''"></el-input>
                    </el-form-item>
                    <el-form-item label="是否订购：">
                        <el-checkbox v-model="newSpareParts.IsOrdered"></el-checkbox>
                    </el-form-item>
                    <el-form-item label="物流备注：">
                        <el-input v-model="newSpareParts.LogisticsCmt"></el-input>
                    </el-form-item>
                </el-form>
                <div class="text-center">
                    <el-button type="primary" @click="addSpareParts()">添加该零件</el-button>
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
            selectAccidentType: false,
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
                BaseModelID: 12,
                BaseModelName: "",
                UT: null,
                SubModelID: '',
                SubModelName: "",
                VehicleMadeCountry: '',
                VehicleFirstRegDate: "",
                VehicleAge: '',
                InsurerID: '',
                InsurerName: "",
                InsuranceNumber: "",
                AccidentBrief: "",
                PartCost: '',
                LaborPaintCost: '',
                RepairCost: '',
                OrderPartCost: '',
                InsuranceCoverage: '',
                Repair_Div_Insurance: '',
                Repair_Div_Insurance: '',
                Part_Div_Repair: '',
                OrderPart_Div_Part: '',
                OrderPartDiscount: '',
                ApplyExtraServiceCost: true,
                ExtraServiceCost: '',
                SpareParts: [],
            },
            newSpareParts: {
                OrderType: 'SPSO',
                Price_Old: '',
                Price: '',
                PartNumber: '',
                Quantity_Old: '',
                Quantity: '',
                TotalPrice_Old: '',
                TotalPrice: '',
                IsManualAddPart: true,
                IsOrdered: false,
                LogisticsCmt: ''
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
    filters: {
        NumFormat: function(value) {
            if (!value) return '0.00'
            value = value.toString()
            var intPart = Number(value) | 0 //获取整数部分
            var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') //将整数部分逢三一断
            var floatPart = ".00" //预定义小数部分
            var value2Array = value.split(".")
            //=2表示数据有小数位
            if (value2Array.length == 2) {
                floatPart = value2Array[1].toString() //拿到小数部分

                if (floatPart.length == 1) { //补0,实际上用不着
                    return intPartFormat + "." + floatPart + '0'
                } else {
                    return intPartFormat + "." + floatPart
                }
            } else {
                return intPartFormat + floatPart
            }
        }
    },
    computed: {
        ...mapState([
            'UserName',
            'UserRole',
            'ServerUrl'
        ]),
        PartCost: function(){ //计算配件费用
            let Sum = 0
            this.detailData.SpareParts.map(function(item){
                item.TotalPrice = item.Price * item.Quantity
                Sum += item.TotalPrice
            })
            this.detailData.PartCost = Sum
            return Sum
        },
        OrderPartCost: function(){ //计算采购零件总额
            let Sum = 0
            this.detailData.SpareParts.map(function(item){
                item.TotalPrice = item.Price * item.Quantity
                if(item.IsOrdered){
                    Sum += item.TotalPrice
                }
            })
            this.detailData.OrderPartCost = Sum
            return Sum
        },
        RepairCost: function(){ //计算维修费用
            if(this.PartCost||this.detailData.LaborPaintCost){
                let Num = Number(this.PartCost) + Number(this.detailData.LaborPaintCost)
                Num = Number(Num).toFixed(2)
                this.detailData.RepairCost = Num
                return Num
            }else {
                this.detailData.RepairCost = ''
                return ''
            }
        },
        Repair_Div_Insurance: function(){ //计算维修费用/车损险保额
            if(this.detailData.InsuranceCoverage){
                let Num = this.RepairCost/this.detailData.InsuranceCoverage*100
                Num = Number(Num).toFixed(2)
                this.detailData.Repair_Div_Insurance = Num
                return Num + '%'
            }else{
                this.detailData.Repair_Div_Insurance = ''
                return ''
            }
        },
        Part_Div_Repair: function(){ //配件费用/维修费用
            if(this.RepairCost){
                let Num = this.PartCost/this.RepairCost*100
                Num = Number(Num).toFixed(2)
                this.detailData.Part_Div_Repair = Num
                return Num + '%'
            }else{
                this.detailData.Part_Div_Repair = ''
                return ''
            }
        },
        OrderPart_Div_Part: function(){ //计算采购零件总额/配件费用
            if(this.PartCost){
                let Num = this.OrderPartCost/this.PartCost*100
                Num = Number(Num).toFixed(2)
                this.detailData.OrderPart_Div_Part = Num
                return Num + '%'
            }else{
                this.detailData.OrderPart_Div_Part = ''
                return ''
            }
        },
        OrderPartDiscount: function(){ //计算配件折扣支持
            if(this.OrderPartCost){
                let Num = this.OrderPartCost/1.16*0.15
                Num = Number(Num).toFixed(2)
                this.detailData.OrderPartDiscount = Num
                return Num
            }else {
                this.detailData.OrderPartDiscount=''
                return ''
            }
        },
        ExtraServiceCost: function(){ //计算额外服务费
            if(this.detailData.ApplyExtraServiceCost&&this.OrderPartCost){
                let Num = this.OrderPartCost/1.16*0.1
                Num = Number(Num).toFixed(2)
                this.detailData.ExtraServiceCost = Num
                return Num
            }else {
                this.detailData.ExtraServiceCost=''
                return ''
            }
        }
    },
    methods: {
        ...mapMutations([
            'closeTags'
        ]),
        IsQuantityRevise(row){
            if(!row.IsManualAddPart&&row.Quantity_Old!=row.Quantity){
                return true
            }else{
                return false
            }
        },
        IsPriceRevise(row){
            if(!row.IsManualAddPart&&row.Price_Old!=row.Price){
                return true
            }else{
                return false
            }
        },
        IsTotalPriceRevise(row){
            if(!row.IsManualAddPart&&row.TotalPrice_Old!=row.TotalPrice){
                return true
            }else{
                return false
            }
        },
        IsUnOrderable({row, rowIndex}){
            if(row.IsUnOrderable){
                return 'UnOrderable'
            }else {
                return ''
            }
        },
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
            // let year = parseInt(cartotlemonth / 12)
            // let month = cartotlemonth % 12
            // this.detailData.VehicleAge = year == 0 ? month + '个月' : year + '年零' + month + '个月'
            this.detailData.VehicleAge = cartotlemonth
        },
        // toggleSelection(rows) {
        //     if (rows) {
        //         rows.forEach(row => {
        //             this.$refs.multipleTable.toggleRowSelection(row);
        //         });
        //     } else {
        //         this.$refs.multipleTable.clearSelection();
        //     }
        // },
        async handleCreateOrder(type) { //创建新订单
            try {
                const response = await Dealer.CreateOrder({
                    AccidentType: type
                })
                for (var variable in response.Data) {
                    this.detailData[variable] = response.Data[variable]
                }
            } catch (e) {
                console.log(e)
            }
            this.selectAccidentType = false
        },
        addSpareParts() { //添加零件
            this.newSpareParts.Price_Old = this.newSpareParts.Price
            this.newSpareParts.Quantity_Old = this.newSpareParts.Quantity
            this.newSpareParts.TotalPrice = this.newSpareParts.Quantity && this.newSpareParts.Price ? this.newSpareParts.Quantity * this.newSpareParts.Price : 0
            this.newSpareParts.TotalPrice_Old = this.newSpareParts.TotalPrice
            let Obj = JSON.parse(JSON.stringify(this.newSpareParts)) //深拷贝
            this.detailData.SpareParts.push(Obj)
            for (var key in this.newSpareParts) {
                this.newSpareParts[key] = ''
            }
            this.newSpareParts.OrderType = "SPSO"
            this.newSpareParts.IsManualAddPart = true
            this.addPartDialog = false
        },
        handleDeletPart(index, data) { //删除零件

            let arrindex = this.detailData.SpareParts.indexOf(data.row)

            this.detailData.SpareParts.splice(arrindex, 1)
            // this.detailData.SpareParts.splice(index,1)
            console.log(this.detailData.SpareParts)
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
        },
    },
    watch: {
        '$route': 'routeChange',
    },
    created() {
        this.routeChange()
        this.selectAccidentType = !this.$route.params.id
    }
}
</script>
<style lang="less">
.newOrder-container {
    .orderNumber {
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
    .symbol{
        background-color:#ff4949;
        color: #fff;
    }
    .bgc-green{
        input{
            background-color: #bbffbb;
        }
        .el-input__inner{
            background-color: #bbffbb;
            color:#606266;
        }
    }
    .UnOrderable{
        color: #C3C4CF;
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
.selectAccidentType {
    .el-dialog__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 25px;
        text-align: center;
    }
}
.text-right {
    input {
        text-align: right;
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
