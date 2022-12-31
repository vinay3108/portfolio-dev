import { Box,Grid,styled } from '@mui/material'
import React from 'react'
import {skillData} from './skillsData'
import ProgressBar from '../GlobalUtils/ProgressBar'
import {ImportantDevices,Insights,LeakAdd,JoinRight,CloudSync,Route} from '@mui/icons-material';

const SkillDataContainer = () => {
  return (
    <SkillDataContainerStyled>
        <SkillDataComp type={'web'} name={'Languages/Web Devlopment'} icon={<ImportantDevices/>}/>
        <SkillDataComp type={'framework'} name={'Frameworks'} icon={<Insights/>}/>
        <SkillDataComp type={'library'} name={'JavaScript Library'} icon={<LeakAdd/>}/>
        <SkillDataComp type={'database'} name={'Database Management'} icon={<JoinRight/>}/>
        <SkillDataComp type={'cloud'} name={'Cloud Computing'} icon={<CloudSync/>}/>
        <SkillDataComp type={'version'} name={'Version Control'} icon={<Route/>}/>
    </SkillDataContainerStyled>
  )
}

export default SkillDataContainer

const SkillDataComp=({type,name,icon})=>{
    return (
        <SkillDataCompStyled>
         <div className='heading'>
            <h2><span>{icon} </span>{name}</h2>
        </div>   
        <Grid container sx={{marginBottom:'2.5rem',color:'yellow'}}>
        {
          skillData.filter((item)=>item.type===type).map((item)=>(
            <React.Fragment key={item.id}>
            <Grid item xs={5} key={item.id}>
                <ProgressBar name={item.name} percentage={item.percentage} colorr={"#dcdbc8"}/>
            </Grid>
            <Grid item xs={1}/>
            </React.Fragment>
          ))
        }
        </Grid>
        </SkillDataCompStyled>
    )

}
const SkillDataContainerStyled=styled(Box)(()=>({

}))
const SkillDataCompStyled=styled(Box)(()=>({
    '.heading':{
        h2:{

            display:'flex',
            alignItem:'center',
            color:'#fff',
            fontSize:'2rem',
            // justifyContent:'center',
            svg:{
                fontSize:"2.4rem"
            },
            span:{
                marginRight:'1rem'
            }
            
        }
    },
    h2:{
        margin:'10px 0'
    }
}))