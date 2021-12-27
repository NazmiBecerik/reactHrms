import React ,{useState,useEffect}from "react";
import {Table,Button} from 'semantic-ui-react'
import JobAdvertisementService from "../Services/JobAdvertisementService";

export default function JobAdvertisementList(){
        const [jobAdvertisements, setJobAdvertisements] = useState([])
      
        useEffect(()=>{
            let jobAdvertisementService = new JobAdvertisementService()
            jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
        })
   return(
    <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>İlan Sahibi</Table.HeaderCell>
        <Table.HeaderCell>İlan Açıklaması</Table.HeaderCell>
        <Table.HeaderCell>Aranan Pozisyon</Table.HeaderCell>
        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
        <Table.HeaderCell>Şehir</Table.HeaderCell>
        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
        <Table.HeaderCell>Maaş Skalası</Table.HeaderCell>
        <Table.HeaderCell>Aktif Mi?</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      {jobAdvertisements.map((jobAdvertisement)=>(
        <Table.Row>
        <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
        <Table.Cell>{jobAdvertisement.description}</Table.Cell>
        <Table.Cell>{jobAdvertisement.jobTitle.name}</Table.Cell>
        <Table.Cell>{jobAdvertisement.openPosition}</Table.Cell>
        <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
        <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
        <Table.Cell>Min:{jobAdvertisement.maxWage }<br/>Max:{jobAdvertisement.minWage }</Table.Cell>
        <Button color="green" className="activityButton">Aktif</Button>
        <Button color="red" className="activityButton">Aktif Değil</Button>

        
      </Table.Row>
      )
      )}
      
    </Table.Body>
  </Table>
   )
}