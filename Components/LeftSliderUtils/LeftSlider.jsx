import React from 'react'
import { Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import CardSection from './CardSection'
import DetailSection from './DetailSection'
import SkillSection from './SkillSection'
import SliderFooter from './SliderFooter'
import DowloadCv from './DownloadCv'

const LeftSlider = () => {
  return (
    <Item>
      <CardSection/>
      <Box sx={{backgroundColor:'#191d2b', height:'60vh',display:'flex',flexDirection:'column',justifyContent:'space-evenly',}}>
      <DetailSection/>
      <SkillSection/>
      <DowloadCv/>
      </Box>
      <SliderFooter/>
    </Item>
   )
}

export default LeftSlider
const Item=styled(Paper)(({theme})=>({
  textAlign:'center',
  position:'relative',
  height:'100vh',
  display:'flex',
  width:'100%',
  flexDirection:'column',
  justifyContent:'space-between',
  backgroundColor:'#191d2b',
  svg:{
    position:'relative',
  }
}))