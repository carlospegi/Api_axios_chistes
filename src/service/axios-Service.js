
import axiosConfig from '../config/axios.config'
export default function getRandomChiste(){
    return axiosConfig('/',{
        validateStatus: function(status){
            return status < 500
        }
    })
}
