import React, { useState } from 'react'
import Themoonidoctor from "../assets/Themoonidoctor.svg";
import {Link} from  "react-router-dom"
import { LuPodcast } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { GrTask } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
function Sidebarvx() {
    const [linkColor ,setLinkColor]=useState(null)
    const Activcolor=(link)=>{
        setLinkColor(link)
    }
    const  sideBarItems = [
        {
            name :"home",
            path :"/home",
            icon :<RiHome6Line 
            className= {`logoofli ${linkColor == "home" ? "activex1" :"" }`}
            onClick={ ()=> Activcolor("home")} id='home' />,
            
        },
        {
            name :"posts",
            path :"/posts",
            icon :<LuPodcast className= {`logoofli ${linkColor == "posts" ? "activex1" :"" }`}
        onClick={ ()=> Activcolor("posts")} id ="posts"/>,
        },
        {
            name :"podcast",
            path :'/podcast',
            icon :<GrTask className= {`logoofli ${linkColor == "podcast" ? "activex1" :"" }`}
        onClick={ ()=> Activcolor("podcast")} id='podcast' />,
        },
        {
            name :"tasks",
            path :"/tasks",
            icon :<IoSettingsOutline className= {`logoofli ${linkColor == "tasks" ? "activex1" :"" }`}
        onClick={ ()=> Activcolor("tasks")} id='tasks' />,
        },
        {
            name :"ai chat",
            path :"/tasks",
            icon :<IoNotificationsOutline className= {`logoofli ${linkColor == "ai chat" ? "activex1" :"" }`}
        onClick={ ()=> Activcolor("ai chat")} id='ai chat'/>,
        },
    ]
    const sidebarsettings = [
        {
            name :"settings",
            path :"/posts",
            icon :<IoSettingsOutline className= {`logoofli ${linkColor == "settings" ? "activex1" :"" }`}
        onClick={ ()=> Activcolor("settings")} id='settings' />,
        },
        {
            name :"Notifications" ,
            path :"/posts",
            icon :<IoNotificationsOutline className= {`logoofli ${linkColor == "Notifications" ? "activex1" :"" }`}
        onClick={ ()=> Activcolor("Notifications")} id='Notification'/>,
        }
    ]
    console.log(linkColor)
    return(
        <div className='side-bar1'>
            <div className="profile">
                <div className=" contianer-image-profile ">
                    <img src= {Themoonidoctor} alt="" className="image-profile" />
                </div>
                <h2>usename</h2>
                <p>description</p>
            </div>
            <div className='ulsidebar'>
                <p className="pmenu">menu</p>
                <ul className='ulmenu'>
                    {sideBarItems.map((line,index)=>(
                        <div key={index} className='lineof-li'>
                            {line.icon}
                            <Link 
                            className= {`linksof-sidebar ${linkColor == line.name ? "activex" : "" }`} 
                            onClick={ ()=> Activcolor(line.name)}
                            to= {line.path} htmlFor = {line.name} > {line.name} </Link>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='settings'>
                <p className="paccount">settings</p>
                <ul className='ulsettings'>
                    {
                        sidebarsettings.map((line,index)=>(
                            <div className='lineof-li' key={index}>
                                {line.icon}
                                <Link  
                                className= {`linksof-sidebar ${linkColor == line.name ? "activex" : "" }`} 
                                onClick={ ()=> Activcolor(line.name)}
                                to= {line.name} htmlFor = {line.name} > {line.name}</Link>
                            </div>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebarvx