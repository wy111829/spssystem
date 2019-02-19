<template>
<div class="newOrder-container">
    <div class="container">
        <el-form class="inline-form" :model="detailData" :disabled="!CanEdit" ref="detailData" :rules="rules">
            <div class="form-box-neworder">
                <div class="orderNumber">
                    当前订单编号：{{detailData.OrderNumber}}
                </div>
                <div class="form-title">
                    基本信息
                </div>
                <el-row :gutter="20">
                    <el-col :md="6" :sm="12">
                        <el-form-item label="事故类型">
                            <el-radio-group v-model="detailData.AccidentTypeID" disabled>
                                <el-radio :label="1">大事故</el-radio>
                                <el-radio :label="2">水淹车</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="DAT定损单单号" prop="ReferenceNumber">
                            <el-input v-model.trim="detailData.ReferenceNumber" placeholder="">
                                <el-button slot="append" @click="handleImport">导入</el-button>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="经销商CKD代码" prop="DealerCKD">
                            <el-input v-model.trim="detailData.DealerCKD"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="经销商名称" prop="DealerName">
                            <el-input v-model.trim="detailData.DealerName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车主姓名" prop="VehicleOwner">
                            <el-input v-model.trim="detailData.VehicleOwner"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车牌号" prop="PlateNumber">
                            <el-input v-model.trim="detailData.PlateNumber"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车架号(VIN)" prop="VIN">
                            <el-input v-model="detailData.VIN" disabled=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="主车型名称" prop="BaseModelName">
                            <el-input v-model="detailData.BaseModelName" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="子车型名称" prop="SubModelName">
                            <el-input v-model="detailData.SubModelName" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车辆首次登记日期(保修起始时间)" prop="VehicleFirstRegDate">
                            <el-date-picker type="date"  placeholder="选择日期" v-model="detailData.VehicleFirstRegDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="保险公司：" prop="InsurerName">
                            <el-input v-model="detailData.InsurerName" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="保单号" prop="InsuranceNumber">
                            <el-input v-model="detailData.InsuranceNumber" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="车龄" prop="VehicleAge">
                            <el-input :value="CarAge" disabled></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
            <div class="form-box-neworder cost">
                <div class="form-title">
                    维修成本分析
                </div>
                <el-row :gutter="20">
                    <el-col :md="6" :sm="12">
                        <el-form-item label="配件费用">
                            <el-input :value="PartCost" type="number" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="工时及其他费用" prop="LaborPaintCost">
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
                        <el-form-item label="车损险保额" prop="InsuranceCoverage">
                            <el-input v-model="detailData.InsuranceCoverage" type="number"></el-input>
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
                        <el-form-item label="是否购买涉水险" v-if="detailData.AccidentTypeID=='2'">
                            <el-radio-group v-model="detailData.HasWadingInsurance">
                                <el-radio :label="true">是</el-radio>
                                <el-radio :label="false">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="申请额外服务费" v-if="detailData.AccidentTypeID=='1'">
                            <el-radio-group v-model="detailData.ApplyExtraServiceCost">
                                <el-radio :label="true">是</el-radio>
                                <el-radio :label="false">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="额外服务费" v-if="detailData.AccidentTypeID=='1'&&detailData.ApplyExtraServiceCost">
                            <i class="el-icon-info iconInfo" title="=(采购零件总额-增值税)*10%"></i>
                            <el-input :value="ExtraServiceCost" disabled></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
            <div class="form-box-neworder">
                <div class="form-title">
                    零件列表
                </div>
                <el-table ref="multipleTable" :data="detailData.SpareParts" tooltip-effect="dark" style="width: 100%" :row-class-name="IsUnOrderable">
                    <el-table-column label="订购类型" prop="OrderType"></el-table-column>
                    <el-table-column label="" width="25">
                        <template slot-scope="scope">
                            <span v-if="scope.row.IsManualAddPart" class="symbol" title="手动添加的零件">M</span>
                            <span v-if="scope.row.IsManualInputPrice">*</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="配件号" sortable prop="PartNumber" min-width="100">
                    </el-table-column>
                    <el-table-column prop="PartName" label="配件名称" min-width="120">
                    </el-table-column>
                    <el-table-column prop="Quantity" label="订购数量" min-width="90">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.Quantity" type="number" style="width:75%" min='0' :disabled="!CanEdit||scope.row.IsUnOrderable" :class="IsQuantityRevise(scope.row)?'bgc-green':''"></el-input>
                            <i class="el-icon-info iconInfo" :title="'原始数量:'+scope.row.Quantity_Old" v-if="IsQuantityRevise(scope.row)"></i>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Price" label="单价" sortable min-width="130">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.Price" type="number" style="width:75%" min='0' :disabled="!CanEdit||scope.row.IsUnOrderable" :class="IsPriceRevise(scope.row)?'bgc-green':''"></el-input>
                            <i class="el-icon-info iconInfo" :title="'原始价格:'+scope.row.Price_Old" v-if="IsPriceRevise(scope.row)"></i>
                        </template>
                    </el-table-column>
                    <el-table-column label="总价" show-overflow-tooltip sortable min-width="135">
                        <template slot-scope="scope">
                            <el-input disabled :value="scope.row.Price?Math.round(scope.row.Quantity*scope.row.Price*100)/100:''" style="width:75%" :class="IsTotalPriceRevise(scope.row)?'bgc-green':''"></el-input>
                            <i class="el-icon-info iconInfo" :title="'原始价格:'+scope.row.TotalPrice_Old" v-if="IsTotalPriceRevise(scope.row)"></i>
                        </template>
                    </el-table-column>

                    <el-table-column prop="IsOrdered" label="是否订购" width="50">
                        <template slot-scope="scope">
                            <i class="el-icon-remove-outline" title="不可订货零件" v-if="scope.row.IsUnOrderable" style="color:#ff4949;transform:rotate(45deg);font-weight:600"></i>
                            <el-checkbox v-model="scope.row.IsOrdered" v-else :disabled="!CanEdit"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="LogisticsCmt" label="物流备注" show-overflow-tooltip width="200">
                        <template slot-scope="scope">
                            <el-input placeholder="" v-model="scope.row.LogisticsCmt" clearable :disabled="!CanEdit||scope.row.IsUnOrderable">
                            </el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" fixed="right" v-if="CanEdit">
                        <template slot-scope="scope">
                            <el-button type="text" icon="el-icon-delete" style="color:#ff4949" @click="handleDeletPart(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button type="primary" @click="addPartDialog = true" style="margin-top:10px" v-if="CanEdit">添加零件</el-button>
            </div>
            <div class="form-box-neworder">
                <div class="form-title">
                    事故简述及车辆损坏情况
                </div>
                <el-form-item prop="AccidentBrief">
                    <el-input v-model.trim="detailData.AccidentBrief" type="textarea" width="80" rows=5></el-input>
                </el-form-item>
            </div>
        </el-form>
        <div class="form-box-neworder">
            <div class="form-title">
                相关附件
            </div>
            <div class="radio-box">
                <el-radio-group v-model="AttachmentCategoryID">
                    <el-radio :label="0">全部 {{detailData.AttachmentNumbers.Total}}</el-radio>
                    <el-radio :label="1">车险保单 {{detailData.AttachmentNumbers['1']}}</el-radio>
                    <el-radio :label="2">车损照片和油漆订单截屏 {{detailData.AttachmentNumbers['2']}}</el-radio>
                    <el-radio :label="3">车辆铭牌 {{detailData.AttachmentNumbers['3']}}</el-radio>
                    <el-radio :label="4">行驶证 {{detailData.AttachmentNumbers['4']}}</el-radio>
                    <el-radio :label="5">DAT定损单 {{detailData.AttachmentNumbers['5']}}</el-radio>
                    <el-radio :label="6" v-if="[205,206].includes(detailData.StatusCode)">发票及结算单 {{detailData.AttachmentNumbers['6']}}</el-radio>
                </el-radio-group>
            </div>
            <div class="select-box" style="margin-top:10px">
                <el-select v-model="AttachmentCategoryID" placeholder="请选择分类">
                    <el-option label="请选择分类" :value="0"></el-option>
                    <el-option label="车险保单" :value="1"></el-option>
                    <el-option label="车损照片和油漆订单截屏" :value="2"></el-option>
                    <el-option label="车辆铭牌" :value="3"></el-option>
                    <el-option label="行驶证" :value="4"></el-option>
                    <el-option label="DAT定损单" :value="5"></el-option>
                    <el-option label="发票及结算单" :value="6" v-if="[205,206].includes(detailData.StatusCode)"></el-option>
                </el-select>
                <el-upload action="/FileUpload" :http-request="uploadSectionFile" :show-file-list="false" style="display:inline-block" :disabled="AttachmentCategoryID==0" v-if="CanEdit">
                    <el-button type="primary" :disabled="AttachmentCategoryID==0">附件上传</el-button>
                </el-upload>
                <el-button type="primary" @click="AttachmentPreviewDialog = true">附件预览</el-button>
            </div>
            <el-table :data="AttachmentShowList">
                <el-table-column label="序号" prop="ID"></el-table-column>
                <el-table-column label="分类" prop="CategoryID">
                    <template slot-scope="scope">
                        {{GetCategoryName(scope.row.CategoryID)}}
                    </template>
                </el-table-column>
                <el-table-column label="名称" prop="FileName"></el-table-column>
                <el-table-column label="大小" prop="FileSize">
                    <template slot-scope="scope">
                        {{scope.row.FileSize+'MB'}}
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <a :href="ServerUrl+'/BigAccident/Action/FileDownLoad?OrderNumber='+ detailData.OrderNumber + '&DownloadFileName='+scope.row.DownloadFileName"><el-button type="text" icon="el-icon-download">下载</el-button></a>
                        <el-button type="text" icon="el-icon-delete" style="color:#ff4949" @click="handleRemoveFile(scope.row)" v-if="CanEdit">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="form-box-neworder" v-if="[205,206].includes(detailData.StatusCode)">
            <div class="form-title">
                结算信息
            </div>
            <el-form class="inline-form" :disabled="!(UserRole=='Dealer'&&detailData.StatusCode==205)">
                <el-row :gutter="20">
                    <el-col :md="6" :sm="12">
                        <el-form-item label="开工单日期">
                            <el-date-picker type="date" placeholder="选择日期" style="width:100%" v-model="detailData.WIP_OpenDate"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="工单结算日期">
                            <el-date-picker type="date" placeholder="选择日期" style="width:100%" v-model="detailData.WIP_SettleDate"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="结算单金额（含税）">
                            <el-input placeholder="" v-model="detailData.Settlement_Cost"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="工单号">
                            <el-input placeholder="" v-model="detailData.WIP_Number"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="结算单号">
                            <el-input placeholder="" v-model="detailData.Settlement_Number"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6" :sm="12">
                        <el-form-item label="总配件金额">
                            <el-input placeholder="" v-model="detailData.Settlement_PartCost"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="form-box-neworder text-center" style="margin-top:20px" v-if="UserRole=='Dealer'">
            <el-button type="primary" @click="submitToSaveOrder('detailData')" v-if="CanEdit||detailData.StatusCode==205">保存</el-button>
            <el-button type="primary" @click="submitToSubmitOrder('detailData')" v-if="[201,207,208].includes(detailData.StatusCode)">保存并提交</el-button>
            <el-button @click="handleCancelOrder" v-if="[201,202,203,204,207,208].includes(detailData.StatusCode)">取消订单</el-button>
            <el-button @click="handleFinishOrder" v-if="detailData.StatusCode==205">结算单上传完成</el-button>
            <el-button @click="handleGoBack">返回订单列表</el-button>
        </div>
        <div style="margin-top:20px" v-if="UserRole !='Dealer'">
            <el-form class="inline-form el-row" label-width="100px">
                <el-form-item label="审核备注：" class="el-col el-col-8" style="margin-right:10px;">
                    <el-input v-model="Comment" placeholder="" style="width:200px" :disabled="!CanApproved"></el-input>
                </el-form-item>
                <el-button type="primary" @click="handleApproved('Approved')" :disabled="!CanApproved">通过</el-button>
                <el-button type="danger" @click="handleApproved('Returned')" :disabled="!CanApproved">驳回</el-button>
                <el-button type="danger" @click="handleApproved('Rejected')" :disabled="!CanApproved">拒绝支持</el-button>
                <el-button type="" @click="handleGoBack">返回订单列表</el-button>
            </el-form>
            <el-form class="inline-form el-row" label-width="100px" v-if="detailData.StatusCode ==204 ||detailData.StatusCode == 205">
                <el-form-item class="el-col el-col-8" style="margin-right:10px;">
                    <el-select  placeholder="--请选择物流--" v-model="LogisticsID" style="width:200px">
                        <el-option v-for="(item, index) in LogisticsList" :key="item.UserID" :label="item.Name" :value="item.UserID">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-button type="primary" v-if="detailData.StatusCode == 204" @click="handleSendToLogistics" :disabled="!LogisticsID">发送物流</el-button>
                <el-button type="primary" v-if="detailData.StatusCode == 205" @click="handleSendToLogistics">补发邮件</el-button>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                申请日志
            </div>
            <el-row v-for="(item,index) in this.detailData.ApplicationLogs" :key="index" class="ApplicationLogs">
                <el-col :span="3" class="OperationDate">{{item.OperationDate}}</el-col>
                <el-col :span="7">{{item.Operator}} :{{item.Operation}}</el-col>
                <el-col :span="7">审批备注：{{item.Comments}}</el-col>
            </el-row>
        </div>
    </div>
    <el-dialog title="你正在创建新订单，请选择事故类型：" class="selectAccidentType" :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="selectAccidentTypeDialog" :show-close="false">
        <el-radio-group v-model="detailData.AccidentTypeID" style="text-align:center">
            <el-radio :label="1">大事故</el-radio>
            <el-radio :label="2">水淹车</el-radio>
        </el-radio-group>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleGoBack()">取消</el-button>
            <el-button type="primary" @click="handleCreateOrder(detailData.AccidentTypeID)" :disabled="!detailData.AccidentTypeID">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog title="添加零件" :visible.sync="addPartDialog" width="40%">
        <el-form label-width="100px" ref="newSpareParts" :model="newSpareParts" :rules="rules">
            <el-form-item label="订购类型：">
                <el-input disabled v-model="newSpareParts.OrderType"></el-input>
            </el-form-item>
            <el-form-item label="零件号：" prop="PartNumber">
                <el-input v-model="newSpareParts.PartNumber" type="number"></el-input>
            </el-form-item>
            <el-form-item label="配件名称：" prop="PartName">
                <el-input v-model="newSpareParts.PartName"></el-input>
            </el-form-item>
            <el-form-item label="订购数量：" prop="Quantity">
                <el-input type="number" v-model="newSpareParts.Quantity" min="0"></el-input>
            </el-form-item>
            <el-form-item label="单价：" prop="Price">
                <el-input type="number" v-model="newSpareParts.Price" min="0"></el-input>
            </el-form-item>
            <el-form-item label="总价：">
                <el-input type="number" disabled :value="newSpareParts.Quantity&&newSpareParts.Price?Math.round(newSpareParts.Quantity*newSpareParts.Price*100)/100:''"></el-input>
            </el-form-item>
            <el-form-item label="是否订购：">
                <el-checkbox v-model="newSpareParts.IsOrdered"></el-checkbox>
            </el-form-item>
            <el-form-item label="物流备注：">
                <el-input v-model="newSpareParts.LogisticsCmt"></el-input>
            </el-form-item>
        </el-form>
        <div class="text-center">
            <el-button type="primary" @click="addSpareParts('newSpareParts')">添加该零件</el-button>
            <el-button @click="addPartDialog = false">取消添加该零件</el-button>
        </div>
    </el-dialog>
    <el-dialog title="相关附件" class="AttachmentPreviewDialog" :visible.sync="AttachmentPreviewDialog" fullscreen>
        <div class="radio-box">
            <el-radio-group v-model="AttachmentCategoryID">
                <el-radio :label="0">全部 {{detailData.AttachmentNumbers.Total}}</el-radio>
                <el-radio :label="1">车险保单 {{detailData.AttachmentNumbers['1']}}</el-radio>
                <el-radio :label="2">车损照片和油漆订单截屏 {{detailData.AttachmentNumbers['2']}}</el-radio>
                <el-radio :label="3">车辆铭牌 {{detailData.AttachmentNumbers['3']}}</el-radio>
                <el-radio :label="4">行驶证 {{detailData.AttachmentNumbers['4']}}</el-radio>
                <el-radio :label="5">DAT定损单 {{detailData.AttachmentNumbers['5']}}</el-radio>
                <el-radio :label="6" v-if="[205,206].includes(detailData.StatusCode)">发票及结算单 {{detailData.AttachmentNumbers['6']}}</el-radio>
            </el-radio-group>
        </div>
        <div class="select-box" style="margin-top:10px">
            <el-select v-model="AttachmentCategoryID" placeholder="请选择分类">
                <el-option label="请选择分类" :value="0"></el-option>
                <el-option label="车险保单" :value="1"></el-option>
                <el-option label="车损照片和油漆订单截屏" :value="2"></el-option>
                <el-option label="车辆铭牌" :value="3"></el-option>
                <el-option label="行驶证" :value="4"></el-option>
                <el-option label="DAT定损单" :value="5"></el-option>
                <el-option label="发票及结算单" :value="6" v-if="[205,209].includes(detailData.StatusCode)"></el-option>
            </el-select>
            <el-upload action="/FileUpload" :http-request="uploadSectionFile" :show-file-list="false" style="display:inline-block" :disabled="AttachmentCategoryID==0" v-if="CanEdit">
                <el-button type="primary" :disabled="AttachmentCategoryID==0">附件上传</el-button>
            </el-upload>
        </div>
        <el-table :data="AttachmentShowList" default-expand-all>
            <el-table-column type="expand">
                <template slot-scope="scope" v-if="isImg(scope.row.FileName)">
                    <img :src="ServerUrl+'/BigAccident/Action/FileDownLoad?OrderNumber='+ detailData.OrderNumber + '&DownloadFileName='+scope.row.DownloadFileName" />
                    <!-- <img src="../../assets/login-bg1.png" style="width:90%" /> -->
                </template>
            </el-table-column>
            <el-table-column label="序号" prop="ID"></el-table-column>
            <el-table-column label="分类" prop="CategoryID">
                <template slot-scope="scope">
                    {{GetCategoryName(scope.row.CategoryID)}}
                </template>
            </el-table-column>
            <el-table-column label="名称" prop="FileName"></el-table-column>
            <el-table-column label="大小" prop="FileSize">
                <template slot-scope="scope">
                    {{scope.row.FileSize+'MB'}}
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <a :href="ServerUrl+'/BigAccident/Action/FileDownLoad?OrderNumber='+ detailData.OrderNumber + '&DownloadFileName='+scope.row.DownloadFileName"><el-button type="text" icon="el-icon-download">下载</el-button></a>
                    <el-button type="text" icon="el-icon-delete" style="color:#ff4949" @click="handleRemoveFile(scope.row)" v-if="CanEdit">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="AttachmentPreviewDialog = false">返回订单</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import {
    General,
    Dealer,
    RegionManagers,
    HQ
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
            selectAccidentTypeDialog: false,
            addPartDialog: false,
            AttachmentPreviewDialog: false,
            Result: '', // 审批结果 “Approved”：通过 “Rejected”：不通过
            Comment: '', //审核备注
            LogisticsID:'',
            detailData: {
                OrderID: '',
                OrderNumber: '',
                MyClaimID: '',
                AccidentTypeID: '',
                AccidentTypeName:'',
                StatusCode: 201,
                StatusName:'',
                CreateDate:'',
                LastModified:'',
                ReferenceNumber: "",
                DealerID:'',
                DealerCKD: '',
                DealerName: '',
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
                VehicleAge:0,
                InsurerID: 0,
                InsurerName: "",
                InsuranceNumber: "",
                AccidentBrief: "",
                PartCost: 0,
                LaborPaintCost: 0,
                RepairCost: 0,
                OrderPartCost: 0,
                InsuranceCoverage: 0,
                Repair_Div_Insurance: '',
                Repair_Div_Insurance: '',
                Part_Div_Repair: '',
                OrderPart_Div_Part: '',
                OrderPartDiscount: '',
                ApplyExtraServiceCost: true,
                HasWadingInsurance: '',
                ExtraServiceCost: 0,
                SpareParts: [],
                Attachments: [],
                AttachmentNumbers: {
                    "Total": 0,
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": 0,
                    "6": 0
                },
                ApplicationLogs: []
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
                IsOrdered: true,
                LogisticsCmt: ''
            },
            AttachmentCategoryID: 0,
            LogisticsList:[],
            rules: {
                ReferenceNumber: [{
                        required: true,
                        message: '请输入DAT定损单单号',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 50,
                        message: '输入格式有误',
                        trigger: 'blur'
                    }
                ],
                DealerCKD: [{
                        required: true,
                        message: '请输入经销商CKD代码',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 50,
                        message: '输入格式有误',
                        trigger: 'blur'
                    }
                ],
                DealerName: [{
                        required: true,
                        message: '请输入经销商名称',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 50,
                        message: '输入格式有误',
                        trigger: 'blur'
                    }
                ],
                VehicleOwner: [{
                        required: true,
                        message: '请输入车主姓名',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 50,
                        message: '输入格式有误',
                        trigger: 'blur'
                    }
                ],
                PlateNumber: [{
                        required: true,
                        message: '请输入车牌号',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 50,
                        message: '输入格式有误',
                        trigger: 'blur'
                    }
                ],
                VehicleFirstRegDate: [{
                    required: true,
                    message: '请选择日期',
                    trigger: 'change'
                }],
                LaborPaintCost: [{
                        required: true,
                        message: '请输入工时及其他费用',
                        trigger: 'blur'
                    },
                    // {
                    //     type: 'number',
                    //     message: '输入格式有误',
                    //     trigger: 'blur'
                    // }
                ],
                InsuranceCoverage: [{
                        required: true,
                        message: '请输入车险保额',
                        trigger: 'blur'
                    },
                    // {
                    //     type: 'number',
                    //     message: '输入格式有误',
                    //     trigger: 'blur'
                    // }
                ],
                AccidentBrief: [{
                    required: true,
                    message: '请输入事故简述及车辆损坏情况',
                    trigger: 'blur'
                }],
                PartNumber: [{
                    required: true,
                    message: '请输入零件号',
                    trigger: 'blur'
                }],
                PartName: [{
                    required: true,
                    message: '请输入零件名称',
                    trigger: 'blur'
                }],
                Quantity: [{
                    required: true,
                    message: '请输入订购数量',
                    trigger: 'blur'
                }],
                Price: [{
                    required: true,
                    message: '请输入零件价格',
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
        CanEdit() { //能否编辑
            if (this.UserRole == 'Dealer') {
                switch (this.detailData.StatusCode) {
                    case 201:
                    case 207:
                    case 208:
                        return true
                    default:
                        return false
                }
            } else {
                return false
            }
        },
        CanApproved() { //能否审批
            if (this.UserRole == 'RegionManager'&& this.detailData.StatusCode ==202) {
                return true
            }else if (this.UserRole == 'HQ-Administrator'&& this.detailData.StatusCode ==203) {
                return true
            }else {
                return false
            }
        },
        CarAge: function() { //计算车龄

            // if(this.detailData.VehicleAge){
            //     let year = parseInt(this.detailData.VehicleAge / 12)
            //     let month = this.detailData.VehicleAge % 12
            //     let age = year == 0 ? month + '个月' : year + '年零' + month + '个月'
            //     return age
            // }else
            if (this.detailData.VehicleFirstRegDate) {
                let now = new Date()
                let cartime = new Date(this.detailData.VehicleFirstRegDate)
                let cartotlemonth = Math.round((now - cartime) / 1000 / 60 / 60 / 24 / 30)
                this.detailData.VehicleAge = cartotlemonth
                let year = parseInt(cartotlemonth / 12)
                let month = cartotlemonth % 12
                let age = year == 0 ? month + '个月' : year + '年零' + month + '个月'
                return age
            }else {
                return ''
            }
        },
        PartCost: function() { //计算配件费用
            let Sum = 0
            this.detailData.SpareParts.map(function(item) {
                item.TotalPrice = item.Price * item.Quantity
                Sum += item.TotalPrice
            })
            this.detailData.PartCost = Sum
            return Sum
        },
        OrderPartCost: function() { //计算采购零件总额
            let Sum = 0
            this.detailData.SpareParts.map(function(item) {
                item.TotalPrice = item.Price * item.Quantity
                if (item.IsOrdered) {
                    Sum += item.TotalPrice
                }
            })
            Sum = Math.round(Sum * 100) / 100
            this.detailData.OrderPartCost = Sum
            return Sum
        },
        RepairCost: function() { //计算维修费用
            if (this.PartCost || this.detailData.LaborPaintCost) {
                let Num = parseFloat(this.PartCost) + parseFloat(this.detailData.LaborPaintCost)
                Num = Math.round(parseFloat(Num) * 100) / 100
                this.detailData.RepairCost = Num
                return Num
            } else {
                this.detailData.RepairCost = 0
                return ''
            }
        },
        Repair_Div_Insurance: function() { //计算维修费用/车损险保额
            if (this.detailData.InsuranceCoverage) {
                let Num = this.RepairCost / this.detailData.InsuranceCoverage * 100
                Num = Math.round(parseFloat(Num) * 100) / 100
                this.detailData.Repair_Div_Insurance = Num
                return Num + '%'
            } else {
                this.detailData.Repair_Div_Insurance = 0
                return ''
            }
        },
        Part_Div_Repair: function() { //配件费用/维修费用
            if (this.RepairCost) {
                let Num = this.PartCost / this.RepairCost * 100
                Num = Math.round(parseFloat(Num) * 100) / 100
                this.detailData.Part_Div_Repair = Num
                return Num + '%'
            } else {
                this.detailData.Part_Div_Repair = 0
                return ''
            }
        },
        OrderPart_Div_Part: function() { //计算采购零件总额/配件费用
            if (this.PartCost) {
                let Num = this.OrderPartCost / this.PartCost * 100
                Num = Math.round(parseFloat(Num) * 100) / 100
                this.detailData.OrderPart_Div_Part = Num
                return Num + '%'
            } else {
                this.detailData.OrderPart_Div_Part = 0
                return ''
            }
        },
        OrderPartDiscount: function() { //计算配件折扣支持
            if (this.OrderPartCost) {
                let Num = this.OrderPartCost / 1.16 * 0.15
                Num = Math.round(parseFloat(Num) * 100) / 100
                this.detailData.OrderPartDiscount = Num
                return Num
            } else {
                this.detailData.OrderPartDiscount = 0
                return ''
            }
        },
        ExtraServiceCost: function() { //计算额外服务费
            if (this.detailData.ApplyExtraServiceCost && this.OrderPartCost) {
                let Num = this.OrderPartCost / 1.16 * 0.1
                Num = Math.round(parseFloat(Num) * 100) / 100
                this.detailData.ExtraServiceCost = Num
                return Num
            } else {
                this.detailData.ExtraServiceCost = 0
                return ''
            }
        },
        GetCategoryName: function() { //附件显示分类 1=>'xxx'
            return function(CategoryID) {
                if (CategoryID == 1) {
                    return '车险保单'
                } else if (CategoryID == 2) {
                    return '车损照片和油漆订单截屏';
                } else if (CategoryID == 3) {
                    return '车辆铭牌';
                } else if (CategoryID == 4) {
                    return '行驶证';
                } else if (CategoryID == 5) {
                    return 'DAT定损单';
                } else if (CategoryID == 6) {
                    return '发票及结算单';
                }
            }
        },
        AttachmentShowList: function() { //附件列表显示内容
            let list = []
            if (this.detailData.Attachments.length > 0) {
                if (this.AttachmentCategoryID == 0) {
                    list = this.detailData.Attachments.slice(0)
                } else {
                    this.detailData.Attachments.map((item) => {
                        if (item.CategoryID == this.AttachmentCategoryID) {
                            list.push(item)
                        }
                    })
                }
            }
            return list
        },
        checkAttachmentList() { //检查附件列表是否有缺省项目
            for (var key in this.detailData.AttachmentNumbers) {
                if (key != '6') {
                    if (this.detailData.AttachmentNumbers[key] <= 0) {
                        return false
                    }
                }
            }
            return true
        },
    },
    methods: {
        ...mapMutations([
            'closeTags'
        ]),
        IsQuantityRevise(row) { //零件数量改变
            if (!row.IsManualAddPart && row.Quantity_Old != row.Quantity) {
                return true
            } else {
                return false
            }
        },
        IsPriceRevise(row) { //零件价格改变
            if (!row.IsManualAddPart && row.Price_Old != row.Price) {
                return true
            } else {
                return false
            }
        },
        IsTotalPriceRevise(row) { //零件总价改变
            if (!row.IsManualAddPart && row.TotalPrice_Old != row.TotalPrice) {
                return true
            } else {
                return false
            }
        },
        IsUnOrderable({row,rowIndex}) { //判断不可订货
            if (row.IsUnOrderable) {
                return 'UnOrderable'
            } else {
                return ''
            }
        },
        isImg(filename) { //判断图片
            let fileType = filename.substring(filename.indexOf(".") + 1).toUpperCase();
            if (fileType == "PNG" || fileType == "JPG" || fileType == "JPEG" || fileType == "GIF") {
                return true
            } else {
                return false
            }
        },
        // handleDatePicker(val) { //计算车龄
        //     console.log(val)
        //     let now = new Date()
        //     let cartime = new Date(val)
        //     let cartotlemonth = Math.round((now - cartime) / 1000 / 60 / 60 / 24 / 30)
        //     // let year = parseInt(cartotlemonth / 12)
        //     // let month = cartotlemonth % 12
        //     // this.detailData.VehicleAge = year == 0 ? month + '个月' : year + '年零' + month + '个月'
        //     this.detailData.VehicleAge = cartotlemonth
        // },
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
                    AccidentTypeID: type
                })
                for (var variable in response.Data) {
                    this.detailData[variable] = response.Data[variable]
                }
            } catch (e) {
                console.log(e)
            }
            this.selectAccidentTypeDialog = false
        },
        addSpareParts(formName) { //添加零件
            this.$refs[formName].validate((valid) => {
                if (valid) {
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
                    this.newSpareParts.IsOrdered = true
                    this.newSpareParts.IsManualAddPart = true
                    this.addPartDialog = false
                } else {
                    alert('数据不能为空')
                    return false
                }
            })
        },
        handleDeletPart(index, data) { //删除零件

            let arrindex = this.detailData.SpareParts.indexOf(data)

            this.detailData.SpareParts.splice(arrindex, 1)
            // this.detailData.SpareParts.splice(index,1)
            console.log(this.detailData.SpareParts)
        },
        CategoryChange(val) { //切换附件类型
            this.AttachmentShowList = []
            if (val == 0) {
                this.AttachmentShowList = this.detailData.Attachments.slice(0)
            } else {
                this.detailData.Attachments.map((item) => {
                    if (item.CategoryID == val) {
                        this.AttachmentShowList.push(item)
                    }
                })
            }
            console.log(this.AttachmentShowList)
        },
        async handleRemoveFile(row) { // 附件删除
            try {
                const response = await Dealer.FileDelete({
                    "ID": row.ID,
                    "OrderNumber":this.detailData.OrderNumber,
                    "DownloadFileName":row.DownloadFileName

                })
                if (response.Code == 200) {
                    //this.detailData.Attachments.splice(index, 1)
                    let arrindex = this.detailData.Attachments.indexOf(row)
                    this.detailData.Attachments.splice(arrindex, 1)
                    this.detailData.AttachmentNumbers.Total--
                    this.detailData.AttachmentNumbers[row.CategoryID]--
                }
            } catch (error) {
                console.log(error)
            }

        },
        handleFileUploadSuccess(Data) { //  附件上传成功
            this.detailData.Attachments.push({
                ID: Data.ID,
                CategoryID: Data.CategoryID,
                FileName: Data.FileName,
                DownloadFileName:Data.DownloadFileName,
                FileSize: Data.FileSize,
            })
            this.detailData.AttachmentNumbers.Total++
            this.detailData.AttachmentNumbers[Data.CategoryID]++
        },
        async uploadSectionFile(f) { //上传附件
            let param = new FormData(); //创建form对象
            param.append('file', f.file); //通过append向form对象添加数据
            param.append('OrderID', this.detailData.OrderID);
            param.append('OrderNumber', this.detailData.OrderNumber);
            param.append('CategoryID', this.AttachmentCategoryID);
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            try {
                const response = await Dealer.FileUpload(param, config)
                if (response.Code == 200) {
                    this.handleFileUploadSuccess(response.Data)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async handleSaveSettleInfo() { //订单结算信息保存
            try {
                const response = await Dealer.SaveSettleInfo({
                    "OrderID": this.detailData.OrderID,
                    "WIP_OpenDate": this.detailData.WIP_OpenDate,
                    "WIP_SettleDate": this.detailData.WIP_OpenDate,
                    "WIP_Number": this.detailData.WIP_OpenDate,
                    "Settlement_Number": this.detailData.WIP_OpenDate,
                    "Settlement_Cost": this.detailData.WIP_OpenDate,
                    "Settlement_PartCost": this.detailData.WIP_OpenDate,
                })
                if (response.Code == 200) {
                    //console.log(this.detailData)
                    this.alertDialog()
                }
            } catch (e) {
                console.log(e);
            }
        },
        async handleSaveOrder() { // 保存并不提交-经销商
            console.log(this.detailData)
            try {
                const response = await Dealer.SaveOrder(this.detailData)
                if (response.Code == 200) {
                    //console.log(this.detailData)
                    this.detailData.StatusID = response.Data.StatusID
                    this.alertDialog()
                }
            } catch (error) {
                console.log(error)
            }
        },
        async handleSubmitOrder() { // 保存并提交-经销商
            try {
                const response = await Dealer.SaveOrder(this.detailData)
                if (response.Code == 200) {
                    const subresponse = await Dealer.SubmitOrder({
                        "OrderID": this.detailData.OrderID
                    })
                    if (subresponse.Code == 200) {
                        //this.detailData.StatusID = subresponse.Data.StatusID
                        this.alertDialog()
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        async handleCancelOrder() { //取消订单
            try {
                const response = await Dealer.CancelOrder({
                    "OrderID": this.detailData.OrderID
                })
                if (response.Code == 200) {
                    this.detailData.StatusCode = response.Data.StatusID
                    this.alertDialog()
                }
            } catch (e) {
                console.log(e)
            }
        },
        submitToSaveOrder() { //保存点击事件
            if (this.detailData.StatusCode == 205) {
                this.handleSaveSettleInfo()
            } else {
                this.handleSaveOrder()
            }

        },
        submitToSubmitOrder(formName) { //提交点击事件
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.checkAttachmentList) {
                        this.handleSubmitOrder()
                    } else {
                        alert('附件各项不能为空！');
                        return false;
                    }
                } else {
                    alert('输入有误，请检查后提交');
                    return false;
                }
            })
        },
        async handleFinishOrder() { //结束订单
            try {
                const response = await Dealer.SaveSettlementInfo({
                    "OrderID": this.detailData.OrderID,
                    "WIP_OpenDate": this.detailData.WIP_OpenDate,
                    "WIP_SettleDate": this.detailData.WIP_OpenDate,
                    "WIP_Number": this.detailData.WIP_OpenDate,
                    "Settlement_Number": this.detailData.WIP_OpenDate,
                    "Settlement_Cost": this.detailData.WIP_OpenDate,
                    "Settlement_PartCost": this.detailData.WIP_OpenDate,
                })
                if (response.Code == 200) {
                    const subresponse = await Dealer.FinishOrder({
                        "OrderID": this.detailData.OrderID
                    })
                    if (subresponse.Code == 200) {
                        this.alertDialog()
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        async handleApproved(val) { //审批 - 区域经理或HQ
            try {
                if (this.UserRole == 'RegionManager') {
                    const response = await RegionManagers.RMApproveOrder({
                        "OrderID": this.detailData.OrderID,
                        "Result": val,
                        "Comment": this.Comment
                    })
                    if (response.Code == 200) {
                        this.alertDialog()
                    }
                } else if (this.UserRole == 'HQ-Administrator') {
                    const response = await HQ.HQApproveOrder({
                        "OrderID": this.detailData.OrderID,
                        "Result": val,
                        "Comment": this.Comment,
                    })
                    if (response.Code == 200) {
                        this.detailData.StatusCode = response.Data.StatusID
                        this.getLogisticsList()

                    }
                }
            } catch (e) {
                console.log(e)
            }
        },
        async getLogisticsList() { //获取物流列表
            try {
                const subresponse = await HQ.GetUserList({
                    "SearchField":"RoleCode",
                    "SearchValue":"Logistics",
                })
                if(subresponse.Code == 200) {
                    this.LogisticsList = subresponse.Data.Users
                }
            } catch (e) {
                console.log(e);
            }
        },
        async handleSendToLogistics() { //发物流
            try {
                const response = await HQ.SendToLogistics({
                    OrderID: this.detailData.OrderID,
                    UserID:this.LogisticsID
                })
                if (response.Code == 200) {
                    this.detailData.StatusCode = response.Data.StatusID
                }
            } catch (error) {
                console.log(error)
            }
        },
        async GetOrderInfo() { //获取订单信息
            try {
                const response = await General.GetOrderInfo({
                    OrderID: this.detailData.OrderID
                })
                this.detailData = response.Data
                // console.log(this.detailData)
                if (this.detailData.StatusCode == 204 ||this.detailData.StatusCode == 205){
                    this.getLogisticsList()
                }
            } catch (error) {
                console.log(error)
            }
        },
        routeChange() { //路由改变，如果有OrderID获取数据
            this.detailData.OrderID = this.$route.params.id ? this.$route.params.id : 0
            if (this.detailData.OrderID) {
                this.GetOrderInfo()
            }
        },
        async handleImport() { //导入订单信息
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
        alertDialog() { //alert对话框
            this.$alert('操作完成，返回订单列表', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() { //返回列表页并关闭当前页签
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
        this.selectAccidentTypeDialog = !this.$route.params.id
    }
}
</script>
<style lang="less">
.newOrder-container {
    .orderNumber {
        text-align: center;
        font-weight: 600;
    }
    .cost{
        input{
            direction: rtl
        }
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
    .symbol {
        background-color: #ff4949;
        color: #fff;
        cursor: default;
    }
    .bgc-green {
        input {
            background-color: #bbffbb;
        }
        .el-input__inner {
            background-color: #bbffbb;
            color: #606266;
        }
    }
    .UnOrderable {
        color: #C3C4CF;
    }
    .hidden {
        display: none;
    }
}
.el-form-item__content > div {
    width: 100%;
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
    line-height: 25px !important;
}
.iconInfo {
    color: #409EFF;
    cursor: help;
}
</style>
