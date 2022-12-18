import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import Image from 'next/image'
const HeadingPart = () => {
    const myLoader = ({ src, width, quality }) => {
        return `/images/${src}?w=${width}&q=${quality || 75}`
      }
  return (
    <HeadingPartStyled>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'space-between'}}>
      {/* <Grid item xs={0.4}/> */}
      <Grid item xs={4} sx={{marginRight:'30px'}}>
      <Image style={{borderRadius:'8px'}}
      loader={myLoader}
      src="about.gif"
      alt="About png"
      width={350}
      height={300}
      />
      </Grid>
      <Grid item xs={6} sx={{marginRight:'60px'}}>
        <h2>I am <span>Vinay Kumar</span></h2>
        <h3>ASE @Droom |ReactJs |Nodejs | Nextjs | MERN Stack Developer </h3>
        <h4> I am Full stack developer work on ReactJs,NextJs for Frontend, Nodejs,PHP for backend</h4>
        <Grid container sx={{marginTop:'2rem'}}>
          <Grid item xs={2.5}>
          <p>Full Name</p>
          <p>Age</p>
          <p>Nationality</p>
          <p>Languages</p>
          <p>Service</p>
          </Grid>
          <Grid item xs={5}>
          <p>: Vinay Kumar</p>
          <p>: 22</p>
          <p>: India</p>
          <p>: English,Hindi</p>
          <p>: Software Devlopment</p>
          </Grid>

        </Grid>
      </Grid>
      </Grid>
    </HeadingPartStyled>
  )
}

export default HeadingPart

const HeadingPartStyled=styled(Box)(()=>({
    h2:{
        fontSize:'3rem',
        span:{
          color:'yellow'
        }
      },
      h3:{
        fontSize:'1.1rem'
      },
      h4:{
        marginTop:'5px',
        fontSize:'1rem',
        fontWeight:'400',
      },
      p:{
        fontSize:'0.9rem'
      }
}))