<template>
   <!-- 左侧边栏 -->
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="text-center">
                        <h3 class="nav-label" style="font-size:20px;color:#fff;">大事故车配件支持系统</h3>
                    </li>
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear"> <span class="block m-t-xs"><i class="glyphicon glyphicon-user"></i> <strong class="font-bold">用户名</strong>
                             </span> <span class="text-muted text-xs block">管理员 <b class="caret"></b></span> </span> </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a href="#">登出</a></li>
                            </ul>
                        </div>
                        <div class="logo-element">
                            IN+
                        </div>
                    </li>
                    <li class="active">
                        <a href="OrderList.html"><i class="glyphicon glyphicon-th-list"></i> <span class="nav-label">申请单列表</span></a>
                    </li>
                    <li>
                        <a href="#"><i class="glyphicon glyphicon-stats"></i> <span class="nav-label">统计分析</span> </a>
                    </li>
                    <li>
                        <a href="#"><i class="glyphicon glyphicon-cog"></i> <span class="nav-label">系统设置</span><span class="fa arrow"></span></a></a>
                        <ul class="nav nav-second-level">
                            <li  v-for="(item, index) in list" :key="index" :class="item == '经销商管理' ? 'active' : ''"><a href="">{{item}}</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </nav>
</template>

<script>
export default {
  name: 'navbarLeft',
  data () {
    return {
      list: [
          '经销商管理',
          '区域经理管理',
          '不可订货的配件',
          '邮件地址管理',
          '邮件模板管理',
          '系统消息',
          '修改密码'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
