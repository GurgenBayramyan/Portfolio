import React from 'react'
import Project from '../Components/Projects/Project'

export default function() {
  return (
    <>
       <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <Project
                 href={"/project/1"}
                 src={"./Workimgs/movie.png"}
                 title={"MovieApp"}
                 />
                <Project 
                  href={"/project/2"}
                  src={"./Workimgs/Color Design.png"}
                  title={"Color Design"}
                />
               
                <Project 
                  href={"/project/3"}
                  src={"./Workimgs/TypingGame.png"}
                  title={"Typing Game"}
                />
                <Project 
                  href={"/project/4"}
                  src={"./Workimgs/ToDoListApi.png"}
                  title={"To Do List API"}
                />

            </ul>
        </div>
    </main>
    </>
  )
}
