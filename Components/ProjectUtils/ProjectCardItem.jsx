import { Box, styled } from '@mui/system'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react'

const ProjectCardItem = (props) => {
    const handleClick=()=>{
      console.log("i am clicked");
    }
  return (
    <ProjectCardItemStyled onClick={handleClick} image={props.image} widthh={props.widthh}  heightt={props.heightt}>
       <div className='project-data'>
        <span id='readme'> Read More <NavigateNextIcon/></span>
        <div className='project-data-content'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iure quod repellendus fuga animi explicabo provident, deleniti maxime praesentium aliquam qui odit totam eum quisquam laborum dolorem, excepturi dolor, sapiente tempore similique doloribus adipisci.</p>
        </div>
       </div>
    </ProjectCardItemStyled>
  )
}

export default ProjectCardItem
const ProjectCardItemStyled=styled(Box)((props)=>({
    position:'relative',
    // border:'1px solid red',
    width:`${props.widthh?props.widthh:'300px'}`,
    height:`${props.heightt?props.heightt:'250px'}`,
    margin:'2rem 0.5rem',
    transition:'all 1s ease-in',
    '#readme':{
      display:'flex',
      alignItems:'center',
    },
    '&::before':{
        content:'""',
        position:'absolute',
        top:'0',
        left:'0',
        height:'100%',
        width:"100%",
        // backgroundColor:'red',
        // backgroundColor:`${props.image}`,
        backgroundImage:`url(${props.image})`,
        // backgroundImage:`url(${p11})`,
        opacity:'1',
        zIndex:'0',
        borderRadius:'8px',
        transition:'all 1s ease-in',

    },
    '.project-data':{
        display:'none',
        transition:'all 1s ease-in',
        position:'absolute',
        left:'5%',
        bottom:'5%'
    },
    '.project-data-content':{
      display:'none',
      transition:'all 2s ease-in',
      width:'100%',
      '&:hover':{
        display:'block',
      }
    }
    ,
    '&:hover::before':{
      opacity:'0.8',
      background:`linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(${props.image})`,
      zIndex:'-0',
    },
    '&:hover':{
      cursor:'pointer',
        '.project-data':{
            display:'block',
            // cursor:'pointer',
            '&:hover':{
              '.project-data-content':{
                display:'block',
                color:'green'
              },
              '#readme':{
                opacity:0
              }
            }
        }
       
    }
}))