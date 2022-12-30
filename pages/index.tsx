import React from 'react'
import {Grid,Box, Typography, styled} from '@mui/material';
import MainBanner from '../Components/Home/MainBanner'

const index = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Grid item lg={12} md={8} xs={12} style={{margin:'0 auto'}}>
         <MainBanner/>
        </Grid>
    </Box>
    </>
  )
}

export default index