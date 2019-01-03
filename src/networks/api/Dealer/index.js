import axios from 'axios'

export default {
    CreateOrder: (data = {}, config = {}) => axios.post('CreateOrder',data,config),
    ImportOrderInfo: (data = {}, config = {}) => axios.post('ImportOrderInfo',data,config),
    SaveOrder: (obj, config = {}) => axios.post('SaveOrder', obj, config),
    SubmitOrder: ({OrderID}, config = {}) => axios.get('SubmitOrder?OrderID='+ OrderID,config),
    DeleteOrder: ({OrderID}, config = {}) => axios.get('DeleteOrder?OrderID='+ OrderID,config),
    FileDelete: (obj, config = {}) => axios.post('FileDelete', obj, config),
    FileUpload: (obj, config = {}) =>axios.post('FileUpload',obj, config)
}
