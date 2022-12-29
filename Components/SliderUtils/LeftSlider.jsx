import React from 'react'
import { Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import CardSection from './CardSection'
import DetailSection from './DetailSection'
import SkillSection from './SkillSection'
import SliderFooter from './SliderFooter'


const LeftSlider = () => {
  return (
    <Item>
      <CardSection/>
      <Box sx={{backgroundColor:'#191d2b',height:'60%'}}>
      <DetailSection/>
      <SkillSection/>
      </Box>
      <SliderFooter/>
    </Item>
   )
}

export default LeftSlider
const Item=styled(Paper)(({theme})=>({
  textAlign:'center',
  height:'100%',
  backgroundColor:'#2C2C39'
}))