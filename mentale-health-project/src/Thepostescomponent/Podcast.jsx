import React from 'react'
import PodcastMiddelpart from './PodcastMiddelpart'
import Sidebarvx from  "./Sidebarvx"
import Endpartpost from './Endpartpost'
function Podcast() {
  return (
    <div className="posts-component">
    <Sidebarvx/>
    <PodcastMiddelpart/>
    <Endpartpost/>
  </div>
  )
}

export default Podcast