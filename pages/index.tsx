import React from 'react'
import {Grid,Box, Typography, styled} from '@mui/material';
import LeftSlider from '../Components/SliderUtils/LeftSlider';
import RightSlider from '../Components/RightSliderUtils/RightSlider';
import MainBanner from '../Components/Home/MainBanner'

const index = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{border:'1px solid red'}}>
        <Grid item xs={2.5}>
         <LeftSlider/>
        </Grid>
        
        <Grid item xs={8.5}>
         <MainBanner/>
        </Grid>

        <Grid item xs={1}>
        <RightSlider/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default index