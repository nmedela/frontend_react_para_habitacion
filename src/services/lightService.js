import axios from 'axios'
import { url } from '../config'
class LightService {
    constructor(){

    }
     getAll= ()=> {
        return  axios.get(`http://${url}/light/all`)
        .then((res)=>{
            return res.data
        })
    }
     setScene= (light)=> {
        return  axios.post(`http://${url}/light/change`, light)
        .then((res)=>{
            console.log(res)
            return res.data
        })
    }
}

export default LightService