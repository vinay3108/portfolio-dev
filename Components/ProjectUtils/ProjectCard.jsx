import React from 'react'
import ProjectCardItem from './ProjectCardItem'
import { Grid,Box,styled } from '@mui/material'
const p1='/images/headerpic2.png'

const ProjectCard = () => {
  return (
    <ProjectCardStyled>
        <Grid container  lg={12} >
            <Grid item lg={4} xs={12} sm={6} className='wrapper'>
                <ProjectCardItem image={p1}/>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} className='wrapper'>
                <ProjectCardItem image={p1}/>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} className='wrapper'>
                <ProjectCardItem image={p1}/>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} className='wrapper'>
                <ProjectCardItem image={p1}/>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} className='wrapper'>
                <ProjectCardItem image={p1}/>
            </Grid>
        </Grid>
    </ProjectCardStyled>
  )
}

export default ProjectCard

const ProjectCardStyled=styled(Box)(()=>({
    display:'flex',
    '.wrapper':{
        '@media all and (max-width: 678px)': {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }
    }
}))