import React from 'react'
import { styled } from '@mui/material/styles'
import {Grid,Box} from '@mui/material';
import { useTypewriter } from 'react-simple-typewriter';
const ImageContainer = () => {
    const [ text ] = useTypewriter({
        words: ["Web Apps", "Web Interface", "Web Page"],
        loop: 0,
      });
    return(
        <ImageContainerItem>
           <Grid item lg={7} md={11} xs={12} className="heading">
                <h2>Discover My Amazing Space</h2>
                <p>
                    &lt;
                    <span>code</span>&gt;
                     i build
                    <span className='var-text'> {text} </span>
                    &lt;/
                    <span>code</span>&gt;
                </p>
           </Grid>
        </ImageContainerItem>
    )
}

export default ImageContainer

const ImageContainerItem=styled(Box)(()=>({
    height:'50vh',
    position:'relative',

    '.heading':{
        position:'absolute',
        top:'30%',
        padding:'20px 0 0 20px',
        display:'flex',

        flexDirection:'column',
        justifyContent:'center',
        // width:'50%',
        color:'#fff',
        h2:{
            
            fontSize:'3rem'
        },
        p:{
          marginTop:'2.5rem',
          fontSize:'1.4rem',
          '.var-text':{
              color:'rgba(255,2550,0.8)'
            }
        }
    },
    '&::before': {
        content: '""',
        position:'absolute',
        height:'100%',
        width:'100%',
        objectFit: 'cover',
        background:`linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('/images/headerpic6.png')`,
        top:'0%',
        left:'0',
        zIndex:'0'

      },
      '@media screen and (max-width:400px)':{
        '.heading':{
          top:'15%',
          padding:'20px',
          p:{
            fontSize:'1.2rem'
          }
        }
    }
}))