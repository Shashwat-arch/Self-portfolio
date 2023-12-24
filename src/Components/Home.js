import React from 'react'
import Lottie from 'lottie-react'
import SpaceBoy from '../LottieFiles/SpaceBoy.json'
import Typed from './Typed.js'
import Tilt from 'react-parallax-tilt'
import Avatar from '../images/Avatar.png'
import { CiPen } from 'react-icons/ci'

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>SHASHWAT KUMAR PANIGRAHI</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            Welcome to my data-driven world! As a seasoned data scientist, I
            specialize in transforming complex datasets into actionable
            insights.
            <br />
            <br />Dive into my portfolio to
            explore how I leverage analytics and machine learning to drive
            informed decisions and unravel meaningful patterns.
            <br />
            Also, I love <b>Art</b>{' '}
            <CiPen style={{ scale: '1.5', rotate: '15deg' }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
