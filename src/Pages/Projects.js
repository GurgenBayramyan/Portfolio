import React from 'react'
import Project from '../Components/Projects/Project'
import img1 from '../WorkImgs/movie.png'
import img2 from '../WorkImgs/Color Design.png'
import img3 from '../WorkImgs/typingGame.png'
import img4 from '../WorkImgs/ToDoListApi.png'
export default function() {
  return (
    <>
       <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <Project
                 href={"/project/1"}
                 src={img1}
                 title={"MovieApp"}
                 />
                <Project 
                  href={"/project/2"}
                  src={img2}
                  title={"Color Design"}
                />
               
                <Project 
                  href={"/project/3"}
                  src={img3}
                  title={"Typing Game"}
                />
                <Project 
                  href={"/project/4"}
                  src={img4}
                  title={"To Do List API"}
                />

            </ul>
        </div>
    </main>
    </>
  )
}
