import axios from 'axios'
const BASE_URL='http://localhost:9096/api/v1/'
export const RUMDropService=() => {
    return axios.get(`${BASE_URL}rate/rum/`)
}