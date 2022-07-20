import React from 'react'
import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't',' ', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Frontend developer from Venezuela currently based in London, United
            Kingdom. Feel free to check out
            <Link to="/portafolio">
              <strong>
                <em>
                  {' '}
                  <u>some of my projects</u>
                </em>
              </strong>
            </Link>
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, disciplined and
            collaborative person. Perpetually working on improving my chops one
            design problem at a time.
          </p>
          <p>
            I m very passionate about frontend developer and learn from my
            colleagues, as well as generate feedback that can help the team grow
            and create a pleasant work environment. My goal is to grow in a
            company where I can strengthen my skills and acquire new ones.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
