import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Grid,Box, Typography, styled} from '@mui/material';
import LeftSlider from '../Components/SliderUtils/LeftSlider';
import RightSlider from '../Components/RightSliderUtils/RightSlider';


export default function App({ Component, pageProps }: AppProps) {
  return<>
  <Box sx={{ flexGrow: 1}}>
      <Grid container >
        <Grid item xs={3} sx={{position:'fixed', width:'300px'}}>
         <LeftSlider/>
        </Grid>
        <Grid item xs={2.3}/>
        <Grid item xs={8.5}>
        <Component {...pageProps}  />
        </Grid>
        <Grid item xs={1} sx={{position:'fixed',top:'0',right:'0',width:'150px'}}>
        <RightSlider/>
        </Grid>
      </Grid>
    </Box>
    </>
}
