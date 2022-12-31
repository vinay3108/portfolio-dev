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
    alignItems:'center',
    backgroundColor:'#2C2C39',
    margin:'0rem 1rem 1rem 1rem',
    padding:'1rem',
    color:'#fff',
    '&:hover':{
        cursor:'pointer',
    },
   '.icon-data':{
    marginRight:'20px',
    span:{
        display:'flex',
        alignItem:'center',
        justifyContent:'center',
        height:'50px',
        width:'50px',
        svg:{
            margin:'5px auto',
            width:'40px',
            height:'40px',
            border:'1px solid rgba(255,255,0,0.3)',
            borderRadius:'4px',
            
        }
    },
} 
}))