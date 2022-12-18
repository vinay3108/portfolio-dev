import React from 'react'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'

const PrimaryHeading = ({name}) => {
  return (
    <PrimaryHeadingItem>
      <h2>{name}<span></span></h2>  
    </PrimaryHeadingItem>
  )
}

export default PrimaryHeading

const PrimaryHeadingItem=styled(Box)(()=>({
    h2:{
        fontSize:'4rem',
        color:'#fff',
        position:'relative',
        marginBottom:'4rem',
        width:'100%',
        '&::before':{
          content:'""',
          position:'absolute',
          bottom:"0",
          width:'11.4rem',
          height: '0.33rem',
          backgroundColor:'#dbe2c17f',
          borderRadius:'15px',
          left:'0'
        },
        '&::after':{
          content:'""',
          position:'absolute',
          bottom:"0",
          width:'7.3rem',
          height: '0.33rem',
          backgroundColor:'yellow',
          borderRadius:'15px',
          left:'0'
        },
    },
    
}))