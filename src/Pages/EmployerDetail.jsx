import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import EmployerService from "../Services/EmployerService";

export default function EmployerDetail() {
  let { id } = useParams();
  const [employer, setEmployer] = useState({})

  useEffect(()=>{
    let employerService = new EmployerService()
    employerService.getById(id).then(result=>setEmployer(result.data.data))
  },[]) 

  return (
    <div>
      {id}
    </div>
         
  );
}
