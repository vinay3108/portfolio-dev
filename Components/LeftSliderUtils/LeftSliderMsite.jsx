import React,{useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, styled } from '@mui/material';
import LeftSlider from './LeftSlider';
const LeftSliderMsite = () => {
const[option,setOptions]=useState(true);
const handleToggle=()=>{
    setOptions(prev=>!prev);
}
  return (
    <LeftSliderMsiteStyled>
        {
            option?
            <Box className='icon-wrapper'>
            <MoreVertIcon onClick={handleToggle}/>
            </Box>
            :
            <Box className='container-wrapper' onClick={handleToggle}>
                <LeftSlider/>
            </Box>
        }
    </LeftSliderMsiteStyled>
  )
}

export default LeftSliderMsite
const LeftSliderMsiteStyled=styled(Box)(()=>({
    height:'100vh',
    zIndex:'100',
    svg:{
        position:'absolute',
        top:'1%',
        color:'#fff',
        fontSize:'2rem'
    },
    '.icon-wrapper':{
        width:'50px',
        height:'50px',
        padding:'10px',
        backgroundColor:'#6e6e79',
    },
    '.container-wrapper':{
        width:'300px',
    },
    '@media screen and (max-width:400px)':{
        '.container-wrapper':{
            width:'250px',
        },
    }
}))