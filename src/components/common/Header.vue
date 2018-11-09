<template>
<div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
    </div>
    <div class="logo">大事故车配件支持系统</div>
    <div class="header-right">
        <div class="header-user-con">
            <!-- 全屏显示 -->
            <div class="btn-fullscreen" @click="handleFullScreen">
                <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                    <i class="el-icon-rank"></i>
                </el-tooltip>
            </div>
            <!-- 消息中心 -->
            <div class="btn-bell">
                <el-tooltip effect="dark" content="消息中心" placement="bottom">
                    <router-link to="/systemMsg">
                        <i class="el-icon-bell"></i>
                    </router-link>
                </el-tooltip>
                <!-- <span class="btn-bell-badge" v-if="message"></span> -->
            </div>
            <!-- 用户头像 -->
            <div class="user-avator"><img src="/static/img/u478.png"></div>
            <!-- 用户名下拉菜单 -->
            <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    {{UserName}} <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</div>
</template>
<script>
import bus from '../common/bus'
import {General} from '@/networks/api'
import { mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            name: '',
            message: 2
        }
    },
    computed: {
        ...mapState([
            'UserName',
            'UserRole'
        ]),
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username')
                this.Logout()
            }
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        ...mapMutations([
          'closeTags',
          'closeAll'
        ]),
        resizeFun() {
            if (window.innerWidth < 750) {

                bus.$emit('collapse', true);
            } else {
                bus.$emit('collapse', false);
            }
        },
        async Logout() {
            try{
                const response = await General.Logout()
                if(response.Code == 200){
                    this.closeAll(this.$route.name)
                    this.$alert('已退出登录')
                    this.$router.push('/login');
                }
            } catch(error){
                console.log(error)
            }
        }
    },
    mounted() {
        let self = this
        this.resizeFun()
        window.onresize = function() {
            self.resizeFun()
        }
    },
    created () {
    }
}
</script>
<style lang="less" scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    // line-height: 70px;
    font-size: 22px;
    color: #fff;
}
.header:after{
  content:'';
  display: block;
  clear: both;
}

.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}

.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}

.header-right {
    float: right;
    padding-right: 50px;
}

.header-user-con {
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
    height: 70px;
    align-items: center;
}

.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}

.btn-bell,
.btn-fullscreen {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}

.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}

.btn-bell .el-icon-bell {
    color: #fff;
}

.user-name {
    margin-left: 10px;
    display: inline-block;
}

.user-avator {
    margin-left: 20px;
    display: inline-block;
    // vertical-align: middle;
    height: 70px;
    line-height: 70px;
}

.user-avator img {
    // display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
}

.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}

.el-dropdown-menu__item {
    text-align: center;
}
</style>
