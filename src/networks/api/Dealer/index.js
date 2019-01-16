import axios from 'axios'

export default {
    CreateOrder: (data = {}, config = {}) => axios.post('CreateOrder',data,config),
    ImportOrderInfo: (data = {}, config = {}) => axios.post('ImportOrderInfo',data,config),
    SaveOrder: (obj, config = {}) => axios.post('SaveOrder', obj, config),
    SubmitOrder: ({OrderID}, config = {}) => axios.get('SubmitOrder?OrderID='+ OrderID,config),
    SaveSettleInfo: (data = {}, config = {}) => axios.post('SaveSettleInfo',data,config),
    FinishOrder: ({OrderID}, config = {}) => axios.get('FinishOrder?OrderID='+ OrderID,config),
    CancelOrder: ({OrderID}, config = {}) => axios.get('CancelOrder?OrderID='+ OrderID,config),
    FileDelete: ({id}, config = {}) => axios.get('FileDelete?id' + id, config),
    FileUpload: (obj, config = {}) =>axios.post('FileUpload',obj, config)
}
