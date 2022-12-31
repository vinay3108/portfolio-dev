import React from 'react'
import { styled } from '@mui/material/styles'
import {Grid,Box} from '@mui/material';
import ImageContainer from './ImageContainer';
import ProjectContainer from './ProjectContainer'
const MainBanner = () => {
  return (
    <MainBannerItem>
    <ImageContainer/>
    <ProjectContainer/>
    </MainBannerItem>
  )
}

export default MainBanner

const MainBannerItem=styled(Box)(()=>({

}))

