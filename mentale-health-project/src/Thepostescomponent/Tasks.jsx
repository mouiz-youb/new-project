import React from 'react'
import TaskMiddelpart1 from './TaskMiddelpart1'
// import TasksMiddelpart from './TasksMiddelpart'
import Sidebarvx from  "./Sidebarvx"
import "../App.css"
function Tasks() {
  return (
    <div className="tasks-component">
    <Sidebarvx/>
    <TaskMiddelpart1/>
    {/* <TasksMiddelpart/> */}
    </div>
  )
}

export default Tasks