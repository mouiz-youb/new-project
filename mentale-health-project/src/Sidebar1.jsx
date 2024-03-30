// import React, { useState } from 'react'
// import "./App.css"
// import Themoonidoctor from "../assets/Themoonidoctor.svg";
// import { Link } from 'react-router-dom';
// import homeicon from "../iconofsidebar/homeicon.svg"
// import podcasticon from "../iconofsidebar/podcasticon.svg"
// import posticon from "../iconofsidebar/posticon.svg"
// import posticon1 from "../iconofsidebar/posticon1.svg"
// import taskicon from "../iconofsidebar/taskicon.svg"
// import mooniicon from "../iconofsidebar/mooniicon.svg"
// import settingicon from "../iconofsidebar/settingicon.svg"
// import notifecationicon from "../iconofsidebar/notifecationicon.svg"
// import { LuPodcast } from "react-icons/lu";
// import { RiHome6Line } from "react-icons/ri";
// import { GrTask } from "react-icons/gr";
// import { IoSettingsOutline } from "react-icons/io5";
// import { IoNotificationsOutline } from "react-icons/io5";
// function Thesidebar() {
//   const [colors,setColors] =useState({color :"#819CC6",color1:"#819CC6",color2 :"#A7C7F9"});
//   function Changecolor(){
//     if(colors.color==="#819CC6" &&  colors.color1=="#819CC6" && colors.color2==="#A7C7F9"){
//       setColors({color :"#407BFF",color1 :"#FFFFFF", color2 :"407BFF"})
//     }
//     else{
//       setColors({color :"#819CC6",color1 :"#819CC6", color2 :"#A7C7F9"})
//     }
//     }
    
//   // function Changecolor() {
//   //   setColors(prevColors => {
//   //     // Toggle between color schemes
//   //     if (prevColors.color === "#819CC6" && prevColors.color1 === "#819CC6" && prevColors.color2 === "#A7C7F9") {
//   //       return { color: "#407BFF", color1: "#FFFFFF", color2: "#407BFF" };
//   //     } else {
//   //       return { color: "#819CC6", color1: "#819CC6", color2: "#A7C7F9" };
//   //     }
//   //   });
//   // }
//     console.log(colors);
//   return (
//     <div className="side-bar">
//       <div className="profile">
//         <div className=" contianer-image-profile ">
//           <img src= {Themoonidoctor} alt="" className="image-profile" />
//         </div>
//         <h2>usename</h2>
//         <p>description</p>
//       </div>
//       <div className="ulsidebar">
//         <p className="pmenu">menu</p>
//         <ul className='ulmenu'>
//           <div className='lineof-li'onClick={Changecolor} >
//             {/* <img src= {homeicon} alt="" className="logoofli" /> */}
//             <RiHome6Line className="logoofli" id='one' style = {{color:colors.color1,backgroundColor:colors.color2}}  />
//             <Link className='linksof-sidebar'  style = {{color:colors.color}}  >home </Link>
//           </div>
//           <div className='lineof-li' onClick={Changecolor}>
//             <img src= {posticon1} alt="" id='one0' className="logoofli" style={{backgroundColor:colors.color2}} />
//             <Link  className='linksof-sidebar'style = {{color:colors.color}} >posts </Link>
//           </div>
//           <div className='lineof-li' onClick={Changecolor}>
//             {/* <img src= {podcasticon} alt="" className="logoofli" /> */}
//             <LuPodcast className="logoofli" id='one1' style = {{color:colors.color1,backgroundColor:colors.color2}}/>
//             <Link  className='linksof-sidebar'style = {{color:colors.color}} >podcast </Link>
//           </div>
//           <div className='lineof-li' onClick={Changecolor}>
//             {/* <img src= {taskicon} alt="" className="logoofli" /> */}
//             <GrTask  className="logoofli"  id='one2'style = {{color:colors.color1,backgroundColor:colors.color2}}/>
//             <Link  className='linksof-sidebar'style = {{color:colors.color}} >tasks </Link>
//           </div>
//           <div className='lineof-li' onClick={Changecolor}>
//             <img src= {mooniicon} alt="" id='one3' className="logoofli" style = {{color:colors.color1,backgroundColor:colors.color2}}/>
//             <Link  className='linksof-sidebar' style = {{color:colors.color}}>ai chat </Link>
//           </div>
//         </ul>
//       </div>
//       <div className="settings">
//         <p className="paccount">account</p>
//         <ul className='ulsettings'>
//           <div className='lineof-li' onClick={Changecolor}>
//             {/* <img src= {settingicon} alt="" className="logoofli" /> */}
//             <IoSettingsOutline id='one4'  className="logoofli" style = {{color:colors.color1,backgroundColor:colors.color2}}/>
//             <Link  className='linksof-sidebar' style = {{color:colors.color}}>settings  </Link>
//           </div>
//           <div className='lineof-li' onClick={Changecolor}>
//             {/* <img src= {notifecationicon} alt="" className="logoofli" /> */}
//             <IoNotificationsOutline  id='on5'className='logoofli' style = {{color:colors.color1,backgroundColor:colors.color2}}/>
//             <Link  className='linksof-sidebar' style = {{color:colors.color}}>Notifications  </Link>
//           </div>
//         </ul>
//       </div>
//     </div>
//   )
//   }

// export default Thesidebar