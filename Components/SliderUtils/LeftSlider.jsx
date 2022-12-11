import React from 'react'
import { Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import CardSection from './CardSection'
import DetailSection from './DetailSection'
import SkillSection from './SkillSection'
import SliderFooter from './SliderFooter'
const Item=styled(Paper)(({theme})=>({
    // backgroundColor:theme.palette.mode==='dark'? '#1A2027':'#fff',
    textAlign:'center',
    height:'100vh',
    // border:'1px solid red',
    backgroundColor:'#2C2C39'
}))

const LeftSlider = () => {
  return (
    <Item>
      <CardSection/>
      <Box sx={{backgroundColor:'#191d2b'}}>
      <DetailSection/>
      <SkillSection/>
      </Box>
      <SliderFooter/>
    </Item>
   )
}

export default LeftSlider