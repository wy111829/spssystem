import axios from 'axios'

export default {
    BMWApproveOrder: (data = {}, config = {}) => axios.post('BMWApproveOrder',data, config),
    GetDealerList: (data = {}, config = {}) =>axios.post('GetDealerList',data, config),
}
