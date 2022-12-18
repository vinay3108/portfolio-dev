import { Box, styled } from '@mui/system'
import React from 'react'
import ProgressBar from './ProgressBar';
import DownloadIcon from '@mui/icons-material/Download';

const skillData=[
    {
        id:'1',
        name:'React.js',
        percentage:'90%',
        value:10
    },
    {
        id:'2',
        name:'Node.js',
        percentage:'80%'
    },
    {
        id:'3',
        name:'CPP',
        percentage:'90%'
    },
    {
        id:'4',
        name:'Next.js',
        percentage:'60%'
    },
    {
        id:'5',
        name:'CSS',
        percentage:'90%'
    },
]
const  DownloadCV=()=>{
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
const SkillSection = () => {
  return (
    <SkillItem>
        {
            skillData.map((item)=>(
             <ProgressBar key={item.id} name={item.name} percentage={item.percentage}/>
            ))
        }
    <DownloadCV/>
    </SkillItem>
  )
}

export default SkillSection
const SkillItem=styled(Box)(()=>({
    color:'yellow',
}))

const DownloadCVItem=styled(Box)(()=>({
    display:'flex',
    alignItems:'center',
    marginTop:'5px',
    padding:'5px 10px',
    color:'#fff',
    h3:{
        marginRight:'50px',
    },
    '&:hover':{
        cursor:'pointer'
    },
    svg:{
        paddingTop:'5px'
    }
}))