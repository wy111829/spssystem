import axios from 'axios'

export default {
    ImportOrderInfo: (data = {}, config = {}) => axios.post('ImportOrderInfo',data,config),
    SaveOrder: (obj, config = {}) => axios.post('SaveOrder', obj, config),
    SubmitOrder: (config = {}) => axio.get('SubmitOrder',config)
}
