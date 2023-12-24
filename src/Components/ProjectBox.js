import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    SuicideCorrelationDesc : "This project tries to understand the relationship between suicide rates and mental health by performing Exploratory Data analysis.",
    SuicideCorrelationGithub : "https://github.com/Shashwat-arch/Exploring_Suicide_rate_and_socio_economic__factor_correlation",

    StudentMarkPredictionDesc : "This project tries to predict the marks of students using various machine learning algorithms.",
    StudentMarkPredictionGithub : "https://github.com/Shashwat-arch/End-to-end-Student-Mark-Prediction-System",

    HeartDiseasePredictionDesc:"This project tries to predict whether a person has heart disease based on medical parameters.",
    HeartDiseasePredictionGithub :"https://github.com/Shashwat-arch/Heart-Disease-Prediction",
    
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox