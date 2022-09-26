import React from 'react'
import './footer.css'
import {FaYoutube} from 'react-icons/fa'
import {FiLinkedin} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>LOGO</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.youtube.com/channel/UC4DlUZjStPPXlCJBl9PxDFA"><FaYoutube /></a>
        <a href="https://www.linkedin.com/in/tiagogadonski/?locale=en_US"><FiLinkedin /></a>
        <a href="https://github.com/TiagoGadonski"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tiago Cordeiro. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer