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
              <el-form label-width="120px"  class="el-row">
                <el-form-item label="DAT定损单号"  class="el-col el-col-12">
                    <el-input  v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label-width="10px" label="" class="el-col el-col-12">
                  <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
              </el-form>
          </div>
          <div class="form-box-neworder">
            <div class="form-title">
              客户及车辆信息
            </div>
              <el-form class="inline-form el-row" label-width="150px" >
                <el-form-item label="车主：" class="el-col el-col-12">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车牌号：" class="el-col el-col-12">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车架号：" class="el-col el-col-12">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车型：" class="el-col el-col-12">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="车辆首次登记日期：" class="el-col el-col-12">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.name" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="保险公司：" class="el-col el-col-12">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="报案号:" class="el-col el-col-12">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item style="height:32px;" class="el-col el-col-12">
                </el-form-item>
                <el-form-item label="是否厂商喷漆:" class="el-col el-col-12">
                  <el-radio-group v-model="form.name">
                     <el-radio label="是"></el-radio>
                     <el-radio label="否"></el-radio>
                   </el-radio-group>
                </el-form-item>
                <el-form-item label="是否额外工时支持：" class="el-col el-col-12">
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


        </div>

    </div>
</template>

<script>
    export default {
        name: 'newOrder',
        data: function(){
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: '',
                    options: []
                },
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
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
             }
        }
    }
</script>
<style lang="less">
.newOrder-container{
  .form-box-neworder{
    .form-title{
      font-size: 16px;
      font-weight: bold;
      padding-left: 10px;
      border-bottom: 1px solid #000000;
      margin: 20px 0;
    }
  }
}

</style>
