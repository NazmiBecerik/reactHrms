import axios from "axios"
export default class EmployerService {
    getEmployers(){
       return axios.get("http://localhost:8080/api/employerController/getAll");
    }
    getById(id) {
        return axios.get(`http://localhost:8080/api/employerController/getById?id=${id}`);
    }
}
