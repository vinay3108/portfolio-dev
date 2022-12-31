import React from 'react'
import { styled,Box, Button } from '@mui/material'
import ProjectCardItem from '../ProjectUtils/ProjectCardItem'
import {Beenhere,NavigateNext,PrecisionManufacturing} from '@mui/icons-material';
import Link from 'next/link'


const image1='/images/headerpic2.png'
const ProjectContainer = () => {
  return (
    <ProjectContainerItem>
        <Box className='project-heading' >
        <span><PrecisionManufacturing/>Projects</span>
        </Box>
        <Box className='project-card-wrapper'>
        <ProjectCardItem image={image1} widthh={'300px'} heightt={'250px'}/>
        <ProjectCardItem image={image1} widthh={'300px'} heightt={'250px'}/>
        <ProjectCardItem image={image1} widthh={'300px'} heightt={'250px'}/>
        </Box>
        <Link href={'/projects'}>
        <Button className='explore-btn'>Explore More <NavigateNext/></Button>
        </Link>
    </ProjectContainerItem>
  )
}

export default ProjectContainer
const ProjectContainerItem=styled(Box)(()=>({
    '.project-heading':{
        marginTop:'2rem',
        display:'flex',
        alignItems:'center',
        fontSize:'2.5rem',
        fontWeight:'500',
        color:'#fff',
        transformOrigin: 'center',
        transition:'all 0.3s ease-in-out',
        svg:{
            marginRight:'1rem',
            height:'2rem',
            width:'2rem',
        },
        '&:hover':{
            cursor:'pointer',
        }

    },
    '.project-card-wrapper':{
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap',
        div:{
            '&:hover':{
                transform:'scale(1.05)'
            }
        }
    },
    '.explore-btn':{
        color:'yellow',
        fontSize:'1.5rem',
        position:'relative',
        transition:'all 4s ease-in',
        svg:{
            fontSize:'2.5rem'
        },
        '&::before': {
            content: '""',
            position:'absolute',
            height:'0%',
            width:'100%',
            objectFit: 'cover',
            backgroundColor:'#fff',
            bottom:'0%',
            left:'0',
            zIndex:'0',
          },
          '&:hover::before':{
            height:'3%'
          },
          '&:hover':{
            svg:{
                transform:`translateX(2px)`
            }
          }
    }

}))