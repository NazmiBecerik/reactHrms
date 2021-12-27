import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import JobSeekerService from "../Services/JobSeekerService";
import { Card,Icon,Image } from "semantic-ui-react";

export default function JobSeekerDetail() {
  let { id } = useParams();
  const [jobSeeker, setJobSeeker] = useState({})

  useEffect(()=>{
    let jobSeekerService = new JobSeekerService()
    jobSeekerService.getById(id).then(result=>setJobSeeker(result.data.data))
  },{}) 

  return (
    <div>
      
    </div>
         
  );
}
