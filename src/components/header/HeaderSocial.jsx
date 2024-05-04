import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sondos-saad-a6b5b0174" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/sondos-saad" target="_blank"><BsGithub/></a>
        <a href="mailto:contact@sondosjs.com" target="_blank"><MdEmail/></a>
      
    </div>
  )
}

export default HeaderSocial
