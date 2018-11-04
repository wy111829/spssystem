import axios from 'axios'

export default {
    ImportOrderInfo: (data = {}, config = {}) => axios.post('ImportOrderInfo',data,config),
    SaveOrder: (obj, config = {}) => axios.post('SaveOrder', obj, config),
    SubmitOrder: ({OrderID}, config = {}) => axio.get('SubmitOrder?OrderID='+OrderID,config)
}
