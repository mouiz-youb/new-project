import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
// import circlepost from "../assets/circlepost.svg"
import Circlepost from "../assets/circleofpost.svg"
const lastsearch =[
  {
    searchtext: "Depression1",
  },
  {
    searchtext: "Depression2",
  },
  {
    searchtext: "Depression3",
  },
  {
    searchtext: "Depression4",
  },
]
const podcastlist =[
  {
    podcastName :"Cognitive Psychiatry",
    date :"June 8, 2021",
    podcastDescription :"This is a description",
    color :"#FFF3C7",
    background :"#FFF3C7"
  },
  {
    podcastName :"Cognitive Psychiatry",
    date :"June 8, 2021",
    podcastDescription :"This is a description",
    background :"#FEC7B4",
    color :"#FEC7B4"
  },
  {
    podcastName :"Cognitive Psychiatry  ",
    date :"June 8, 2021",
    podcastDescription :"This is a description ",
    background :"#FC819E",
    color :"#FC819E"
  },
]
function Endpart() {
  return (
    <div className='Endpart'>
      <div className="container-input-searchbar">
        <IoNotificationsOutline className='notificationIcon-of-SearchBar' />
        <div className='input-searchbar'>
          <input type="text" placeholder='Search'  className='input-box-for-SearchBar'/>
          <IoIosSearch className='search-icon-of-input'/>
        </div>
      </div>
      <div className="the-recent-search">
        <p className="Recent-text">Recent Search </p>
        <div className='container-lastSrch'>
          {lastsearch.map((item,index)=>(
            <div className='conspan'  key={index}>
              <span className='spanoflast'> {item.searchtext} </span>
              <span className='the-X'>X</span>
            </div>
          ))}
        </div>
      </div>
      <div className="testconpodcast">
        <p className="Recent-text1">Recent Search </p>
        {podcastlist.map((item,index)=>(
                  <div style={{border :"2px solid "}} className="podcastinposttets" key={index}>
                  <div className="void1" style={{backgroundColor :item.background}}></div>
                  <div className="content">
                  <div className="sudiv"><p className="sup">X</p></div>
                    <h3 className="h3"> {item.podcastName} </h3>
                    <p className="pd"> {item.podcastDescription} </p>
                    <div className="btns">
                      <p className='timepod'> {item.date} </p>
                      <CiPlay1 style={{backgroundColor :item.background,
                          width :'25px',
                          height:"15px",
                          color :"white",
                          borderRadius :"4px"}}/>
                    </div>
                  </div>
                </div>
        ))}
      </div>
    </div>
  )
}

export default Endpart