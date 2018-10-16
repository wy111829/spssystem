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
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/newOrder',
                    component: resolve => require(['@/views/newOrder'], resolve),
                    meta: { title: '新建订单' }
                },
                {
                    path: '/orderList',
                    component: resolve => require(['@/views/orderList'], resolve),
                    meta: { title: '订单列表' }
                },
                {
                    path: '/report',
                    component: resolve => require(['@/views/report'], resolve),
                    meta: { title: '统计分析' }
                },
                {
                    path: '/systemDealerManager',
                    component: resolve => require(['@/views/systemSet/systemDealerManager'], resolve),
                    meta: { title: '经销商管理' }
                },
                {

                    path: '/systemEmailAdressList',
                    component: resolve => require(['@/views/systemSet/systemEmailAdressList'], resolve),
                    meta: { title: '邮件地址管理' }
                },
                {

                    path: '/systemEmailAdressNew',
                    component: resolve => require(['@/views/systemSet/systemEmailAdressNew'], resolve),
                    meta: { title: '新增邮件地址' }
                },
                {

                    path: '/systemEmailTemList',
                    component: resolve => require(['@/views/systemSet/systemEmailTemList'], resolve),
                    meta: { title: '邮件模板管理' }
                },
                {

                    path: '/systemEmailTemNew',
                    component: resolve => require(['@/views/systemSet/systemEmailTemNew'], resolve),
                    meta: { title: '新增邮件模块' }
                },
                {

                    path: '/systemMsg',
                    component: resolve => require(['@/views/systemSet/systemMsg'], resolve),
                    meta: { title: '系统消息' }
                },
                {

                    path: '/systemPswd',
                    component: resolve => require(['@/views/systemSet/systemPswd'], resolve),
                    meta: { title: '系统消息', permission: true }
                },
                {

                    path: '/systemRegionalManger',
                    component: resolve => require(['@/views/systemSet/systemRegionalManger'], resolve),
                    meta: { title: '区域经理管理', permission: true }
                },
                {

                    path: '/systemUnableParts',
                    component: resolve => require(['@/views/systemSet/systemUnableParts'], resolve),
                    meta: { title: '不可订货的配件', permission: true }
                },
                {

                    path: '/systemNewDealer',
                    component: resolve => require(['@/views/systemSet/systemNewDealer'], resolve),
                    meta: { title: '新建经销商', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['@/views/error/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['@/views/error/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['@/views/login'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
  ]
})
