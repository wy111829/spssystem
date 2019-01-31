<template>
<div class="main-container">
    <div class="DealerSignature">
        <el-form class="inline-form el-row" label-width="150px">
            <el-form-item label="经销商签名：">
                <el-input v-model="DealerSignature"></el-input>
            </el-form-item>
            <el-row class="text-center">
                <el-button type="primary" @click="submitForm">保存</el-button>
                <el-button type="info" @click="handleGoBack">取消</el-button>
            </el-row>
        </el-form>
    </div>
</div>
</template>

<script>
import {
    Dealer
} from '@/networks/api'
import {
    mapState,
    mapMutations
} from 'vuex'
export default {
    data() {
        return {
            DealerSignature: ''
        }
    },
    methods: {
        ...mapMutations([
            'closeTags'
        ]),
        async GetSignature() {
            try {
                const response = await Dealer.GetDealerSignature()
                this.DealerSignature = response.Data.DealerSignature
            } catch (e) {
                console.log(e);
            }
        },
        async submitForm() {
            try {
                const response = await Dealer.UpdateDealerSignature({
                    "DealerSignature":this.DealerSignature
                })
                if (response.Code == 200){
                    this.alertDialog()
                }
            } catch (e) {
                console.log(e);
            }
        },
        alertDialog() {
            this.$alert('操作完成', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.handleGoBack()
                }
            })
        },
        handleGoBack() {
            this.closeTags(this.$route.name)
            // this.$router.push({
            //     name: 'orderList'
            // })
        }
    },
    created() {
        this.GetSignature()
    }
}
</script>

<style lang="css" scoped>
.DealerSignature{
    max-width: 700px;
    margin: 0 auto;
}
</style>
