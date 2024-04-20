import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import {Link} from "react-router-dom"
import { useState } from 'react';
import Monkey from "../iconofsidebar/Monkey.svg"
import { SlOptions } from "react-icons/sl";
function TasksMiddelpart() {
  const[search,setSearch]=useState("");
  const handelSearch=(e)=>{
    setSearch(e.target.value);
  }
  const styleSpan ={
    width: "8px",
    display:" block",
    height:" 8px",
    borderRadius: "20px",
  }
  const backgroundColor =[
    {
      color :"#FF5569"
    },
    {
      color :"#FFF855"
    },
    {
      color :"#A0FF55"
    },
  ]
  const buttonlist =[
    {
      color :"#190482",
      icon :<SlOptions className='icon-task-page'/>,
      text :"To do ",
      backgroundColor:"#FF5569",
      spanStyle :styleSpan,
    },
    {
      color :"#190482",
      icon :<SlOptions className='icon-task-page'/>,
      text :"Ongoing ",
      backgroundColor:"#FFF855",
      spanStyle :styleSpan,
    },
    {
      color :"#190482",
      icon :<SlOptions className='icon-task-page'/>,
      text :"done",
      backgroundColor:"#A0FF55",
      spanStyle :styleSpan,
    },
  ]
  return (
    <div className='task-middlepart'>
      <div className='the-header-of-taskpage'>
        <div className='logo-place'>the logo part </div>
        <div className="container-input-searchbar1">
        <IoNotificationsOutline className='notificationIcon-of-SearchBar' />
        <div className='input-searchbar'>
          <input 
          type="text" 
          placeholder='Search'  
          className='input-box-for-SearchBar'
          onChange={handelSearch}
          value={search}/>
          <IoIosSearch className='search-icon-of-input'/>
        </div>
      </div>
      </div>
      <div className='descreptionp-part-of-Tp'>
        <div className='line1'>
          <p style={{color :"#190482",
          fontSize :"40px",
          fontWeight :"bolder",
          padding :"0 10px"
          }}>
            Welcome back to your tasks </p>
          <img src= {Monkey} alt="" className="monkey" />
        </div>
        <div className="line2">
          <p className = "para" style={{color :"#819CC6"}}>
            We really do ! , At Relievo we're like podcast matchmakers,
            finding your perfect listen from crime capers to comedy tailored
            just for you
          </p>
        </div>
      </div>
      <div className='nav-bar-of-TP'>
        <div className="navbar-task">
          <Link className='links-all'>all tasks</Link>
          <Link className='links-all'>remiders</Link>
          <Link className='links-all'>Therapist space</Link>
        </div>
        <div className='three-botton'>
          {buttonlist.map((item,index)=>(
            <div className='bottom-task' key={index}>
              <div className='container-buttom-task'>
                    <span style={{backgroundColor :item.backgroundColor}} className='span-task'></span>
                <p style={{color :item.color}}> {item.text} </p>
              </div>
              {/* {item.icon} */}
            </div>
          ))}
        </div>
        <p className='see-all'></p>
      </div>
      <div className='task-content'></div>
    </div>
  )
}

export default TasksMiddelpart
// TP": "TasksPage",