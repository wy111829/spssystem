import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
// import * as getters from './getters.js'
import {
    General
} from '@/networks/api'
Vue.use(Vuex)

/** 状态定义 */

const store = new Vuex.Store({
    state: {
        UserRole: '',
        UserName: '',
        tagsList: [],
        ServerUrl : ''
    },
    mutations: {
        setTagsList: (state, payload) => {
            let route = payload
            const isExist = state.tagsList.some(item => {
                if (item.name == route.name) {
                    item.path = route.fullPath
                }
                return item.name === route.name;
            })
            if (!isExist) {
                if (state.tagsList.length >= 8) {
                    state.tagsList.shift();
                }
                state.tagsList.push({
                    title: route.meta.title,
                    path: route.fullPath,
                    name: route.name
                })
            }
        },
        closeTags: (state, payload) => {
            let index = 0
            // console.log(payload, router)
            state.tagsList.map((item, i) => {
                if (item.name == payload) {
                    index = i
                }
            })
            const delItem = state.tagsList.splice(index, 1)[0];
            // console.log(delItem, index)
            const item = state.tagsList[index] ? state.tagsList[index] : state.tagsList[index - 1];
            if (item) {
                delItem.path === router.currentRoute.fullPath && router.push(item.path);
            } else {
                router.push('/orderList');
            }
        },
        closeAll: (state, payload) => {
            state.tagsList = []
            router.push('/orderList')
        },
        closeOther: (state, payload) => {
            const curItem = state.tagsList.filter(item => {
                return item.path === router.currentRoute.fullPath;
            })
            state.tagsList = curItem
        },
    },
    actions: {
        async GetUserInfo({
            commit,
            state
        }) {
            try {
                const response = await General.GetUserInfo()
                state.UserRole = response.Data.Role
                state.UserName = response.Data.UserName
            } catch (error) {
                console.log(error)
            }
        }
    },
})
export default store
