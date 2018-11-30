import Vue from 'vue';
import Router from 'vue-router';
// import home from '@/views/Home'
// import newOrder from '@/views/newOrder'
// import orderList from '@/views/orderList'
// import report from '@/views/report'
// import systemDealerManager from '@/views/systemSet/systemDealerManager'
// import systemEmailAdressList from '@/views/systemSet/systemEmailAdressList'
// import systemEmailAdressNew from '@/views/systemSet/systemEmailAdressNew'
// import systemEmailTemList from '@/views/systemSet/systemEmailTemList'
// import systemEmailTemNew from '@/views/systemSet/systemEmailTemNew'
// import systemMsg from '@/views/systemSet/systemMsg'
// import systemPswd from '@/views/systemSet/systemPswd'
// import systemRegionalManger from '@/views/systemSet/systemRegionalManger'
// import systemUnableParts from '@/views/systemSet/systemUnableParts'

Vue.use(Router)

export default new Router({
    //mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/orderList',
            name: 'orderList'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            name: 'Home',
            children:[
                {
                    path: '/orderList',
                    component: resolve => require(['@/views/orderList'], resolve),
                    meta: { title: '订单列表', keepAlive: false  },
                    name: 'orderList'
                },
                {
                    path: '/DealerManagment',
                    component: resolve => require(['@/views/DealerManagment'], resolve),
                    meta: { title: '审批策略设置', keepAlive: true  },
                    name: 'DealerManagment'
                },
                {
                    path: '/orderDetial/:id?',
                    component: resolve => require(['@/views/orderDetial'], resolve),
                    meta: { title: '订单详情', keepAlive: false  },
                    name: 'orderDetial'
                },
                {
                    path: '/report',
                    component: resolve => require(['@/views/report'], resolve),
                    meta: { title: '统计分析', keepAlive: true  },
                    name: 'report'
                },
                {
                    path: '/systemDealerManager',
                    component: resolve => require(['@/views/systemSet/systemDealerManager'], resolve),
                    meta: { title: '经销商管理', keepAlive: false  },
                    name: 'systemDealerManager'
                },
                {

                    path: '/systemEmailAdressList',
                    component: resolve => require(['@/views/systemSet/systemEmailAdressList'], resolve),
                    meta: { title: '邮件地址管理', keepAlive: false  },
                    name: 'systemEmailAdressList'
                },
                {

                    path: '/systemEmailAdressDetail/:id?',
                    component: resolve => require(['@/views/systemSet/systemEmailAdressDetail'], resolve),
                    meta: { title: '邮件地址', keepAlive: false  },
                    name: 'systemEmailAdressDetail'
                },
                {

                    path: '/systemEmailTemList',
                    component: resolve => require(['@/views/systemSet/systemEmailTemList'], resolve),
                    meta: { title: '邮件模板管理', keepAlive: true  },
                    name: 'systemEmailTemList'
                },
                {

                    path: '/systemEmailTemNew',
                    component: resolve => require(['@/views/systemSet/systemEmailTemNew'], resolve),
                    meta: { title: '新增邮件模块', keepAlive: true  },
                    name: 'systemEmailTemNew'
                },
                {

                    path: '/systemMsg',
                    component: resolve => require(['@/views/systemSet/systemMsg'], resolve),
                    meta: { title: '系统消息', keepAlive: false  },
                    name: 'systemMsg'
                },
                {

                    path: '/systemMsgNew',
                    component: resolve => require(['@/views/systemSet/systemMsgNew'], resolve),
                    meta: { title: '新建系统消息', keepAlive: true  },
                    name: 'systemMsgNew'
                },
                {

                    path: '/systemPswd',
                    component: resolve => require(['@/views/systemSet/systemPswd'], resolve),
                    meta: { title: '修改密码', permission: true, keepAlive: false  },
                    name: 'systemPswd'
                },
                {

                    path: '/systemRegionalManger',
                    component: resolve => require(['@/views/systemSet/systemRegionalManger'], resolve),
                    meta: { title: '区域经理管理', permission: true, keepAlive: false  },
                    name: 'systemRegionalManger'
                },
                {

                    path: '/systemRegionManagerDetail/:id?',
                    component: resolve => require(['@/views/systemSet/systemRegionManagerDetail'], resolve),
                    meta: { title: '区域经理详情', permission: true, keepAlive: false  },
                    name: 'systemRegionManagerDetail'
                },
                {

                    path: '/systemUnableParts',
                    component: resolve => require(['@/views/systemSet/systemUnableParts'], resolve),
                    meta: { title: '不可订货的配件', permission: true, keepAlive: true  },
                    name: 'systemUnableParts'
                },
                {

                    path: '/systemDealerDetail/:id?',
                    component: resolve => require(['@/views/systemSet/systemDealerDetail'], resolve),
                    meta: { title: '经销商详情', permission: true , keepAlive: false },
                    name: 'systemDealerDetail'
                },
                {
                    path: '/404',
                    component: resolve => require(['@/views/error/404.vue'], resolve),
                    meta: { title: '404', keepAlive: true  },
                    name: '404'
                },
                {
                    path: '/403',
                    component: resolve => require(['@/views/error/403.vue'], resolve),
                    meta: { title: '403', keepAlive: true  },
                    name: '403'
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['@/views/login'], resolve),
            name: 'login',
            meta: { title: '登录', keepAlive: false  },
        },
        {
            path: '*',
            redirect: '/404'
        }
  ]
})
