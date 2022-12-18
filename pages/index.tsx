import React from 'react'
import {Grid,Box, Typography, styled} from '@mui/material';
import MainBanner from '../Components/Home/MainBanner'

const index = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
         <MainBanner/>
        </Grid>
    </Box>
    </>
  )
}

export default index