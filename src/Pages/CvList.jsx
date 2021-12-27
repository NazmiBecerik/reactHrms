import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {Table } from "semantic-ui-react";
import CvService from "../Services/CvService";

export default function CvList() {

  const [cvs, setCvs] = useState([])

  useEffect(()=>{
    let cvService = new CvService()

    cvService.getCvs().then(result=>setCvs(result.data.data))
  },[]) 
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Meslek</Table.HeaderCell>
            <Table.HeaderCell>Dil</Table.HeaderCell>
            <Table.HeaderCell>Dil Seviyesi</Table.HeaderCell>
            <Table.HeaderCell>Okul</Table.HeaderCell>
            <Table.HeaderCell>Deneyimleri</Table.HeaderCell>
            <Table.HeaderCell>Yetenekler</Table.HeaderCell>
            <Table.HeaderCell>Yetenek Seviyesi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map(cv=>(
            <Table.Row key={cv.id} >
            <Table.Cell><Link to={`/cvs/${cv.id}`}>{cv.jobSeeker.firstName+ " "+ cv.jobSeeker.lastName}</Link></Table.Cell> 
            <Table.Cell>{cv.jobSeeker.email}</Table.Cell>
            <Table.Cell>{cv.jobTitle.name}</Table.Cell>
            <Table.Cell>{cv.language.name}</Table.Cell>
            <Table.Cell>{cv.language.level}</Table.Cell>
            <Table.Cell>{cv.school.name}</Table.Cell>
            <Table.Cell><Link to={`/jobExperiences/${cv.jobExperience.id}`}>{cv.jobExperience.name}</Link></Table.Cell>
            <Table.Cell>{cv.programmingSkill.name}</Table.Cell>
            <Table.Cell>{cv.programmingSkill.level}</Table.Cell>
            <Table.Cell>{cv.city.name}</Table.Cell>  
          </Table.Row>
          ))}
          
        </Table.Body>
      </Table>
    </div>
  );
}
