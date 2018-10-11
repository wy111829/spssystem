<template>
  <div id="wrapper">
        <navbar-left></navbar-left> 
        <!-- 右侧 -->
        <div id="page-wrapper" style="background-color: #f5f5f5">
             <navbar-top></navbar-top> 
              <!-- 主体 -->
            <div class="wrapper wrapper-content animated fadeInRight">
                <div id="insertNavbar">
                    <a href="#"><i class="glyphicon glyphicon-home"></i> <span class="nav-label">首页</span></a>
                    >
                    <a href="#"> <span>申请单列表</span></a>
                </div>
                <div class="main col-lg-12" style="background-color:#fff">
                    <order-list></order-list>
                </div>
            </div>
            <!-- 底部页脚 -->
            <div class="footer gray-bg">
                <div class="center-block text-center">
                    <strong>Copyright</strong> Example Company &copy; 2014-2017
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import navbarLeft from '@/components/navbarLeft'
import navbarTop from '@/components/navbarTop'
import orderList from '@/components/orderList'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      'navbar-left': navbarLeft,
      'navbar-top': navbarTop,
      'order-list': orderList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
