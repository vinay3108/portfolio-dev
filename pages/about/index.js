import React from 'react'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import PrimaryHeading from '../../Components/GlobalUtils/PrimaryHeading'
import HeadingPart from '../../Components/AboutUtils/HeadingPart'
import Education from '../../Components/AboutUtils/Education'

const index = () => {

  return (
    <AboutStyleItem>
      <PrimaryHeading name="About Me"/>
      <HeadingPart/>
      <Education/>
    </AboutStyleItem>
  )
}

export default index

const AboutStyleItem=styled(Box)(()=>({
 
}))