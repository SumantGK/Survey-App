import axios from 'axios'
const BASE_URL='http://localhost:9096/api/v1/'
export const EventTypeDropService=() => {
    return axios.get(`${BASE_URL}rate/eventtype/`)
}