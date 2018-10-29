import axios from 'axios'
import router from '@/router'

const portUrl = '/BigAccident/Action/'

// 设置全局请求前缀
axios.defaults.baseURL = portUrl

axios.interceptors.response.use((response) => {
    // console.log('=====axios--response====', response)
    if (response.data.Code == 200) {
      return response.data
    } else if (response.data.Code == 300 || response.data.Code == 301 || response.data.Code == 302 || response.data.Code == 400) {
      alert(response.data.Message)
      return ''
    }
}, (e) => {
    return Promise.reject(e)
})

axios.interceptors.request.use(async config => {
    // Do something before request is sent
    return config
  }, error => {
    // Do something with request error
    return Promise.reject(error)
})
