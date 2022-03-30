import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/tiagogadonski/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/TiagoGadonski" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/tiagocordeirodesign/" target="_blank"><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials