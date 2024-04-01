import React, { useEffect, useState } from "react";
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
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    name1: "",
    age1: "",
    password1: "",
  });
  const adduser = () => {
    setUser({
      name1: name,
      age1: age,
      password1: password,
    });
  };
  console.log(user);
  const [count ,setCount]=useState(0)
  const update = () => setCount(prev =>  prev + 1 )
  const clear =()=>{
    setCount(0)
  }
  useEffect(()=>{
    console.log("effect");
  },[count])
  
  // The use case of ...prevColor typically arises in scenarios where 
  // you need to update the state of an object while 
  // preserving its existing properties. This is commonly
  //  encountered when working with React's useState hook, where you're 
  //  updating a state object that contains multiple properties.
  const [color, setColor] = useState({ button1: "red", button2: "red" });
  const updateColor = (buttonId) => {
    setColor(prevColor => ({
      ...prevColor,
      [buttonId]: prevColor[buttonId] === "red" ? "green" : "red"
    }));
  };
  const [colors,setColors]=useState({
    button :"red",
    button1 :"red",
    button2 :"red",
    button3 :"red",
    button4 :"red",
  })
  const UpdatEColors =(buttonIdx)=>{
    setColors(prevColors =>({
      ...prevColors,
      [buttonIdx] :prevColors[buttonIdx]=== "red"? "green": "red"
    }))
  }
  // console.log("cccc",...colors);
  // console.log({...colors});
  console.log("colors",colors);
  const [value ,setValue]= useState("");
  const Addproduct =()=>{
    setValue(value)
  }
  console.log("value",value);
   
  // for the input write when we write and press enter we add a new item in the array
  // the logique of this functionnality is to things:
  // nember one is : the input data who we are writing in the input  field this data  will be saved into the 
  // inputValue of the state  variable .
  //  number two is : when we press the enter key we stock the inputValue into the items array  inside our state varibale
  const [inputValue, setInputValue] = useState('');
  const [items,setItems]=useState([]);
  const handelChange =(e)=>{
    setInputValue(e.target.value)
  }
  const handleEnterPress=(e)=>{
    if(e.key === "Enter"){
      if(inputValue){
        setItems([
          ...items,
          {
            name:  inputValue,
            complete : false,
            quantity :1
          
        }])
      }
      setInputValue('');
    }
  }
  const rendertheintem=()=>{
    return items.map((item)=>(
        <h2 key={item.name}>
          {item.name}
        </h2>
    ))
  }
  // console.log("product",product),
  // console.log("product",product);
  // const 
  // useEffect(()=>{},[]); :that is the syntaxe of the useffect
  // const [post,setPost]=useState()
  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(response => response.json())
  // .then(data => setPost(data))
  const [x,setX]=useState("red");
  const  Changecolor=()=>{
    setX(x==="red"?"blue":"red") 
  }
  const [i,setI]=useState("block");
  function hidden(){
    if(i==="block"){
      setI("none")
    }
    else{
      setI( "block")
    }
  }
  // const [activeLink, setActiveLink] = useState(null); // Initialize active link state
  const [active,setActive]=useState(null)
  const links=[
    {
      linkname: "explore",
      className: "littel-nav-in-the-post"
    },
    {
      linkname: "saved posts",
      className: "littel-nav-in-the-post"
    }
  ]
  const postslinks = [
    {
      linkname: "explore",
      className: "littel-nav-in-the-post"
    },
    {
      linkname: "saved posts",
      className: "littel-nav-in-the-post"
    }
  ];
  const handelchange =(e)=>{
    setActive(e)
  }
  // console.log(`${postslinks.className} ${activeLink === e ? "active" : ""}`)
  // const handleLinkClick = (index) => {
  //   setActiveLink(index); // Update active link index
  // };
  const[xcolor,setXcolor]=useState("littel-nav-in-the-post");
  function handelChangez(){
    if(xcolor==="littel-nav-in-the-post"){
      setXcolor("active")
    }
    else{
      setXcolor("littel-nav-in-the-post")
    }
  }
  const hidepart =[
    {
      icon :<GoBookmark className='iconhide'/>,
      name:"save"
    },
    {
      icon :<IoIosShareAlt className='iconhide'/>,
      name:"share"
    },
    {
      icon :<GoEyeClosed className='iconhide'/>,
      name:"hide"
    },
  ]
  const testpostnav =[
    {
      img :Themoonidoctor,
      username: "username",
      timeofposting :"time of posting ",
      icon :<SlOptions />,
      heal :"heal",
      anxiety :"anxiety"
    }
  ]
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const [xx,setXx]=useState(null);
  const colorchanges =(link)=>{
    setXx(link)
  }
  const  sideBarItems = [
    {
        name :"home",
        path :"#",
        icon :<RiHome6Line className= {`logoofli ${xx == "home" ? "activx" :"" }`}
        onClick={ ()=> colorchanges("home")} htmlFor ="home"/>,
    },
    {
        name :"posts",
        path :"#",
        icon :<LuPodcast className= {`logoofli ${xx == "posts" ? "activx"  :""}`}
        onClick={ ()=> colorchanges("posts")} htmlFor =" posts"  /> ,
    },
    {
        name :"podcast",
        path :'#',
        icon :<GrTask className= {`logoofli ${xx == "podcast" ? "activx"  :""}`}
        onClick={ ()=> colorchanges("podcast")} htmlFor ="podcast"/>,
    },
    {
        name :"tasks",
        path :"#",
        icon :<IoSettingsOutline className= {`logoofli ${xx == "tasks" ? "activex1"  :""}`}
        onClick={ ()=> colorchanges("tasks")} htmlFor ="tasks"
        />,
    },
    {
        name :"ai chat",
        path :"#",
        icon :<IoNotificationsOutline className={`logoofli ${xx == "ai chat " ? "activx"  :""}`}
        onClick={ ()=> colorchanges("ai chat")} htmlFor ="ai chat"/>,
    },
]
console.log("xx",xx)
// Update active link index
  return (
    
    <div>
        <div className='ulsidebar'>
          <p className="pmenu">menu</p>
            <ul className='ulmenu'>
              {sideBarItems.map((line,index)=>(
                <div key={index} className='lineof-li'>
                {line.icon}
                <Link 
                  className= {`linksof-sidebar ${xx == line.name ? "activx" : "" }`} 
                  onClick={ ()=> colorchanges(line.name)}
                  to= {line.path} id = {line.name}> {line.name} </Link>
                </div>
              ))}
            </ul>
        </div>
      <div className="sidebartest">
        <div className= {`sidetest ${xx == "home" ? "activx" : "" }`} 
        onClick={ ()=> colorchanges("home")}><a href="#" style={{textDecoration :"none" ,
        color: "#A7C7F9",}}>home</a></div>
        <div className= {`sidetest ${xx == "about" ? "activx" :  ""}`} 
        onClick={ ()=> colorchanges("about")}><a href="#" style={{textDecoration :"none" ,
        color: "#A7C7F9",}}>about us</a></div>
        <div className= {`sidetest ${xx == "contact" ? "activx" : "" }`} 
        onClick={ ()=> colorchanges("contact")}><a href="#" style={{textDecoration :"none" ,
        color: "#A7C7F9",}}>contact us </a></div>
        <div className= {`sidetest ${xx == "posts" ? "activx" :  ""}`} 
        onClick={ ()=> colorchanges("posts")}><a href="#" style={{textDecoration :"none" ,
        color: "#A7C7F9",}}>posts</a></div>
        <div className= {`sidetest ${xx == "tasks" ? "activx" :  ""}`} 
        onClick={ ()=> colorchanges("tasks")}><a href="#" style={{textDecoration :"none" ,
        color: "#A7C7F9",}}>tasks</a></div>
      </div>
      <div className="sidebar">
      <div
        className={`sidebar-link ${activeLink === 'home' ? 'active' : ''}`}
        onClick={() => handleLinkClick('home')}
      >
        <a href="#">Home</a>
      </div>
      <div
        className={`sidebar-link ${activeLink === 'about' ? 'active' : ''}`}
        onClick={() => handleLinkClick('about')}
      >
        <a href="#">About Us</a>
      </div>
      <div
        className={`sidebar-link ${activeLink === 'contact' ? 'active' : ''}`}
        onClick={() => handleLinkClick('contact')}
      >
        <a href="#">contact Us</a>
      </div>
    </div>
        {
          testpostnav.map((item,index)=>(
            <div key={index}className="test">
              <img src={item.img} alt="" style={{width :"30px"}}  />
              <p> {item.username} </p>
              <p> {item.timeofposting} </p>
              <div>
                <button> {item.heal} </button>
                <button> {item.anxiety} </button>
              </div>
              {item.icon}
              <div style={{
                    display :"flex",
                    justifyContent :"center",
                    alignItems :"center",
                    flexDirection :"column",
                    gap :"5px",
                    width :"100px",
                    border :"1px solid black",
                    position :"relative",
                    left: "-24%",
                    top: "45px",
                  }}>
                    
                {
                  hidepart.map((line,index)=>(
                  <div key={index} style={{
                    display :"flex",
                    justifyContent :"center",
                    alignItems :"center",
                    flexDirection :"row",
                    gap :"5px"
                  }}>
                    {line.icon}
                    <p> {line.name} </p>
                  </div>
                  ))
                }
              </div>
            </div>
              
          ))
        }
    
      <div style={{
        width :"200px",
        height :"100px",
        overflowY:"scroll",
      }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             In provident aspernatur eveniet corporis quisquam ab 
             architecto ullam temporibus minus? Maxime voluptatem 
             magnam sint atque repudiandae beatae ad ratione quas a.
      </div>
      {/* =========================================================================== */}
      <div className="testconpodcast">
        <div style={{border :"2px solid "}} className="podcastinposttets">
          <div className="void1"></div>
          <div className="content">
          <div className="sudiv"><p className="sup">X</p></div>
            <h3 className="h3">podcast name</h3>
            <p className="pd">podcast  description</p>
            <div className="btns">
              <p>timeofposting</p>
              <CiPlay1/>
            </div>
          </div>
        </div>
        <div style={{border :"2px solid "}} className="podcastinposttets">
          <div className="void1"></div>
          <div className="content">
          <div className="sudiv"><p className="sup">X</p></div>
            <h3 className="h3">podcast name</h3>
            <p className="pd">podcast  description</p>
            <div className="btns">
              <p>timeofposting</p>
              <CiPlay1/>
            </div>
          </div>
        </div>
        <div style={{border :"2px solid "}} className="podcastinposttets">
          <div className="void1"></div>
          <div className="content">
          <div className="sudiv"><p className="sup">X</p></div>
            <h3 className="h3">podcast name</h3>
            <p className="pd">podcast  description</p>
            <div className="btns">
              <p>timeofposting</p>
              <CiPlay1/>
            </div>
          </div>
        </div>
      </div>
      <div>
      {postslinks.map((link, index) => (
        <Link
          key={index}
          className={`${link.className} ${activeLink === index ? "active" : ""}`}
          onClick={() => handleLinkClick(index)}
        >
          {console.log("index",index)}
          {link.linkname}
        </Link>
      ))}
    </div>
      <div>
      {postslinks.map((link, index) => (
        <Link
          key={index}
          className={xcolor}
          onClick={handelChangez}
        >
          {console.log("index",index)}
          
          {link.linkname}+2
        </Link>
      ))}
    </div>
      <div>
        <div>
        <label htmlFor="n">hello :...............</label>
        <input type="checkbox" id="n" />
        </div>
      {postslinks.map((link, index) => (
        <Link
          key={index}
          className={link.className+(activeLink === index ? " active" : "")}
          onClick={() => handleLinkClick(index)}
        >
          {link.linkname}
        </Link>
      ))}
    </div>
      <div>
        <h1  style={{display :i}}>name1 </h1>
        <button onClick={hidden}>para hidden </button>
      </div>
      <ul>
        <li onClick={Changecolor}style={{cursor:"pointer",color:x}}>home</li>
        <li onClick={Changecolor}style={{cursor:"pointer",color:x}}>about</li>
      </ul>
      <div>
        <h1 className="test"> {count} </h1>
        <button onClick={update}><h2>Click me</h2></button>
        <button onClick={clear}><h2>Click me to clear</h2></button>
      </div>

      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="age"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={adduser}>submit</button>
      <div>
        <h1>
          <ul>
            <li> {user.name1} </li>
            <li> {user.age1} </li>
            <li> {user.password1} </li>
            <p>without user</p>
            <li> {name} </li>
            <li> {age} </li>
            <li> {password} </li>
          </ul>
        </h1>
      </div>
      <br />
      <div>
      <button onClick={() => updateColor("button1")} style={{ color: color.button1 }}>
        Click me to change the color
      </button>
      <button onClick={() => updateColor("button2")} style={{ color: color.button2 }}>
        Click me to change the color
      </button>
    </div>
    <ul>
      <li onClick={()=>UpdatEColors("button")} style={{color:colors.button ,cursor:"pointer"}}>home</li>
      <li onClick={()=>UpdatEColors("button1")} style={{color:colors.button1 ,cursor:"pointer"}}>about us </li>
      <li onClick={()=>UpdatEColors("button2")} style={{color:colors.button2 ,cursor:"pointer"}}>contact us </li>
      <li onClick={()=>UpdatEColors("button3")} style={{color:colors.button3 ,cursor:"pointer"}}>posts</li>
      <li onClick={()=>UpdatEColors("button4")} style={{color:colors.button4 ,cursor:"pointer"}}>tasks</li>
    </ul>
    <br/>
    <div style={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      flexDirection: "column",
      gap :20,
      padding: 10,
      border: "2px solid red ",
    }}>
      <h2>
        {JSON.stringify(items)}
      </h2>
      {/* the input to inser new item in the array */}
      {/* i use to state one for the  value and another for updating it */}
      {/* we have to envent listner the first for checking the change into the input and this change is when 
      we isert a new  item in our array */}
      {/* the second is to verify the enter key  if he pressed or not */}
    <input type="text" placeholder="add a product 2 " 
    style={{width:300,height:30,fontSize :20,paddingLeft :10,}} 
    onChange={handelChange}
    value={inputValue}
    onKeyDown={handleEnterPress} />
    <button onClick={()=>{
      setInputValue("")
    }}>click me to clear  {inputValue} </button>
    </div>
    <div>
      {rendertheintem()}
    </div>
      </div>
  )
}

export default Test;
// const updateColor = () => {
//   setCar(previousState => {
//     return { ...previousState, color: "blue" }
//   });
// }