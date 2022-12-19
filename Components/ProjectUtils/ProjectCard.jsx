import React from 'react'
import ProjectCardItem from './ProjectCardItem'
import { Grid } from '@mui/material'
const ProjectCard = () => {
  return (
    <div style={{display:'flex' ,}}>
        <Grid container>
            <Grid item xs={4}>
                <ProjectCardItem/>
            </Grid>
            <Grid item xs={4}>
                <ProjectCardItem/>
            </Grid>
            <Grid item xs={4}>
                <ProjectCardItem/>
            </Grid>
            <Grid item xs={4}>
                <ProjectCardItem/>
            </Grid>
            <Grid item xs={4}>
                <ProjectCardItem/>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProjectCard