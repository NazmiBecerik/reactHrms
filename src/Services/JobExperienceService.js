import axios from "axios"
export default class JobExperienceService {
    getJobExperiences(){
       return axios.get("http://localhost:8080/api/jobExperienceController/getAll");
    }
    getById(id) {
        return axios.get(`http://localhost:8080/api/jobExperienceController/getById?id=${id}`);
    }
}
