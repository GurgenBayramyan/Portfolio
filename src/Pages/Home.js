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
            <h2 className="title-2">Front end</h2>
            <p>Html Css Scss Bootstrap JavaScropt Git & GitHub React js Redux Toolkit </p>
          </li>
            <li className="content-list__item">
              <h2 className="title-2">in procces...</h2>
              <p><br/><i> TypeScript ...</i></p>
            </li>      
            <h2 className="title-2">a bit of my goals</h2>
            <p className='goals'>I have a very strong desire to be able to show the maximum of my capabilities. I improve every day and follow the latest technologies. please give me that chance and I am sure I can do it justify me as the best worker. I have very big dreams in the field of programming, so I will continue to improve endlessly. thanks for giving me some of your time...</p>
          </ul>
        </div>
      </main>
    </>
  )
}
