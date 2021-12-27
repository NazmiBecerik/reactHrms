import axios from "axios"
export default class JobSeekerService {
    getJobSeekers(){
       return axios.get("http://localhost:8080/api/jobSeekerController/getAll");
    }
    getById(id){
        return axios.get(`http://localhost:8080/api/jobSeekerController/getById?id=${id}`)
    }
}
