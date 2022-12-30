import React from 'react'
import ProjectCardItem from './ProjectCardItem'
import { Grid } from '@mui/material'
const p1='/images/headerpic2.png'

const ProjectCard = () => {
  return (
    <div style={{display:'flex',}}>
        <Grid container>
            <Grid item lg={4} xs={6}>
                <ProjectCardItem image={p1}/>
            </Grid>
            <Grid item lg={4} xs={6}>
                <ProjectCardItem image={p1}/>
            </Grid>
            <Grid item lg={4} xs={6}>
                <ProjectCardItem image={p1}/>
            </Grid>
            <Grid item lg={4} xs={6}>
                <ProjectCardItem image={p1}/>
            </Grid>
            <Grid item lg={4} xs={6}>
                <ProjectCardItem image={p1}/>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProjectCard