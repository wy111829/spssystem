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
    mode: 'history',
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
                    path: '/newOrder',
                    component: resolve => require(['@/views/newOrder'], resolve),
                    meta: { title: '新建订单' },
                    name: 'newOrder'
                },
                {
                    path: '/orderList',
                    component: resolve => require(['@/views/orderList'], resolve),
                    meta: { title: '订单列表' },
                    name: 'orderList'
                },
                {
                    path: '/orderDetial',
                    component: resolve => require(['@/views/orderDetial'], resolve),
                    meta: { title: '订单详情' },
                    name: 'orderDetial'
                },
                {
                    path: '/report',
                    component: resolve => require(['@/views/report'], resolve),
                    meta: { title: '统计分析' },
                    name: 'report'
                },
                {
                    path: '/systemDealerManager',
                    component: resolve => require(['@/views/systemSet/systemDealerManager'], resolve),
                    meta: { title: '经销商管理' },
                    name: 'systemDealerManager'
                },
                {

                    path: '/systemEmailAdressList',
                    component: resolve => require(['@/views/systemSet/systemEmailAdressList'], resolve),
                    meta: { title: '邮件地址管理' },
                    name: 'systemEmailAdressList'
                },
                {

                    path: '/systemEmailAdressNew',
                    component: resolve => require(['@/views/systemSet/systemEmailAdressNew'], resolve),
                    meta: { title: '新增邮件地址' },
                    name: 'systemEmailAdressNew'
                },
                {

                    path: '/systemEmailTemList',
                    component: resolve => require(['@/views/systemSet/systemEmailTemList'], resolve),
                    meta: { title: '邮件模板管理' },
                    name: 'systemEmailTemList'
                },
                {

                    path: '/systemEmailTemNew',
                    component: resolve => require(['@/views/systemSet/systemEmailTemNew'], resolve),
                    meta: { title: '新增邮件模块' },
                    name: 'systemEmailTemNew'
                },
                {

                    path: '/systemMsg',
                    component: resolve => require(['@/views/systemSet/systemMsg'], resolve),
                    meta: { title: '系统消息' },
                    name: 'systemMsg'
                },
                {

                    path: '/systemPswd',
                    component: resolve => require(['@/views/systemSet/systemPswd'], resolve),
                    meta: { title: '系统消息', permission: true },
                    name: 'systemPswd'
                },
                {

                    path: '/systemRegionalManger',
                    component: resolve => require(['@/views/systemSet/systemRegionalManger'], resolve),
                    meta: { title: '区域经理管理', permission: true },
                    name: 'systemRegionalManger'
                },
                {

                    path: '/systemUnableParts',
                    component: resolve => require(['@/views/systemSet/systemUnableParts'], resolve),
                    meta: { title: '不可订货的配件', permission: true },
                    name: 'systemUnableParts'
                },
                {

                    path: '/systemNewDealer',
                    component: resolve => require(['@/views/systemSet/systemNewDealer'], resolve),
                    meta: { title: '新建经销商', permission: true },
                    name: 'systemNewDealer'
                },
                {
                    path: '/404',
                    component: resolve => require(['@/views/error/404.vue'], resolve),
                    meta: { title: '404' },
                    name: '404'
                },
                {
                    path: '/403',
                    component: resolve => require(['@/views/error/403.vue'], resolve),
                    meta: { title: '403' },
                    name: '403'
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['@/views/login'], resolve),
            name: 'login'
        },
        {
            path: '*',
            redirect: '/404'
        }
  ]
})
