import { Box, styled } from '@mui/system'
import React from 'react'


const ProjectCardItem = () => {
    const handleClick=()=>{
    }
  return (
    <ProjectCardItemStyled onClick={handleClick}>
       <div className='project-data'>
         hello
       </div>
    </ProjectCardItemStyled>
  )
}

export default ProjectCardItem
const ProjectCardItemStyled=styled(Box)(()=>({
    position:'relative',
    border:'1px solid red',
    width:'250px',
    height:'250px',
    margin:'2rem 0.5rem',
    transition:'all 1s ease-in',
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
        transition:'all 1s ease-in',

    },
    '.project-data':{
        display:'none',
        transition:'all 1s ease-in',
    }
    ,
    '&:hover':{
        '.project-data':{
            display:'block',
            transition:'all 1s ease-in',
        }
       
    }
}))