import axios from 'axios'

export default {
    GetUnOrderablePartList:(data = {}, config = {}) =>axios.post('GetUnOrderablePartList',data, config),
    ImportUnOrderablePart: (obj, config = {}) =>axios.post('ImportUnOrderablePart',obj, config)
}
