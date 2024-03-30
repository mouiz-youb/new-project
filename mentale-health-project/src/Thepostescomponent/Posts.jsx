import React from 'react'
import Sidebar from "../Thepostescomponent/Sidebar"
import PostMiddelpart from "../Thepostescomponent/PostMiddelpart"
import Endpartpost from "../Thepostescomponent/Endpartpost"
import Sidebarvx from  "./Sidebarvx"
function Posts() {
  return (
    <div className="posts-component">
      <Sidebarvx/>
      <PostMiddelpart/>
      <Endpartpost/>
    </div>
  )
}

export default Posts