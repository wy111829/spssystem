<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :router="true" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened>
            <template v-for="item in items">
                <template v-if="item.subs&&item.role.includes(UserRole)">
                    <el-submenu  v-if="item.role.includes(UserRole)" :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs"  v-if="subItem.role.includes(UserRole)">
                            <el-menu-item  :index="subItem.index"  :route="{name: subItem.name}" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item v-if="item.role.includes(UserRole)" :index="item.index"  :route="{name: item.name}" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
            <el-card class="systemMsg" v-if="!collapse">
                <div class="clearfix" style="text-align:center;margin-bottom:10px">
                    <span>BMW广播站</span>
                </div>
                <p style="text-align:center;font-size:6px;line-height20px;margin-bottom:10px;color:#909399">{{Message.PublishDate}}</p>
                <p>{{Message.MessageContent}}</p>
                <router-link :to="{ name: 'systemMsg'}">
                    <el-button style="float: right; padding: 3px 0" type="text">详细</el-button>
                </router-link>
            </el-card>
        </el-menu>
    </div>
</template>

<script>
    import {General} from '@/networks/api'
    import bus from '../common/bus'
    import { mapState} from 'vuex'
    export default {
        data() {
            return {
                // UserRole: 'Dealer',
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-document',
                        name: 'orderList',
                        index: '1',
                        title: '订单列表',
                        role: ['Dealer', 'RegionManager', 'BMW-BP','Administrator']
                    },
                    {
                        icon: 'el-icon-tickets',
                        name: 'report',
                        title: '统计分析',
                        index: '2',
                        role:  ['Dealer', 'RegionManager', 'BMW-BP','Administrator']
                    },
                    {
                        icon: 'el-icon-tickets',
                        name: 'DealerManagment',
                        index: '3',
                        title: '审批策略设置',
                        role:  ['RegionManager','Administrator']
                    },
                    {
                        icon: 'el-icon-setting',
                        name: '',
                        index: '4',
                        title: '系统设置',
                        role: ['Dealer', 'RegionManager', 'BMW-BP','Administrator'],
                        subs: [
                            {
                                name: 'systemDealerManager',
                                index: '4-1',
                                title: '经销商管理',
                                role: ['BMW-BP','Administrator']
                            },
                            {
                                name: 'systemRegionalManger',
                                index: '4-2',
                                title: '区域经理管理',
                                role: ['BMW-BP','Administrator']
                            },
                            {
                                name: 'systemUnableParts',
                                index: '4-3',
                                title: '不可订货的配件',
                                role: ['BMW-BP','Administrator']
                            },
                            {
                                name: 'systemEmailAdressList',
                                index: '4-4',
                                title: '邮件地址管理',
                                role: ['BMW-BP','Administrator']
                            },
                            // {
                            //     name: 'systemEmailTemList',
                            //     title: '邮件模板管理'
                            // },
                            {
                                name: 'systemMsg',
                                index: '4-5',
                                title: '系统消息',
                                role: ['Dealer', 'RegionManager','BMW-BP','Administrator']
                            },
                            {
                                name: 'systemPswd',
                                index: '4-6',
                                title: '修改密码',
                                role:  ['Dealer', 'RegionManager', 'BMW-BP','Administrator']
                            }
                        ]
                    }
                ],
                Message:{
                    "ID":23,
                    "MessageContent":"这是一条测试消息。",
                    "PublishDate":"2018-10-19 14:23:38"
                }
            }
        },
        computed:{
            ...mapState([
                'UserName',
                'UserRole'
           ]),
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        methods: {
            async GetSysMessageList() {
                try {
                    const response = await General.GetSysMessageList({
                        "RowOffset":1,
                        "RowCount":1,
                        "SearchField": '',
                        "SearchValue": '',
                        "SortField": '',
                        "SortType": ''
                    })
                    this.Message = response.Data.Messages[0]
                    this.Message.MessageContent = this.Message.MessageContent.substring(0,15)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        created(){
            this.GetSysMessageList()
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped lang="less">
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
        background-color: rgb(50, 65, 87);
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
    .systemMsg{
        width: 90%;
        margin: 0 auto;
        font-size: 13px;
        background-color: rgb(50, 65, 87);
        border-color: rgb(50, 65, 87);
        color: rgb(191, 203, 217);
        margin-top: 20px;
    }

</style>
