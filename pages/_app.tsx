import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Grid,Box} from '@mui/material';
import LeftSlider from '../Components/LeftSliderUtils/LeftSlider';
import LeftSliderMsite from '../Components/LeftSliderUtils/LeftSliderMsite';
import RightSlider from '../Components/RightSliderUtils/RightSlider';
import RightSliderMsite from '../Components/RightSliderUtils/RightSliderMsite';


export default function App({ Component, pageProps }: AppProps) {  
  return<>
  <Box sx={{ flexGrow: 1,position:'relative'}}>
      <Grid container sx={{display:'flex',justifyContent:'space-between'}} >
        <Grid item lg={2.5} md={0} xs={0} sx={{position:'sticky',top:'0',left:'0',height:'100%'}}  display={{ xs:"none" ,md: "none", lg: "block" }} >
         <LeftSlider/>
        </Grid>
        <Grid item lg={0} xs={12} sx={{position:'fixed',top:'0',left:'0',height:'100%',width:'100%',zIndex:'999'}}  display={{ xs:"block", lg: "none" }} >
         <LeftSliderMsite/>
        </Grid>
        <Grid item  lg={8} xs={11.5} md={11.5}>
        <Component {...pageProps}  />
        </Grid>
        <Grid item lg={1} md={0} xs={0} sx={{position:'sticky',top:'0',right:'0',height:'100%'}}  display={{ xs:"none" ,md: "none", lg: "block" }}>
        <RightSlider/>
        </Grid>
        <Grid item lg={0} xs={12} sx={{position:'fixed',top:'0',right:'0%',height:'100%',zIndex:'999'}}  display={{ xs:"block", lg: "none" }} >
        <RightSliderMsite/>
        </Grid>
      </Grid>
    </Box>
    </>
}
