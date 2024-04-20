import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import Tv1 from "../iconofsidebar/Tv1.svg"
function HomeMiddelpart() {
    const[search,setSearch]=useState("");
    const handelSearch=(e)=>{
        setSearch(e.target.value);
    }
    return (
        <div className='HomeMiddelpart'>
            <div className='nav-home'>
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
            <div className="item-contianer">
                <div className="item-home"></div>
                <div className="item-home"></div>
                <div className="item-home"></div>
                <div className="item-home"></div>
            </div>
        </div>
    )
}

export default HomeMiddelpart
// gridArea :"p1"
// gridArea :"p2"
// gridArea :"p3"
{/* <div className='dercreption-part'>
                    <p style={{color :"#190482"}}>Relieve Head Noises With </p>
                    <i style={{color :"#407BFF",}}>Relievo</i>
                </div>
                <div className='end-part-home-item'>
                    <div className='rotate-text'>
                        
                    </div>
                    <div className='tv1'>
                        
                    </div>
                    <div className='end-text'></div>
                </div> */}