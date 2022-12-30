import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Grid,Box} from '@mui/material';
import LeftSlider from '../Components/SliderUtils/LeftSlider';
import RightSlider from '../Components/RightSliderUtils/RightSlider';


export default function App({ Component, pageProps }: AppProps) {
  return<>
  <Box sx={{ flexGrow: 1}}>
      <Grid container >
        <Grid item lg={3} sx={{position:'fixed', width:'300px',height:"100%"}}  display={{ md: "none", lg: "block" }} >
         <LeftSlider/>
        </Grid>
        <Grid item lg={2.3} display={{ md: "none", lg: "block" }}/>
        <Grid item  width={'70%'}>
        <Component {...pageProps}  />
        </Grid>
        <Grid item md={1} sx={{position:'fixed',top:'0',right:'0',width:'150px',height:'100%'}}>
        <RightSlider/>
        </Grid>
      </Grid>
    </Box>
    </>
}
