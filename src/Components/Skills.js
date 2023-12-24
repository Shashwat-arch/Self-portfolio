import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiPython} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel, SiTensorflow, SiSqlite, SiScikitlearn, SiFlask, SiJupyter, SiKeras, SiCss3} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Python: <DiPython/>,
        Javascript: <DiJavascript1/>,
        Tensorflow : <SiTensorflow/>,
        'Sci-Kit Learn' : <SiScikitlearn/>,
        SQL : <SiSqlite/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        CSS : <SiCss3/>,
        Figma : <FaFigma/>,
        Flask: <SiFlask/>,
        Jupyter : <SiJupyter/>,
        Keras : <SiKeras/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
