import { Box, styled } from '@mui/system'
import { Button, TextField } from '@mui/material'
import React from 'react'

const ContactForm = () => {
  return (
    <ContactFormStyled>
        <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" fullWidth autoFocus={true} size="small" sx={{marginBottom:'40px'}} />
        <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" fullWidth autoFocus={true} size="small" sx={{marginBottom:'40px'}}/>
        <TextField id="outlined-basic" label="Enter Your Subject" variant="outlined" fullWidth autoFocus={true} size="small" sx={{marginBottom:'40px'}}/>
        <TextField id="outlined-basic" label="Enter Message" variant="outlined" fullWidth autoFocus={true} size="small" multiline={true} sx={{marginBottom:'40px'}} />
        <Button variant='contained' fullWidth >SEND</Button>

    </ContactFormStyled>
  )
}

export default ContactForm
const ContactFormStyled=styled(Box)(()=>({
   
}))