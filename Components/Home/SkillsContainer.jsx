import { Box, styled } from '@mui/material'
import React from 'react'
import SkillsCard from './SkillsCard';
const SkillsContainer = () => {
  return (
    <SkillsContainerItem>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
    </SkillsContainerItem>
  )
}

export default SkillsContainer

const SkillsContainerItem=styled(Box)(()=>({
    height:'500px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexWrap:'wrap'
}))