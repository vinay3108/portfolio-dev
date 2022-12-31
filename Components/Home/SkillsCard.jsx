import { Button } from '@mui/material'
import { Box, styled } from '@mui/system'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react'

const SkillsCard = () => {
  return (
    <SkillsCardItem >
        <h2>Web Development</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, possimus nesciunt voluptatum minima sit cum face</p>
        <Button>Contact Me <NavigateNextIcon/></Button>
    </SkillsCardItem>
  )
}

export default SkillsCard
const SkillsCardItem=styled(Box)(()=>({
    width:'30%',
    margin:'0.5rem',
    backgroundColor:'#2C2C39',
    padding:'1rem',
    transition:'all 1s ease-in',
    h2:{
        color:'#fff',
        margin:'1rem 0'
    },
    p:{
        color:'#c2bbbb7a'
    },
    Button:{
        transition:'all 1s ease-in',
        color:'yellow',
        marginTop:'0.5rem',
        fontSize:'0.9rem',
        '&:hover':{
            svg:{
                transform:'translateX(4px)'
            }
        }
    },
    '@media screen and (max-width:864px)':{
       width:'45%'
    },
    '@media screen and (max-width:692px)':{
       width:'90%',
       textAlign:'center'
    }
        
}))