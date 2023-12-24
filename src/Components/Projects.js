import React from 'react';
import ProjectBox from './ProjectBox';
import SuicideCorrelation from '../images/SuicideCorrelation';
import SMPS from '../images/SMPS';
import heartdiseaseprediction from '../images/heartdiseaseprediction';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={SuicideCorrelation} projectName="SuicideCorrelation" />
        <ProjectBox projectPhoto={SMPS} projectName="StudentMarkPrediction" />
        <ProjectBox projectPhoto={heartdiseaseprediction} projectName="HeartDiseasePrediction" />
      </div>

    </div>
  )
}

export default Projects