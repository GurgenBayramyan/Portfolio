import React from 'react'
import "./Project.css"
import PropTypes from 'prop-types'
export default function Project({href,src,title}) {
  return (
    <li className="project">
        <a href={href} >
            <img  src={src} alt="Project img" className="project__img"  />
            <h3 className="project__title">{title}</h3>
        </a>
    </li>
  )
}


Project.propTypes = {
    href:PropTypes.string.isRequired,
    src:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}