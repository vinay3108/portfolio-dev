import { Box, styled } from '@mui/system'
import React from 'react'
import Image from 'next/image'
import { Grid } from '@mui/material'

const ProjectCardItem = () => {
  return (
    <ProjectCardItemStyled>
       <div className='project-data'>
         hello
       </div>
    </ProjectCardItemStyled>
  )
}

export default ProjectCardItem
const ProjectCardItemStyled=styled(Box)(()=>({
    position:'relative',
    width:'250px',
    height:'250px',
    margin:'2rem 0.5rem',
    '&::before':{
        content:'""',
        position:'absolute',
        top:'0',
        left:'0',
        height:'100%',
        width:"100%",
        backgroundColor:'red',
        opacity:'0.3',
        zIndex:'-1',

    },
    '.project-data':{
        display:'none',
        transition:'all 0.4s ease-in',
        
    }
    ,
    '&:hover':{
        '.project-data':{
            display:'block',
            transform:'scale(1.1)'
        }
       
    }
}))