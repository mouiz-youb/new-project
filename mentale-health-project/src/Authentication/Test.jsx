import React, { useEffect, useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import axios from "axios"; 
import Themoonidoctor from "../assets/Themoonidoctor.svg"
import { SlOptions } from "react-icons/sl";
import { GoBookmark } from "react-icons/go";
import { IoIosShareAlt } from "react-icons/io";
import { GoEyeClosed } from "react-icons/go";
import { LuPodcast } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { GrTask } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
function Test() {
  const [width, setWidth] = useState(100); // Largeur de la boîte
    const [height, setHeight] = useState(100); // Hauteur de la boîte
    const [state  , setState] = useState(0);
    const [value ,setValue ]=useState(100)
    const changeWidth = (event) => {
        setWidth(event.target.value);
    };

    const changeHeight = (event) => {
        setHeight(event.target.value);
    };
    const [x,setX]=useState(0);
    const handelchange1= (event)=>{
      setX(event.target.value);
    }
    const [inputText , setInputText ] = useState("");
    const handelchange2 =(e)=>{
      setInputText(e.target.value);
    }
    const [tasks,setTasks]=useState([]) ;
    const AddTasks= (e) =>{
      if(e.key === 'Enter'){
        if(inputText){
          setTasks ([...tasks,
          {task :inputText,}
          ])
        }
        setInputText("");
        setState(prev => prev +1)
      }
    }
    // setValue(prev => prev /state)
    const rendertheusers=()=>{
      return users.map((user)=>(
          <h2 key={user.username}>
              <li>the username is: {user.username}</li>
              <li>the email is :{user.email}</li>
              <li>the password is :{user.password}</li>
          </h2>
      ))
  }
    const rendertasks =() =>{
      return tasks.map((task,index)=>(
        <h2 key={index}>
          <p> The tasks is : {task.task} </p>
        </h2>
      ))
    }
  return (
    <div className="test-grid">
      <div className="test-item"></div>
      <div className="test-item"></div>
      <div className="test-item"></div>
      <div className="test-item"></div>
    </div>
    // <div className='container'>
    //         <div style={{display :'flex',
    //       justifyContent :"center",
    //       alignItems :"center",
    //       flexDirection :'column',
    //       gap :"20px"}}>
    //         <label > {} </label>
    //         <input type="text"
    //         onChange={handelchange2}
    //         onKeyDown={AddTasks}/>
    //         <label htmlFor="hi">The value is :{x} </label>
    //         <input type="range"
    //         name="range"
    //         id="hi" 
    //         max={100} 
    //         min={0} 
    //         step={0}
    //         onChange={handelchange1}
    //         value={x}
    //         style={{width :"200px",
    //         height :"5px"}}/>
    //         </div>
    //         {rendertasks()} 
    //         <h2> {state} </h2>
    //         {/* <span>and the value of the range counter is :{value}</span> */}
    //         <h2>Bienvenue sur KindaCode.com</h2>
    //         <h4>Largeur de la boîte : {width}px</h4>
    //         <input
    //             type='range'
    //             onChange={changeWidth}
    //             min={1}
    //             max={400}
    //             step={1}
    //             value={width}
    //             className='custom-slider'
    //         />
    //         <h4>Hauteur de la boîte : {height}px</h4>
    //         <input
    //             type='range'
    //             onChange={changeHeight}
    //             min={1}
    //             max={400}
    //             step={1}
    //             value={height}
    //             className='custom-slider'
    //         />
    //         <div
    //             className='blue-box'
    //             style={{ width: `${width}px`, height: `${height}px` }}
    //         ></div>
    //         <div className="test-grid">
    //           <div className="test-item"></div>
    //         </div>
    //     </div>
  )
}

export default Test;
// const updateColor = () => {
//   setCar(previousState => {
//     return { ...previousState, color: "blue" }
//   });
// }