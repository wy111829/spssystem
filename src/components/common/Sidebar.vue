<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item  :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>

        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-document',
                        index: 'orderList',
                        title: '订单列表'
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'report',
                        title: '统计分析'
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'DealerManagment',
                        title: '审批策略设置'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '3',
                        title: '系统设置',
                        subs: [
                            {
                                index: 'systemDealerManager',
                                title: '经销商管理'
                            },
                            {
                                index: 'systemRegionalManger',
                                title: '区域经理管理'
                            },
                            {
                                index: 'systemUnableParts',
                                title: '不可订货的配件'
                            },
                            {
                                index: 'systemEmailAdressList',
                                title: '邮件地址管理'
                            },
                            // {
                            //     index: 'systemEmailTemList',
                            //     title: '邮件模板管理'
                            // },
                            {
                                index: 'systemMsg',
                                title: '系统消息'
                            },
                            {
                                index: 'systemPswd',
                                title: '修改密码'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 200px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
