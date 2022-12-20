import { Box, styled } from '@mui/system'
import React from 'react'

const ContactCard = ({icon,name,value}) => {
  return (
    <ContactCardStyled>
        <div className='icon-data'>
        <span>{icon}</span>
        </div>
        <div className='contact-data'>
            <h4>{name}</h4>
            <p>{value}</p>
        </div>
    </ContactCardStyled>
  )
}

export default ContactCard
const ContactCardStyled=styled(Box)(()=>({
    display:'flex',
    backgroundColor:'#2C2C39',
    border:'1px solid #8C8C8E',
    marginBottom:'50px',
    '&:hover':{
        cursor:'pointer',
    },
   '.icon-data':{
    span:{

        display:'flex',
        alignItem:'center',
        justifyContent:'center',
        height:'50px',
        width:'50px'
    },
} 
}))