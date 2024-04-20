import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Monkey from "../iconofsidebar/Monkey.svg"
import {Link} from  "react-router-dom"
import { useState } from 'react';
function RemiderMiddelpart() {
    const[search,setSearch]=useState("");
    const handelSearch=(e)=>{
        setSearch(e.target.value);
    }
    const [titel,settitel] =useState("Customise Reminder");
    const remiderCardContent =[
        {
            titel :titel,
        }
    ]
    return (
        <div className='RemiderMiddelpart'>
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
            <div className='remider1'>
                {remiderCardContent.map((item,index)=>(
                    <div className='remider-card' key={index}>
                        <div className="titel-remder">
                            <p style={{color :"#190482" ,fontWeight:"bolder"}}> {item.titel} </p>
                            <Link style={{textDecoration :"none" ,
                        fontWeight :"bolder" , color :"#190482"}}>+</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RemiderMiddelpart