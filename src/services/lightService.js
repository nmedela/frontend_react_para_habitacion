import axios from 'axios'
import { url } from '../config'
class LightService {
    constructor() {

    }
    getAll = () => {
        return axios.get(`http://${url}/light/all`)
            .then((res) => {
                return res.data
            })
    }
    setScene = (light) => {
        return axios.post(`http://${url}/light/change`, light)
            .then((res) => {
                console.log(res)
                return res.data
            })
    }

    getSteps = () => {
        return axios.get(`http://${url}/light/steps`)
            .then((res) => {
                return res.data
            })
    }
    setOption = (option) => {
        return axios.post(`http://${url}/light/program`, option)
            .then((res) => {
                console.log(res)
                return res.data
            })
    }
    getOptions = () => {
        return axios.get(`http://${url}/light/program/all`)
            .then((res) => {
                return res.data
            })
    }
    deleteOption = (id) => {
        return axios.delete(`http://${url}/light/program/${id}`)
        .then((res) => {
            return res.data
        })
    }

}

export default LightService