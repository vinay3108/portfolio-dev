import React from 'react'
import { LinearProgress } from '@mui/material'
import { Box, styled } from '@mui/system'

const ProgressBar = (props) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 90) {
            return 0;
          }
          const diff = Math.random() * 5;
          return Math.min(oldProgress + diff, 90);
        });
      }, 105);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  return (
    <>
    <ProgressBarItem>
        <h5>{props.name}</h5>
        <p>{props.percentage}</p>
    </ProgressBarItem>
    <LinearProgress color='inherit' sx={{borderRadius:'3px',backgroundColor:'#2C2C39'}} variant="determinate" value={progress} />
</>
  )
}

export default ProgressBar
const ProgressBarItem=styled(Box)(()=>({
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  color:'#fff',
  padding:'1rem 0 0.5rem 0',
  '&:hover':{
      cursor:'pointer'
  },
 h5:{
  fontSize:'1.2rem',
  
 },
 p:{
  fontSize:'0.88rem',
  opacity:'0.5',
 }
}))
