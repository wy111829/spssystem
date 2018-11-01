import axios from 'axios'

export default {
    Login: ({UserName, Password}, config = {}) => axios.post('Login', {UserName, Password}, config),
    GetUserInfo: (config = {}) => axios.get('GetUserInfo', config),
    GetOrderList: (data = {}, config = {}) => axios.post('GetOrderList', data, config),
    GetOrderInfo: ({OrderID}, config ={}) => axios.get('GetOrderInfo?OrderID=' + OrderID, config),
    GetDealerPolicyList: (data = {}, config = {}) => axios.post('GetDealerPolicyList', data, config),
    ImportOrderInfo: (data = {}, config = {}) => axios.post('ImportOrderInfo',data,config)
}
