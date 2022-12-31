import { Box, styled } from '@mui/system'
import React from 'react'
import ProgressBar from '../GlobalUtils/ProgressBar';

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
const SkillSection = () => {
  return (
    <SkillItem>
        {
            skillData.map((item)=>(
             <ProgressBar key={item.id} name={item.name} percentage={item.percentage}/>
            ))
        }
    </SkillItem>
  )
}

export default SkillSection
const SkillItem=styled(Box)(()=>({
    color:'yellow',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-beween',
    padding:'1rem 0.8rem 0 0.8rem'

}))

