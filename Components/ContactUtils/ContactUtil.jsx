import { Grid, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'
import {Phone} from '@mui/icons-material';

const ContactUtil = () => {
  return (
    <ContactUtilStyled>
        <Grid container sx={{display:'flex'}} spacing={4}>
            <Grid item xs={5}>
                <ContactForm/>
            </Grid>
            <Grid item xs={5}>
                <ContactCard name={"Phone"} icon={<Phone/>}  value={"9891428199"}/>
                <ContactCard name={"Email"} icon={<Phone/>}  value={"9891428199"}/>
                <ContactCard name={"LinkedIn"} icon={<Phone/>}  value={"9891428199"}/>
                <ContactCard name={"GitHub"} icon={<Phone/>}  value={"9891428199"}/>
            </Grid>
        </Grid>
    </ContactUtilStyled>
  )
}

export default ContactUtil

const ContactUtilStyled=styled(Box)(()=>({

}))