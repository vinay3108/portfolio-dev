import React,{useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, styled } from '@mui/material';
import RightSlider from './RightSlider';
import {rightSliderData} from './rightSliderData'
import Link from 'next/link';
import { Menu ,Close} from '@mui/icons-material';


const RightSliderMsite = () => {
const[option,setOptions]=useState(true);
const handleToggle=()=>{
    setOptions(prev=>!prev);
}
  return (
    <RightSliderMsiteStyled>
          {
            option?
            <Box className='icon-wrapper'>
            <Menu onClick={handleToggle}/>
            </Box>
            :
            <Box className='container-wrapper'>
                <RightSliderOpen handleToggle={handleToggle}/>
            </Box>
        }
    </RightSliderMsiteStyled>
  )
}

export default RightSliderMsite


const RightSliderOpen=(props)=>{
   
    return(
        <RightSliderOpenItem>
        <Box className="icon-container">
            <Close onClick={props.handleToggle}/>
        </Box>
        <ul>
        {
            rightSliderData.map((item)=>(
                <li key={item.id}>
                    <div className='p-wrapper'>
                        <Link href={item.path}>
                        <p ><span>{item.icon}</span>{item.name}</p>
                        </Link>
                    </div>
                </li>
            ))
        }
        </ul>
        </RightSliderOpenItem>
    )
}
const RightSliderOpenItem=styled(Box)(()=>({
    transition:'all 1s linear',
    '.icon-container':{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'60px',
        marginBottom:'1rem',
        backgroundColor:'#6e6e79',
        svg:{
            fontSize:'2rem',
            fontWeight:500,
            transition:"all 0.4s ease-in",
            '&:hover':{
                cursor:'pointer',
                transform:'scale(1.2)',
            }
        }
    },
    ul:{
        listStyle:'none',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        transition:'all 0.5s ease',
        
        li:{
            margin:'10px 0',
            width:'90%',
            color:'#fff',
            p:{
                display:'flex',
                alignItems:'center',
                fontSize:'1.2rem',
               svg:{
                fontSize:'1.8rem',
                marginRight:'8px'
               }
            },
            '&:hover':{
                cursor:'pointer',
                transform:'scale(1.1)',
                transition: 'all 0.3s ease-out',
                color:'yellow'
            }
        }
    }
}))

const RightSliderMsiteStyled=styled(Box)(()=>({
    height:'100vh',
    zIndex:'100',
    transition:'all 0.5s ease-in-out',
    svg:{
        
        position:'relative',
        // top:'1%',
        // color:'#fff',
        fontSize:'2rem'
    },
    '.icon-wrapper':{
        width:'50px',
        height:'50px',
        padding:'10px',
        backgroundColor:'#6e6e79',
        transition:'all 0.5s ease-in-out',
    },
    '.container-wrapper':{
        width:'150px',
        transition:'all 0.5s ease-in-out',
    },
    '@media screen and (max-width:400px)':{
        '.container-wrapper':{
            width:'250px',
        },
    }
}))