import axios from 'axios'

export default {
    Login: ({UserName, Password}, config = {}) => axios.post('Login', {UserName, Password}, config),
    GetUserInfo: (config = {}) => axios.get('GetUserInfo', config),
    GetOrderList: (data = {}, config = {}) => axios.post('GetOrderList', data, config),
    GetOrderInfo: ({OrderID}, config ={}) => axios.get('GetOrderInfo?OrderID=' + OrderID, config),
    GetSysMessageList: (data = {}, config = {}) =>axios.post('GetSysMessageList', data,config),
    GetSysMessage: ({ID}, config ={}) => axios.get('GetSysMessage?ID=' + ID, config),
    ChangePassword:(data = {}, config = {}) => axios.post('ChangePassword', data, config),
    Logout:(config = {}) => axios.get('Logout', config),
}
