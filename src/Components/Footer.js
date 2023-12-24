import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Shashwat Ku. Panigrahi</h4>
      <h4>Copyright &copy; 2023 Shashwat</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Shashwat-arch" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shashwat-kumar-panigrahi-313908136/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:shashwat.boudh@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer