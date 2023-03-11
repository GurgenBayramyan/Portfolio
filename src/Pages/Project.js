import React from 'react'
import { useParams } from 'react-router-dom'
import BtnGithub from '../Components/buttonGithub/BtnGithub'
import {project} from '../ProjectArr'

export default function Project() {
  const{id} = useParams();
  const myProject = project[id-1]
  return (
    <main className="section">
    <div className="container">
        <div className="project-details">
            <h1 className="title-1">{myProject.title}</h1>
            {myProject.title == "Color Design" ?  <span>please enter "space" in page</span> : null }
            <img src={myProject.img} alt="image" className="project-details__cover" />

            <div className="project-details__desc">
                <p>{myProject.skills}</p>
            </div>

           <BtnGithub  src={myProject.href}/>

        </div>
    </div>
</main>
  )
}
