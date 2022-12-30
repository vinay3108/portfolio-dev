import React from 'react'
import { Paper } from '@mui/material'
import {styled} from '@mui/material'

const CardSection = () => {
  return (
    <CardItem elevation={0}>
        <div className='image-container'>
            <img src="favicon.ico" alt="image" />
            <h3>Vinay Kumar</h3>
            <p>Full Stack Developer</p>
        </div>
    </CardItem>
  )
}

export default CardSection
const CardItem=styled(Paper)(()=>({
    backgroundColor:'#2C2C39',
    // paddingTop:'20px',
    // height:'30vh',
    marginBottom:'15px',
    '.image-container':{
        img:{
            width:'90px',
            paddingBottom:'10px',
            '&:hover':{
                cursor:'pointer'
            }
        },
        h3:{
            color:'#fff',
            paddingBottom:'10px',
        },
        p:{
            color:'#FFF',
            opacity:"0.5",
        }

    }
}))