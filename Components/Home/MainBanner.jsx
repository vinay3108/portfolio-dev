import React from 'react'
import { styled } from '@mui/material/styles'
import {Grid,Box} from '@mui/material';
import { useTypewriter } from 'react-simple-typewriter';
const MainBanner = () => {
  return (
    <MainBannerItem>
    <ImageContainer/>
    </MainBannerItem>
  )
}

export default MainBanner

const ImageContainer=()=>{
    const { text } = useTypewriter({
        words: ["Web Apps", "Web Interface", "Web Page"],
        loop: 0,
      });
    return(
        <ImageContainerItem>
           <Grid item xs={7} className="heading">
                <h2>Discover My Amazingg Space</h2>
                <p>
                    &lt;
                    <span>code</span>&gt; i build
                    <span> {text} </span>
                    &lt;/
                    <span>code</span>&gt;
                </p>
           </Grid>
        </ImageContainerItem>
    )
}
const MainBannerItem=styled(Box)(()=>({

}))

const ImageContainerItem=styled(Box)(()=>({
    height:'49%',
    position:'relative',
    '.heading':{
        padding:'20px 0 0 20px',
        h2:{
            
            fontSize:'3rem'
        }
    },
    '&::before': {
        content: '""',
        position:'absolute',
        height:'100%',
        width:'100%',
        objectFit: 'cover',
        background:`linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('/images/headerpic6.png')`,
        top:'5%',
        left:'0',
        zIndex:'-1'

      }
}))