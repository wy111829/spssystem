import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import './networks/init.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'   // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/css/icon.css'
import "babel-polyfill"
//import '@/MockData/MockData'

Vue.use(ElementUI, { size: 'small' })
Vue.prototype.$axios = axios



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   store
// })
