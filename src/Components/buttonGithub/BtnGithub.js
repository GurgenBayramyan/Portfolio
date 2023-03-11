import React from 'react'
import githubIcon from "./gitHub-black.svg"
export default function BtnGithub({src}) {
  return (
    <a href={src} className="btn-outline" target="_blank"  rel="noreferrer" >
    <img src={githubIcon} alt="sad"/>
    GitHub repo
    </a>
  )
}
