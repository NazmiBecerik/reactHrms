import axios from "axios"
export default class CvService {
    getCvs(){
       return axios.get("http://localhost:8080/api/cvController/getAll");
    }
    getById(id){
        return axios.get(`http://localhost:8080/api/cvController/getById?id=${id}`)
    }
}
