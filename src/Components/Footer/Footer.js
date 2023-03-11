import React from 'react'
import "./Footer.css"
import instagram from "./icons/instagram.svg"
import gitHub from "./icons/gitHub.svg"
import linkedin from "./icons/linkedIn.svg"
export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/GurgenBayramyan" target="_blank"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/gurgen-bayramyan-5b7b57254" target="_blank"><img src={linkedin} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 </p>
                </div>
            </div>
        </div>
    </footer>
  )
}
