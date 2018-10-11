<template>
<!-- main -->
    <div class="clearfix">
        <div class="RadioList col-md-8 col-sm-12">
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="option1" checked> 全部
            </label>
            <label class="radio-inline">
                <input type="radio"  name="inlineRadioOptions" value="option2"> 未提交
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="option3"> 待区域审批
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="option4"> 待宝马审批
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="option5"> 被宝马退回
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="option6"> 待上传工单和发票
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="option7"> 已完成
            </label>
        </div>
        <div class="Search col-md-4 col-sm-6 col-xs-8">
            <form class="form-inline">
                <div class="form-group">
                    <div class="input-group VinSearch">
                        <input type="text" class="form-control" id="exampleInputAmount" placeholder="Type last 7 VIN to search">
                        <div class="input-group-addon btn"><i class="glyphicon glyphicon-search"></i></div>
                    </div>
                </div>
                <button type="submit" class="btn btn-info NewOrderbtn">New Order</button>
            </form>
        </div>
        <div class="TableList col-xs-12 clearfix">
            <table class="table">
                <thead>
                    <tr>
                        <th>创建日期</th>
                        <th>车牌号</th>
                        <th>VIN</th>
                        <th>车型</th>
                        <th>保险公司</th>
                        <th>维修总价</th>
                        <th>配件费用</th>
                        <th>配件占比</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableList" :key="item.id">
                        <td>{{item.time}}</td>
                        <td>{{item.pai}}</td>
                        <td>{{item.vin}}</td>
                        <td>{{item.cartype}}</td>
                        <td>{{item.baoxian}}</td>
                        <td>{{item.totalprice}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.baifenbi}}</td>
                        <td>{{item.stat}}</td>
                    </tr>
                </tbody>
            </table>
            <ul class="pagination pagination-sm pull-right">
                <li><a href="#">&laquo;</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&raquo;</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'orderList',
  data() {
      return {
          tableList: [
              {
                  id: 1,
                  time: '2016-12-12',
                  pai: '京N88888',
                  vin: 'LBVPZ1100ASD77412',
                  cartype: '520LI (E60)',
                  baoxian: '中国人保PICC',
                  totalprice: '107,426',
                  price: '92,509',
                  baifenbi: '86.2%',
                  stat: '待宝马审批'
              },
              {
                  id: 2,
                  time: '2016-12-12',
                  pai: '京N88888',
                  vin: 'LBVPZ1100ASD77412',
                  cartype: '520LI (E60)',
                  baoxian: '中国人保PICC',
                  totalprice: '107,426',
                  price: '92,509',
                  baifenbi: '86.2%',
                  stat: '待宝马审批'
              },
              {
                  id: 3,
                  time: '2016-12-12',
                  pai: '京N88888',
                  vin: 'LBVPZ1100ASD77412',
                  cartype: '520LI (E60)',
                  baoxian: '中国人保PICC',
                  totalprice: '107,426',
                  price: '92,509',
                  baifenbi: '86.2%',
                  stat: '待宝马审批'
              },
              {
                  id: 4,
                  time: '2016-12-12',
                  pai: '京N88888',
                  vin: 'LBVPZ1100ASD77412',
                  cartype: '520LI (E60)',
                  baoxian: '中国人保PICC',
                  totalprice: '107,426',
                  price: '92,509',
                  baifenbi: '86.2%',
                  stat: '待宝马审批'
              }
          ]
      }
  }
}
</script>

<style>

</style>
