import React from 'react'
import {Grid,Box, Typography, styled} from '@mui/material';
import LeftSlider from '../Components/SliderUtils/LeftSlider';

const index = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
         <LeftSlider/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default index