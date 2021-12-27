import React,{useState,useEffect} from "react";
import {Table } from "semantic-ui-react";
import JobSeekerService from "../Services/JobSeekerService";
import { Link } from "react-router-dom";
export default function JobSeekerList() {

  const [jobSeekers, setJobSeekers] = useState([])

  useEffect(()=>{
    let jobSeekerService = new JobSeekerService()

    jobSeekerService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
  },[]) 
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
            <Table.HeaderCell>Mail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map(jobSeeker=>(
            <Table.Row key={jobSeeker.id}>
            <Table.Cell><Link to={`/jobSeekers/${jobSeeker.id}`}>{jobSeeker.firstName + " "+jobSeeker.lastName}</Link></Table.Cell>
            <Table.Cell>{jobSeeker.birthYear}</Table.Cell>
            <Table.Cell>{jobSeeker.email}</Table.Cell>
          </Table.Row>
          ))}
          
        </Table.Body>
      </Table>
    </div>
  );
}
