import React from 'react'
import Sidebar from "../Thepostescomponent/Sidebar"
import Middelpart from "../Thepostescomponent/Middelpart"
import Endpart from "../Thepostescomponent/Endpart"

function Posts() {
  return (
    <div className="posts-component">
      <Sidebar/>
      <Middelpart/>
      <Endpart/>
    </div>
  )
}

export default Posts