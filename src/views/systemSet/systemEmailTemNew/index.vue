<template>
    <div class="main-container">
        <el-form class="inline-form el-row" label-width="150px">
            <el-form-item label="主题：" class="el-col el-col-24 el-col-xs-24">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="收件人:" class="el-col el-col-24 el-col-xs-24">
                <el-select v-model="form.Recipient" clearable placeholder="--Pleas select address role--">
                    <el-option label="Dealer" value="Dealer"></el-option>
                    <el-option label="Rgion Manager" value="RgionManager"></el-option>
                    <el-option label="BMW body-paint team" value="BMW body-paint team"></el-option>
                    <el-option label="BMW logistics team" value="BMW logistics team"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="正文：" class="el-col el-col-24 el-col-xs-24">
                <el-input v-model="form.text" type="textarea" :autosize="{minRows:8,maxRows:30}"></el-input>
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

    },
    components: { //定义组件

    },
    created() { //生命周期函数

    }
}
</script>

<style lang='less'>

</style>
