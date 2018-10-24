import axios from 'axios'

export default {
  Login: ({UserName, Password}, config = {}) => axios.post('Login', {UserName, Password}, config),
  GetUserInfo: (config = {}) => axios.get('GetUserInfo', config),
  GetOrderList: (data = {}, config = {}) => axios.post('GetOrderList', data = {}, config)
}
