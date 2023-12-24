import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Shashwat Kumar Panigrahi</b> and I am from Bhubaneswar, India.
            I'm a constantly evolving<b>Data Scientist</b> and a final year college student pursuing <b>Masters in Computer Applications</b>. <br/><br/>
            I have done an internship as a <b>Data Analyst</b> at CodersCave.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I am an artist, you can check out some of my arts here <a href="https://www.instagram.com/sketch_eth/?next=%2F" target='_blank'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Python' />
        <Skills skill='Sci-Kit Learn' />
        <Skills skill='Tensorflow' />
        <Skills skill='Keras' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='SQL' />
        <Skills skill='C++' />
        <Skills skill='Javascript' />
        <Skills skill='Figma' />
        <Skills skill='Flask' />
        <Skills skill='Jupyter' />
        <Skills skill='CSS'/>
        
      </div>
    </>
  )
}

export default About