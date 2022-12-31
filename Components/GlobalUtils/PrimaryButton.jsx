import React from 'react'
import { Button, styled } from '@mui/material'
import { Box, display } from '@mui/system'
const PrimaryButton = ({value}) => {
  return (
    <PrimaryButtonStyled>
    <Button variant='contained'>{value}</Button>
    </PrimaryButtonStyled>
  )
}

export default PrimaryButton

const PrimaryButtonStyled=styled(Box)(()=>({
    Button:{
      backgroundColor:'#24242F',
      margin:'1rem 2rem',
    },
    '@media all and (max-width: 740px)': {
      Button:{
        margin:'1rem',
      },
    },
    '@media all and (max-width: 548px)': {
      Button:{
        margin:'1rem 0.5rem',
      },
    }
}))