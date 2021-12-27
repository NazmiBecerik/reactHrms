import React, { useState, useEffect } from "react";
import { Table, TableHeaderCell } from "semantic-ui-react";
import JobExperienceService from "../Services/JobExperienceService";
export default function JobExperienceList() {
  const [jobExperiences, setJobExperiences] = useState([]);

  useEffect(() => {
    let jobExperienceService = new JobExperienceService();

    jobExperienceService
      .getJobExperiences()
      .then((result) => setJobExperiences(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Deneyim</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Yılı</Table.HeaderCell>
            <Table.HeaderCell>Meslek Adı</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Yılı</Table.HeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobExperiences.map((jobExperience) => (
            <Table.Row key={jobExperience.id}>
              <Table.Cell>{jobExperience.name}</Table.Cell>
              <Table.Cell>{jobExperience.beginningDate}</Table.Cell>
              <Table.Cell>{jobExperience.jobTitle.name}</Table.Cell>
              <Table.Cell>{jobExperience.endingDate}</Table.Cell>
              <Table.Cell>{jobExperience.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
