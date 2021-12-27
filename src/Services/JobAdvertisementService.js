import axios from "axios"
export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisementController/getAll")
    }
    getById(id){
        return axios.get(`http://localhost:8080/api/jobAdvertisementController/getById?id=${id}`)
    }
   
}