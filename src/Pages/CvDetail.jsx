import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import CvService from "../Services/CvService";

export default function CvDetail() {
  let { id } = useParams();
  const [cv, setCv] = useState({})

  useEffect(()=>{
    let cvService = new CvService()
    cvService.getById(id).then(result=>setCv(result.data.data))
  },[]) 

  return (
    <div>
      {id}
    </div>
         
  );
}
