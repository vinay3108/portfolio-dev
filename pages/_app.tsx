import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Grid,Box} from '@mui/material';
import LeftSlider from '../Components/LeftSliderUtils/LeftSlider';
import RightSlider from '../Components/RightSliderUtils/RightSlider';


export default function App({ Component, pageProps }: AppProps) {  
  return<>
  <Box sx={{ flexGrow: 1}}>
      <Grid container sx={{display:'flex',justifyContent:'space-between'}} >
        <Grid item lg={2.5} md={0} xs={0} sx={{position:'sticky',top:'0',left:'0',height:'100%'}}  display={{ xs:"none" ,md: "none", lg: "block" }} >
         <LeftSlider/>
        </Grid>
        <Grid item  lg={8} xs={11} md={11}>
        <Component {...pageProps}  />
        </Grid>
        <Grid item lg={1} md={0} xs={0} sx={{position:'sticky',top:'0',right:'0',height:'100%'}}  display={{ xs:"none" ,md: "none", lg: "block" }}>
        <RightSlider/>
        </Grid>
      </Grid>
    </Box>
    </>
}
