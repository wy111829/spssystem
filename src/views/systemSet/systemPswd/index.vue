<template>
    <div class="main-container">
        <el-form class="inline-form el-row" label-width="150px">
            <el-form-item label="用户名：" class="el-col-24">
                <el-input v-model="form.username" readonly></el-input>
            </el-form-item>
            <el-form-item label="当前密码：" class="el-col-24">
                <el-input v-model="form.oldpswd" type="password"></el-input>
            </el-form-item>
            <el-form-item label="请输入新密码：" class="el-col-24">
                <el-input v-model="form.newpswd" type="password"></el-input>
            </el-form-item>
            <el-form-item label="请再次输入新密码：" class="el-col-24">
                <el-input v-model="form.requirenewpswd" type="password"></el-input>
            </el-form-item>
            <el-row class="text-center el-col-24">
                <el-button type="primary">保存</el-button>
                <el-button type="info">取消</el-button>
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
    data() { //选项 / 数据
        return {
            form: {
                username: '1234',
                oldpswd: '',
                newpswd: '',
                requirenewpswd: ''
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

<style>

</style>
