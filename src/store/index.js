import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'
import {General} from '@/networks/api'
Vue.use(Vuex)

/** 状态定义 */

const store = new Vuex.Store({
  state: {
    count: 0,
    UserRole: '',
    UserName: ''
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  },
  actions: {
      async GetUserInfo ({commit, state}) {
        try {
            const response = await General.GetUserInfo()
            state.UserRole = response.Data.Role
            state.UserName = response.Data.UserName
        } catch (error) {
  			console.log(error)
  	    }
     }
  }
})
export default store
