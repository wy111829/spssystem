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
                导入定损单信息
            </div>
            <el-form label-width="120px" class="el-row">
                <el-form-item label="DAT定损单号" class="el-col el-col-md-12 el-col-sm-12">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label-width="10px" label="" class="el-col el-col-md-12 el-col-sm-10">
                    <el-button size="small" type="primary">导入</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                客户及车辆信息
            </div>
            <el-form class="inline-form el-row" label-width="150px">
                <el-form-item label="车主：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车牌号：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车架号：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车型：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车辆首次登记日期：" class="el-col el-col-12 el-col-xs-24">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.name" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="保险公司：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="报案号:" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="是否厂商喷漆:" class="el-col el-col-12 el-col-xs-24">
                    <el-radio-group v-model="form.name">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否额外工时支持：" class="el-col el-col-12 el-col-xs-24">
                    <el-radio-group v-model="form.name">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="事故描述:" class="el-col el-col-24">
                    <el-input type="textarea" v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                配件明细
            </div>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column label="配件号">
                    <template slot-scope="scope">{{ scope.row.number }}</template>
                </el-table-column>
                <el-table-column prop="name" label="配件名称">
                </el-table-column>
                <el-table-column prop="count" label="订购数量" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="price" label="单价" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="totle" label="总价" show-overflow-tooltip>
                </el-table-column>
                <el-table-column type="selection" label="订购">
                </el-table-column>
                <el-table-column prop="" label="物流说明" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="" label="宝马审批说明" show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                本次维修成本
            </div>
            <el-form class="inline-form el-row" label-width="150px">
                <el-form-item label="新车销售价：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车辆实际价值：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="本次维修报价：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="实际价值占比：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="配件费用：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="配件占比：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="工时及其他：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="保险公司估损金额：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="form-box-neworder">
            <div class="form-title">
                其他
            </div>
            <el-form class="inline-form el-row" label-width="150px">
                <el-form-item label="车龄（月）：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="是否流失：" class="el-col el-col-12 el-col-xs-24">
                    <el-radio-group v-model="form.name">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="案件状态：" class="el-col el-col-12 el-col-xs-24">
                    <el-select v-model="form.region" placeholder="--Please select case status--">
                        <el-option label="Dealer self" value=""></el-option>
                        <el-option label="Expansion" value=""></el-option>
                        <el-option label="Recommended" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="流失去向：" class="el-col el-col-12 el-col-xs-24">
                    <el-select v-model="form.region" placeholder="--Please select customer churn to--">
                        <el-option label="Other BMW 4S Dealer" value=""></el-option>
                        <el-option label="Independent repair workshop" value=""></el-option>
                        <el-option label="others" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="保险公司联系人：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="流失原因：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="客户挽留措施:" class="el-col el-col-24">
                    <el-input type="textarea" v-model="form.name" placeholder="Within 500 characters"></el-input>
                </el-form-item>
                <el-form-item label="附件：" class="el-col el-col-12 el-col-xs-24">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'newOrder',
    data: function() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: true,
                type: [''],
                resource: '',
                desc: '',
                options: []
            },
            fileList: [],
            tableData: [{
                    number: '41217182570',
                    name: 'Rear left sidewall',
                    count: '1',
                    price: '500',
                    totle: '500'
                },
                {
                    number: '41217182570',
                    name: 'Rear left sidewall',
                    count: '1',
                    price: '500',
                    totle: '500'
                },
                {
                    number: '41217182570',
                    name: 'Rear left sidewall',
                    count: '1',
                    price: '500',
                    totle: '500'
                },
                {
                    number: '41217182570',
                    name: 'Rear left sidewall',
                    count: '1',
                    price: '500',
                    totle: '500'
                },
                {
                    number: '41217182570',
                    name: 'Rear left sidewall',
                    count: '1',
                    price: '500',
                    totle: '500'
                },
                {
                    number: '41217182570',
                    name: 'Rear left sidewall',
                    count: '1',
                    price: '500',
                    totle: '500'
                },
            ]
        }
    },
    methods: {
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
        }
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
</style>
