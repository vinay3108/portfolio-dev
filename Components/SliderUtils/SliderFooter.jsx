import { Box, styled } from '@mui/system'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
const SliderFooter = () => {
  return (
    <SliderFooterItem>
      <LinkedInIcon/>
      <GitHubIcon/>
      <TwitterIcon/>
    </SliderFooterItem>
  )
}

export default SliderFooter
const SliderFooterItem=styled(Box)(()=>({
  display:'flex',
  backgroundColor:'#2C2C39',
  justifyContent:'space-between',
  alignItems:'center',
  padding:'0px 10px',
  marginTop:'20px',
  svg:{
    color:'yellow'
  },
  '&:hover':{
    cursor:'pointer'
  }
}))