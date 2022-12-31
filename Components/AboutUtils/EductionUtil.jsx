import { styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const EducationUtil = ({year,title,subTitle,text}) => {
    return (
        <EducationUtilStyled>
            <div className="left-content">
                <p>{ year }</p>
            </div>
            <div className="right-content">
                <h5>{title }</h5>
                <h6>{ subTitle }</h6>
                <p>{ text }</p>
            </div>
        </EducationUtilStyled>
    )
}
const EducationUtilStyled = styled(Box)(()=>({

  display: 'flex',
  '&:not(:last-child)': {
    paddingBottom: '3rem',
  },
  '.left-content': {
    width: '20%',
    paddingLeft: '20px',
    /* border: 1px solid red, */
    color:'#fff',
    position: 'relative',
    '&::before ':{
      content: '""',
      position: 'absolute',
      left: '-31px',
      top: '5px',
      height: '17px',
      width: '17px',
      borderRadius: '50%',
      border: '2px solid rgba(0,0,0,0.3)',
      backgroundColor: 'yellow',
    },
    p: {
      display: 'inlineBlock',
      '@media all and (max-width: 950px)': {
        fontSize: '1rem',
      },
      '@media all and (max-width: 820px)': {
        fontSize: '0.8rem',
      },
      '@media all and (max-width: 715px)': {
        fontSize: '0.7rem',
      }
    }
  },
  '.right-content': {
    paddingLeft: '5rem',
    width: '80%',
    /* border: 1px solid red, */
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '20px',
      width: '4rem',
      height: '2px',
      backgroundColor: '#6e6e79',
      '@media all and (max-width: 950px)': {
        width: '2rem',
        left: '1rem',
      }
    },
    h5 :{
      color: '#fff',
      fontSize: '2rem',
      paddingBottom: '0.4rem',
    },
    h6: {
      paddingBottom: '0.6rem',
      fontSize: '1.8rem',
      color:'#6e6e79'
    },
    p:{
      color:'yellow'
    }
  },
  '@media all and (max-width: 1150px)': {
    '.right-content': {
      h5 :{
        fontSize: '1.5rem',
      },
      h6: {
        fontSize: '1.2rem',
      }
    }
  },
  '@media all and (max-width: 950px)': {
    '.right-content': {
      h5 :{
        fontSize: '1.2rem',
      },
      h6 :{
        fontSize: '1rem',
      },
      p: {
        fontSize: '0.8rem',
      }
    }
  },
  '@media all and (max-width: 715px)': {
    '.right-content': {
      h5 :{
        fontSize: '1rem',
      },
      h6 :{
        fontSize: '0.7rem',
      },
      p: {
        fontSize: '0.6rem',
      }
    }
  }
}))
export default EducationUtil
