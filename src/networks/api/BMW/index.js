import axios from 'axios'

export default {
    BMWApproveOrder: (data = {}, config = {}) => axios.post('BMWApproveOrder',data, config),
    ChangeDealerStatus: (data = {}, config = {}) => axios.post('ChangeDealerStatus', data, config),
    GetDealerList: (data = {}, config = {}) =>axios.post('GetDealerList',data, config),
    GetDealerInfo:({DealerID}, config ={}) => axios.get('GetDealerInfo?DealerID=' + DealerID, config),
    GetRMList: (config = {}) => axios.get('GetRMList', config),
    ChangeRMStatus:(data = {}, config = {}) => axios.post('ChangeRMStatus', data, config),
    GetRMInfo:({DealerID}, config ={}) => axios.get('GetRMInfo?UserID=' + UserID, config),
}
