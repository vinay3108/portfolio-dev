import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles'
import EducationUtil from './EductionUtil'
import SchoolIcon from '@mui/icons-material/School';  
const EducationData=[
    {
        id:'1',
        year:'2018-2022',
        title:'NSUT West Campus formely name Ch.Braham  Prakash Govt. Engineering College',
        subTitle:'B.Tech',
        text:'8.6 CGPA'
    },
    {
        id:'2',
        year:'2015-2017',
        title:'Sarvodaya Vidyalaya, Jorbagh',
        subTitle:'XII',
        text:'73%'
    },
    {
        id:'3',
        year:'2015',
        title:'Ratan Jee Modern School',
        subTitle:'X',
        text:'8.6 CGPA'
    },
]
const Education = () => {
  return (
    <EductionStyledWrapper>
     <div className='heading'>
        <SchoolIcon/>
        <h2>Education</h2>
        </div>
    <EducationStyled>
     
        {
            EducationData.map((item)=>(
             <EducationUtil key={item.id}
                year={item.year}
                title={item.title}
                subTitle={item.subTitle}
                text={item.text}
                ></EducationUtil>
                ))
        }
    </EducationStyled>
    </EductionStyledWrapper>
  )
}

export default Education
const EductionStyledWrapper=styled(Box)(()=>({
    marginTop:'4rem',
    '.heading':{
        // paddingLeft:'-20px',
        color:'#fff',
        display:'flex',
        alignItems:'center',
        fontSize:'1.7rem',
        svg:{
            marginRight:'20px',
            fontSize:'3rem',
        }
    }
}))
const EducationStyled=styled(Box)(()=>({
    borderLeft:'2px dashed grey',
    paddingLeft:'20px',
    borderRadius:'5px',
    marginTop:'1rem',
    marginLeft:'1rem',
}))