import React from 'react'
import todo from '../../assets/todo.png'
import './project.css'
const project = () => {
  return (
  <div className="project" id='project'>
    <h1>My Projects</h1>
    <div className="project-info">
        <img src={todo} alt="" />
        <div className="text">
          <span>Todo List</span>
          <span>Bites and Beyond is a simple yet comprehensive website that allows users to easily reserve tables at restaurants. The website serves as a valuable resource for all things food-related, providing users with access to a wealth of culinary information. Users can not only search for any recipes they wish to prepare but also explore a curated list of blogs
             detailing how to prepare specific dishes.</span>
        </div>
    </div>
    <div className="project-info">
        <img src={todo} alt="" />
        <div className="text">
          <span>Todo List</span>
          <span>Bites and Beyond is a simple yet comprehensive website that allows users to easily reserve tables at restaurants. The website serves as a valuable resource for all things food-related, providing users with access to a wealth of culinary information. Users can not only search for any recipes they wish to prepare but also explore a curated list of blogs
             detailing how to prepare specific dishes.</span>
        </div>
    </div>
    <div className="project-info">
        <img src={todo} alt="" />
        <div className="text">
          <span>Todo List</span>
          <span>Bites and Beyond is a simple yet comprehensive website that allows users to easily reserve tables at restaurants. The website serves as a valuable resource for all things food-related, providing users with access to a wealth of culinary information. Users can not only search for any recipes they wish to prepare but also explore a curated list of blogs
             detailing how to prepare specific dishes.</span>
        </div>
    </div>
  </div>
  )
}

export default project