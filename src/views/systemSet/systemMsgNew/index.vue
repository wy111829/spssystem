<template>
<div class="main-container">
    <div class="systemMsgNew">
        <el-form :model="Data" ref="Data" label-width="150px">
            <el-form-item label="消息内容：">
                <el-input v-model="Data.MessageContent" type="textarea" :autosize="{minRows:5}"></el-input>
            </el-form-item>
            <el-row class="text-center">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('Data')">发送</el-button>
                    <el-button type="info" @click="handleGoBack">取消</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
</div>
</template>

<script>
import {BMW} from '@/networks/api'
import {mapState,mapMutations} from 'vuex'
export default {
    data () {
        return {
            Data: {
                MessageContent:''
            }
        }
    },
    methods:{
        ...mapMutations([
          'closeTags'
        ]),
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.SendMessage()
                } else {
                    alert('error submit!!');
                    return false;
                }
            })
        },
        async SendMessage (){
            try {
                const response = await BMW.CreateSysMessage(this.Data)
                if (response.Code == 200) {
                    this.alertDialog()
                }
            } catch (e) {
                console.log(e)
            }
        },
        alertDialog() {
            this.$alert('操作完成，返回系统消息列表', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() {
            this.closeTags(this.$route.name)
            this.$router.push({
                name: 'systemMsg'
            })
        }
    }
}
</script>

<style lang="css">
</style>
