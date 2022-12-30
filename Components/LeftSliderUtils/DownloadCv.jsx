import React from 'react'
import { Box, styled } from '@mui/system'
import DownloadIcon from '@mui/icons-material/Download';

const DownloadCv = () => {
    const cvDownloadHandler=()=>{
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
       }
  return (
    <DownloadCVItem  onClick={cvDownloadHandler}>
    <h3>DOWNLOAD CV</h3>
    <DownloadIcon/> 
</DownloadCVItem>
  )
}

export default DownloadCv
const DownloadCVItem=styled(Box)(()=>({
    display:'flex',
    alignItems:'center',
    fontSize:'1.3rem',
    color:'#fff',
    padding:'5px 10px',
    h3:{
        marginRight:'3rem',
    },
    '&:hover':{
        cursor:'pointer'
    },
    svg:{
        paddingTop:'0.4rem',
        fontSize:'2.4rem'
    }
}))