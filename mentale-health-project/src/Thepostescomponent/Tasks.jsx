import React from 'react'
import TasksMiddelpart from './TasksMiddelpart'
import Sidebarvx from  "./Sidebarvx"
import Endpartpost from './Endpartpost'
function Tasks() {
  return (
    <div className="posts-component">
    <Sidebarvx/>
    <TasksMiddelpart/>
    <Endpartpost/>
    </div>
  )
}

export default Tasks