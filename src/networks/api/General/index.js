import axios from 'axios'

export default {
    Login: ({LoginName, Password}, config = {}) => axios.post('Login', {LoginName, Password}, config),
    GetUserInfo: (config = {}) => axios.get('GetUserInfo', config),
    GetOrderNumbers: (config = {}) => axios.get('GetOrderNumbers', config),
    GetOrderList: (data = {}, config = {}) => axios.post('GetOrderList', data, config),
    GetOrderInfo: ({OrderID}, config ={}) => axios.get('GetOrderInfo?OrderID=' + OrderID, config),
    GetSysMessageList: (data = {}, config = {}) =>axios.post('GetSysMessageList', data,config),
    GetSysMessage: ({ID}, config ={}) => axios.get('GetSysMessage?ID=' + ID, config),
    ChangePassword:(data = {}, config = {}) => axios.post('ChangePassword', data, config),
    Logout:(config = {}) => axios.get('Logout', config),
}
