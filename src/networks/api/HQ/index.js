import axios from 'axios'

export default {
    HQApproveOrder: (data = {}, config = {}) => axios.post('HQApproveOrder',data, config),
    ChangeDealerStatus: (data = {}, config = {}) => axios.post('ChangeDealerStatus', data, config),
    GetDealerList: (data = {}, config = {}) =>axios.post('GetDealerList',data, config),
    GetDealerInfo:({DealerID}, config ={}) => axios.get('GetDealerInfo?DealerID=' + DealerID, config),
    GetRMList: (data = {},config = {}) => axios.post('GetRMList', data, config),
    GetRegionDealerList: (data = {},config = {}) => axios.post('GetRegionDealerList', data, config),
    ChangeRMStatus:(data = {}, config = {}) => axios.post('ChangeRMStatus', data, config),
    CreateOrUpdateDealer: (data ={}, config ={}) => axios.post('CreateOrUpdateDealer', data, config),
    GetRMInfo:({ID}, config ={}) => axios.get('GetRMInfo?ID=' + ID, config),
    CreateOrUpdateRM:(data = {}, config = {}) => axios.post('CreateOrUpdateRM', data, config),
    GetUserList:(data = {},config = {}) =>axios.post('GetUserList',data,config),
    ChangeUserStatus:(data = {}, config = {}) => axios.post('ChangeUserStatus', data, config),
    GetUserInfo:({ID}, config ={}) => axios.get('GetUserInfo?ID=' + ID, config),
    CreateOrUpdateUser:(data ={}, config ={}) => axios.post('CreateOrUpdateUser', data, config),
    CreateSysMessage:(data = {}, config = {}) => axios.post('CreateSysMessage', data, config),
    DeleteSysMessage:(data = {}, config = {}) => axios.post('DeleteSysMessage', data, config),
    GetRegionProvCityList:(config = {}) => axios.get('GetRegionProvCityList', config),
    SendToLogistics:(data = {}, config ={}) => axios.post('SendToLogistics', data, config)
}
