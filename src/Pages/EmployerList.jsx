import React,{useState,useEffect} from "react";
import {Table } from "semantic-ui-react";
import EmployerService from "../Services/EmployerService";
import { Link } from "react-router-dom";
export default function EmployerList() {

  const [employers, setEmployers] = useState([])

  useEffect(()=>{
    let employerService = new EmployerService()

    employerService.getEmployers().then(result=>setEmployers(result.data.data))
  },[]) 
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Telefon</Table.HeaderCell>
            <Table.HeaderCell>Web Site</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map(employer=>(
            <Table.Row key={employer.id}>
            <Table.Cell><Link to={`/employers/${employer.id}`}>{employer.companyName}</Link> </Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
            <Table.Cell>{employer.webSite}</Table.Cell>
          </Table.Row>
          ))}
          
        </Table.Body>
      </Table>
    </div>
  );
}
