import React from 'react'
import EmployerList from '../Pages/EmployerList'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { GridColumn } from 'semantic-ui-react'
import JobSeekerList from '../Pages/JobSeekerList'
import CvList from '../Pages/CvList'
import Welcome from '../Pages/Welcome'
import JobSeekerDetail from '../Pages/JobSeekerDetail'
import EmployerDetail from "../Pages/EmployerDetail"
import CvDetail from '../Pages/CvDetail'
import JobAdvertisementList from '../Pages/JobAdvertisementList'
import JobExperienceDetail from '../Pages/JobExperienceDetail'
import JobExperienceList from '../Pages/JobExperienceList'

export default function Dashboard() {
    return (
        <div>
        <Grid>
          <Grid.Row>
            <GridColumn width={16}>
              <Routes>
              <Route exact path='/'element={<Welcome/>}/>
              <Route exact path='/employers'element={<EmployerList/>}/>
              <Route exact path='/jobAdvertisements'element={<JobAdvertisementList/>}/>
              <Route exact path='/jobSeekers'element={<JobSeekerList/>}/>
              <Route exact path='/jobSeekers/:id'element={<JobSeekerDetail/>}/>
              <Route exact path='/employers/:id'element={<EmployerDetail/>}/>
              <Route exact path='/cvs/:id'element={<CvDetail/>}/>
              <Route exact path='/cvs'element={<CvList/>}/>
              <Route exact path='/jobExperiences'element={<JobExperienceList/>}/>
              <Route exact path='/jobExperiences/:id'element={<JobExperienceDetail/>}/>
              </Routes>
            </GridColumn>
          </Grid.Row>
        </Grid>
        </div>
    )
}
