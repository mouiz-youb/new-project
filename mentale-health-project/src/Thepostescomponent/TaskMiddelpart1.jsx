import React from 'react'
import { useState } from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Monkey from "../iconofsidebar/Monkey.svg"
import {Link} from  "react-router-dom"
import { FaPlay } from "react-icons/fa";
import { HiLink } from "react-icons/hi2";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { LuPaperclip } from "react-icons/lu";

function TaskMiddelpart1() {
    const[search,setSearch]=useState("");
    const handelSearch=(e)=>{
      setSearch(e.target.value);
    }
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);
    const [counter3,setCounter3]=useState(0);
    const [complete ,setComplete] =useState(0);
    const [time,setTime]=useState(0)
    const [percent ,setPercent]=useState(0)
    const LinkListes =[
        {
            backGrooud :"#FF5569",
            name :"To do",
            counter :counter1,
        },
        {
            backGrooud :"#FFF855",
            name :"Ongoing",
            counter :counter2,
        },
        {
            backGrooud :"#A0FF55",
            name :"Done",
            counter :counter3,
        },
    ]
    const styelPlayIcon ={
        width: "10px",
        height: "10px",
    }
    const Tasklist =[
        {
            playIcon :<FaPlay style={styelPlayIcon} />,
            text :"Start form ",
            time :time,
            taskName:"Task name ",
            link:"www.Arandomur.com",
            linkIcon:<LuPaperclip style={{color :"#819CC6" ,width:"13px",height:"13px"}}/>,
            commentIcon :<FaRegCommentAlt style={{color:"#819CC6",width:"13px",height:"13px",}}/>,
            counterComplete :complete,
            hourIcon :<MdOutlineWatchLater  style={{color :"#819CC6"}}/>,
            optionIcon :<SlOptions className='option-button'/>,
            remider :"Remider",
            complete :"Completed",
            percent :percent
            // linkUrl :"www.Arandomur.com",
        },
        {
            playIcon :<FaPlay style={styelPlayIcon} />,
            text :"Start form ",
            time :time,
            taskName:"Task name ",
            link:"www.Arandomur.com",
            linkIcon:<LuPaperclip style={{color :"#819CC6" ,width:"13px",height:"13px"}}/>,
            commentIcon :<FaRegCommentAlt style={{color:"#819CC6",width:"13px",height:"13px"}}/>,
            counterComplete :complete,
            hourIcon :<MdOutlineWatchLater  style={{color :"#819CC6"}}/>,
            optionIcon :<SlOptions className='option-button'/>,
            remider :"Remider",
            complete :"Completed",
            percent :percent
            // linkUrl :"www.Arandomur.com",
        },
        {
            playIcon :<FaPlay style={styelPlayIcon} />,
            text :"Start form ",
            time :time,
            taskName:"Task name ",
            link:"www.Arandomur.com",
            linkIcon:<LuPaperclip style={{color :"#819CC6" ,width:"13px",height:"13px"}}/>,
            commentIcon :<FaRegCommentAlt style={{color:"#819CC6",width:"13px",height:"13px"}}/>,
            counterComplete :complete,
            hourIcon :<MdOutlineWatchLater  style={{color :"#819CC6"}}/>,
            optionIcon :<SlOptions className='option-button'/>,
            remider :"Remider",
            complete :"Completed",
            percent :percent
            // percent :`${precent} ` 
            // linkUrl :"www.Arandomur.com",
        },
    ]
  return (
    <div className="task-midelle-part-conponent">
        <div className='nav'>
                <div className="logo-text">logo part</div>
                <div className="container-searchbar">
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
        <div className='descreption'>
            <div className='line1'>
                <p style={{color :"#190482",fontSize:"35px",fontWeight :"bolder"}}>Welcome back to your tasks </p>
                <img src= {Monkey}  alt="" />
            </div>
            <div className='line2'>
                <p className='text-of-the-task'>
                    We really do ! , At Relievo we're like podcast matchmakers,
                    finding your perfect listen from crime capers to comedy tailored
                    just for you
                </p>
            </div>
        </div>
        <div className='nav-task'>
            <Link className='links-of-tasks-page'>All tasks</Link>
            <Link className='links-of-tasks-page' to= "/tasks/remider">Remider</Link>
            <Link className='links-of-tasks-page'>Therapist space</Link>
        </div>
        <div className='button-tasks'>
            <div className='container-of-buttont'>
            {LinkListes.map((item,index)=>(
                <div className='category' key={index}>
                    <span style={{backgroundColor :item.backGrooud}} className='span-circle'></span>
                    <span> {item.name} </span>
                    <span> {item.counter}  </span>
                </div>
            ))}
            </div>
            <div className='button-right'>
                <p>Creat a task </p>
                <span style={{fontSize:"20px"}}>+</span>
            </div>
        </div>
        <div className='seeAll'>
            <p style={{marginRight:"10px"}}>See All Tasks</p>
        </div>
        <div className='Tasks'>
            {
                Tasklist.map((item,index)=>(
                    <div className='task-card'key={index}>
                        <div className='left-side-of-TaskCard'>
                            <div className='play'>
                                {item.playIcon}
                            </div>
                            <div className='middeltext'>
                                <p style={{color :"#190482"}}> {item.text} </p>
                                <div className='time-content'>
                                    {item.hourIcon}
                                    <p style={{color:"#819CC6"}}> {item.time} </p>
                                </div>
                            </div>
                        </div>
                        <div className='right-side-of-TaskCard'>
                            <div className='identety-task'>
                                <p style={{color:"#190482",
                            fontWeight :"bolder"}}> {item.taskName} </p>
                                <div className='link-bar'>
                                    {item.linkIcon}
                                    <Link style={{color:"#407BFF"
                                    ,textDecoration:"none"
                                    ,fontSize :"13px"}}>{item.link}</Link>
                                    {item.commentIcon}
                                    <span style={{color:"#819CC6"}}>{item.counterComplete}</span>
                                </div>
                            </div>
                            <div className='complete-part-task'>
                                <div className='complete-precent' style={{color :"190482"}}> {item.percent} {item.complete} </div>
                                <input type="range" className='range-input' max= "100" min= "0" step= "1" />
                            </div>
                            <div className='remider-taskabar'>
                                <div className='remider-button'>
                                    {item.hourIcon}
                                    <button style={{backgroundColor :"transparent",
                                border :'transparent',color :"#407BFF"}}> {item.remider} </button>
                                </div>
                                <div className='option-button'>  {item.optionIcon} </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TaskMiddelpart1