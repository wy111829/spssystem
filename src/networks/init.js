import axios from 'axios'
import router from '@/router'

const portUrl = '/BigAccident/Action/'

// 设置全局请求前缀
axios.defaults.baseURL = portUrl
//axios.defaults.headers['Content-Type'] ='application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true
axios.interceptors.response.use((response) => {
    // console.log('=====axios--response====', response)
    if (response.data.Code == 200) {
        return response.data
    } else if ( response.data.Code == 301) {
        alert(response.data.Message)
        router.push('/login')
    } else{
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
