import { Box,styled } from '@mui/system'
import React from 'react'
import { projectButtonData } from './projectButtonData'
import PrimaryButton from '../GlobalUtils/PrimaryButton'
const ProjectButtons = () => {
  return (
    <ProjectButtonsStyled>
        {
            projectButtonData.map((item)=>(
                <PrimaryButton value={item.type} key={item.id}/>
            ))
        }
    </ProjectButtonsStyled>
  )
}

export default ProjectButtons
const ProjectButtonsStyled=styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap'
}))