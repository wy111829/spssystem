import axios from 'axios'

export default {
    SaveOrder: (obj, config = {}) => axios.post('SaveOrder', obj, config)
}
