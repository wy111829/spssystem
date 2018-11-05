import axios from 'axios'

export default {
    GetDealerPolicyList: (data = {}, config = {}) => axios.post('GetDealerPolicyList', data, config),
    SetDealerApprovePolicy: (data = {}, config = {}) => axios.post('SetDealerApprovePolicy', data, config),
    RMApproveOrder: (data = {}, config = {}) => axios.post('RMApproveOrder',data, config)

}
