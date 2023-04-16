import React from 'react'
import "./style.css"
import Cv from './CV/Gurgen Bayramyan Front end Developer.pdf'
export default function Header() {
  return (
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Gurgen</em></strong><br/>
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href={Cv} download="Gurgen Bayramyan Front end developer Cv" className="btn">Download CV</a>
        </div>
    </header>
  )
}
