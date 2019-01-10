import axios from 'axios'

export default {
    BMWApproveOrder: (data = {}, config = {}) => axios.post('BMWApproveOrder',data, config),
    ChangeDealerStatus: (data = {}, config = {}) => axios.post('ChangeDealerStatus', data, config),
    GetDealerList: (data = {}, config = {}) =>axios.post('GetDealerList',data, config),
    GetDealerInfo:({DealerID}, config ={}) => axios.get('GetDealerInfo?DealerID=' + DealerID, config),
    GetRMList: (data = {},config = {}) => axios.post('GetRMList', data, config),
    GetRegionDealerList: (data = {},config = {}) => axios.post('GetRegionDealerList', data, config),
    ChangeRMStatus:(data = {}, config = {}) => axios.post('ChangeRMStatus', data, config),
    CreateOrUpdateDealer: (data ={}, config ={}) => axios.post('CreateOrUpdateDealer', data, config),
    GetRMInfo:({ID}, config ={}) => axios.get('GetRMInfo?ID=' + ID, config),
    UpdateRM:(data = {}, config = {}) => axios.post('UpdateRM', data, config),
    GetUnOrderablePartList:(data = {}, config = {}) =>axios.post('GetUnOrderablePartList',data, config),
    GetMailAddressList:(config = {}) =>axios.get('GetMailAddressList',config),
    ChangeMailAddressStatus:(data = {}, config = {}) => axios.post('ChangeMailAddressStatus', data, config),
    GetMailAddressInfo:({MailBoxCode}, config ={}) => axios.get('GetMailAddressInfo?MailBoxCode=' + MailBoxCode,config),
    UpdateMailAddress:(data ={}, config ={}) => axios.post('UpdateMailAddress', data, config),
    CreateSysMessage:(data = {}, config = {}) => axios.post('CreateSysMessage', data, config),
    DeleteSysMessage:(data = {}, config = {}) => axios.post('DeleteSysMessage', data, config),
    GetRegionProvCityList:(config = {}) => axios.get('GetRegionProvCityList', config),
    ImportUnOrderablePart: (obj, config = {}) =>axios.post('ImportUnOrderablePart',obj, config)
}
