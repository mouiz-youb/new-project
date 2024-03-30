import React from 'react'
import Themoonidoctor from "../assets/Themoonidoctor.svg";
import {Link} from  "react-router-dom"
import { LuPodcast } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { GrTask } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
function Sidebarvx() {
    const  sideBarItems = [
        {
            name :"home",
            path :"/",
            icon :<RiHome6Line className="logoofli"/>,
        },
        {
            name :"posts",
            path :"/posts",
            icon :<LuPodcast className="logoofli"/>,
        },
        {
            name :"podcast",
            path :'/podcast',
            icon :<GrTask className="logoofli"/>,
        },
        {
            name :"tasks",
            path :"/tasks",
            icon :<IoSettingsOutline className="logoofli"/>,
        },
        {
            name :"ai chat",
            path :"/login",
            icon :<IoNotificationsOutline className="logoofli"/>,
        },
    ]
    const sidebarsettings = [
        {
            name :"settings",
            path :"/",
            icon :<IoSettingsOutline className="logoofli"/>,
        },
        {
            name :"Notifications",
            path :"/",
            icon :<IoNotificationsOutline className="logoofli"/>,
        }
    ]
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
                            <Link className='linksof-sidebar'  to= {line.path}> {line.name} </Link>
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
                                <Link className='linksof-sidebar'  to="/" > {line.name}</Link>
                            </div>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebarvx