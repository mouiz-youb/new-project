import React, { useState } from 'react'
import "../App.css"
import Themoonidoctor from "../assets/Themoonidoctor.svg";
import posticon1 from "../iconofsidebar/posticon1.svg";
import mooniicon from "../iconofsidebar/mooniicon.svg";
import { Link } from 'react-router-dom';
import { LuPodcast } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { GrTask } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
function Thesidebar() {
  return (
    <div className="side-bar">
      <div className="profile">
        <div className=" contianer-image-profile ">
          <img src= {Themoonidoctor} alt="" className="image-profile" />
        </div>
        <h2>usename</h2>
        <p>description</p>
      </div>
      <div className="ulsidebar">
        <p className="pmenu">menu</p>
        <ul className='ulmenu'>
          <div className='lineof-li' >
            {/* <img src= {homeicon} alt="" className="logoofli" /> */}
            <RiHome6Line className="logoofli" id='one' />
            <Link className='linksof-sidebar'  >home </Link>
          </div>
          <div className='lineof-li' >
            <img src= {posticon1} alt="" id='one0' className="logoofli" />
            <Link  className='linksof-sidebar' >posts </Link>
          </div>
          <div className='lineof-li' >
            {/* <img src= {podcasticon} alt="" className="logoofli" /> */}
            <LuPodcast className="logoofli" id='one1' />
            <Link  className='linksof-sidebar' >podcast </Link>
          </div>
          <div className='lineof-li' >
            {/* <img src= {taskicon} alt="" className="logoofli" /> */}
            <GrTask  className="logoofli"  id='one2'/>
            <Link  className='linksof-sidebar' >tasks </Link>
          </div>
          <div className='lineof-li' >
            <img src= {mooniicon} alt="" id='one3' className="logoofli" />
            <Link  className='linksof-sidebar' >ai chat </Link>
          </div>
        </ul>
      </div>
      <div className="settings">
        <p className="paccount">account</p>
        <ul className='ulsettings'>
          <div className='lineof-li' >
            {/* <img src= {settingicon} alt="" className="logoofli" /> */}
            <IoSettingsOutline id='one4'  className="logoofli" />
            <Link  className='linksof-sidebar' >settings  </Link>
          </div>
          <div className='lineof-li' >
            {/* <img src= {notifecationicon} alt="" className="logoofli" /> */}
            <IoNotificationsOutline  id='on5'className='logoofli' />
            <Link  className='linksof-sidebar' >Notifications  </Link>
          </div>
        </ul>
      </div>
    </div>
  )
  }

export default Thesidebar