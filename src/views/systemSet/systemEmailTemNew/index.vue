<template>
    <div class="main-container">
        <el-form class="inline-form el-row" label-width="150px">
            <el-form-item label="主题：" class="el-col el-col-24 el-col-xs-24">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="收件人:" class="el-col el-col-24 el-col-xs-24">
                <el-select v-model="form.Recipient" placeholder="--Pleas select address role--">
                    <el-option label="Dealer" value="Dealer"></el-option>
                    <el-option label="Rgion Manager" value="RgionManager"></el-option>
                    <el-option label="HQ body-paint team" value="HQ body-paint team"></el-option>
                    <el-option label="HQ logistics team" value="HQ logistics team"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="正文：" class="el-col el-col-24 el-col-xs-24">
                <el-input v-model="form.text" type="textarea" :autosize="{minRows:8,maxRows:30}"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() { //选项 / 数据
        return {
            form:{
                title: "",
                Recipient: "",
                text: ""
            }
        }
    },
    methods: { //事件处理器
        onSubmit() {

        }
    },
    components: { //定义组件

    },
    created() { //生命周期函数

    }
}
</script>

<style lang='less'>

</style>
