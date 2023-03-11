import React from 'react'
import Header from '../Components/Header/Header'

export default function () {
  return (
    <>
      <Header/>
      <main className="section">
        <div className="container">
          <ul className="content-list">
           <li className="content-list__item">
            <h2 className="title-2">Frontend</h2>
            <p>Html Css Scss Bootstrap JavaScropt Git & GitHub React js </p>
          </li>
            <li className="content-list__item">
              <h2 className="title-2">in procces...</h2>
              <p><br/><i>Redux and TypeScript</i></p>
            </li>      
          </ul>
        </div>
      </main>
    </>
  )
}
