import React from 'react'
import PrimaryHeading from '../../Components/GlobalUtils/PrimaryHeading'
import ProjectButtons from '../../Components/ProjectUtils/ProjectButtons'
import ProjectCard from '../../Components/ProjectUtils/ProjectCard'
const index = () => {
  return (
    <div>
      <PrimaryHeading name={'Projects'}/>
      <ProjectButtons/>
      <ProjectCard/>
      </div>
  )
}

export default index