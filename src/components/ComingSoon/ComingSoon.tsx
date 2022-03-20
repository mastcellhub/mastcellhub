import React from 'react'
import comingSoon from "../../svg/coming-soon.svg"
import {comingSoonStyle, comingSoonImgStyle, comingSoonH1Style} from './styles.css'

const ComingSoon = () => {
  return (
    <div className={comingSoonStyle}>
      <h1 className={comingSoonH1Style}>All the goodness is coming soon</h1>
      <img className={comingSoonImgStyle} src={comingSoon} alt="coming soon"/>
    </div>
  )
}

export default ComingSoon
