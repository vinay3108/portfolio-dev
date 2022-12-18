import React from 'react'
import { Box, styled } from '@mui/material';
import PrimaryHeading from '../../Components/GlobalUtils/PrimaryHeading'
import SkillDataContainer from '../../Components/SkillsUtils/SkillDataContainer';
const index = () => {
  return (
    <SkillStyled>
      <PrimaryHeading name={'My Skills'}/>
      <SkillDataContainer/>
    </SkillStyled>

  )
}

export default index
const SkillStyled=styled(Box)(()=>({

}))