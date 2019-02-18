import axios from 'axios'

export default {
    CreateOrder: (data = {}, config = {}) => axios.post('CreateOrder',data,config),
    ImportOrderInfo: (data = {}, config = {}) => axios.post('ImportOrderInfo',data,config),
    SaveOrder: (obj, config = {}) => axios.post('SaveOrder', obj, config),
    SubmitOrder: ({OrderID}, config = {}) => axios.get('SubmitOrder?OrderID='+ OrderID,config),
    SaveSettlementInfo: (data = {}, config = {}) => axios.post('SaveSettlementInfo',data,config),
    FinishOrder: ({OrderID}, config = {}) => axios.get('FinishOrder?OrderID='+ OrderID,config),
    CancelOrder: ({OrderID}, config = {}) => axios.get('CancelOrder?OrderID='+ OrderID,config),
    FileDelete: (data = {}, config = {}) => axios.post('FileDelete', data, config),
    FileUpload: (obj, config = {}) =>axios.post('FileUpload',obj, config),
    GetDealerSignature: (config = {}) => axios.get('GetDealerSignature', config),
    UpdateDealerSignature: (data = {}, config = {}) => axios.post('UpdateDealerSignature',data,config)
}
