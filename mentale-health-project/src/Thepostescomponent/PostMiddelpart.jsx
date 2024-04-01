import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { SlOptions } from "react-icons/sl";
import Themoonidoctor from "../assets/Themoonidoctor.svg"
import { GoBookmark } from "react-icons/go";
import { IoIosShareAlt } from "react-icons/io";
import { GoEyeClosed } from "react-icons/go";

function PostMiddelpart() {
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
  const postslinks=[
    {
      linkname:"explore",
      className:"littel-nav-in-the-post"
    },
    {
      linkname:"saved posts",
      className:"littel-nav-in-the-post active"
    }
  ]
  const postescontent =[
    {
      img :Themoonidoctor,
      usernmae :"usename",
      timeofposting:"time of posting",
      content1 :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus dolore impedit quae ad aliquid accusantium eaque excepturi deleniti, recusandae quas aliquam distinctio, praesentium dicta iusto incidunt assumenda aut exercitationem.",
      content2 :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus dolore impedit quae ad aliquid accusantium eaque excepturi deleniti, recusandae quas aliquam distinctio, praesentium dicta iusto incidunt assumenda aut exercitationem.",
    },
    {
      img :Themoonidoctor,
      usernmae :"usename",
      timeofposting:"time of posting",
      content1 :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus dolore impedit quae ad aliquid accusantium eaque excepturi deleniti, recusandae quas aliquam distinctio, praesentium dicta iusto incidunt assumenda aut exercitationem.",
      content2 :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus dolore impedit quae ad aliquid accusantium eaque excepturi deleniti, recusandae quas aliquam distinctio, praesentium dicta iusto incidunt assumenda aut exercitationem.",
    },
    {
      img :Themoonidoctor,
      usernmae :"usename",
      timeofposting:"time of posting",
      content1 :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus dolore impedit quae ad aliquid accusantium eaque excepturi deleniti, recusandae quas aliquam distinctio, praesentium dicta iusto incidunt assumenda aut exercitationem.",
      content2 :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus dolore impedit quae ad aliquid accusantium eaque excepturi deleniti, recusandae quas aliquam distinctio, praesentium dicta iusto incidunt assumenda aut exercitationem.",
    },
    {
      img :Themoonidoctor,
      usernmae :"usename",
      timeofposting:"time of posting",
      content1 :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus dolore impedit quae ad aliquid accusantium eaque excepturi deleniti, recusandae quas aliquam distinctio, praesentium dicta iusto incidunt assumenda aut exercitationem.",
      content2 :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus dolore impedit quae ad aliquid accusantium eaque excepturi deleniti, recusandae quas aliquam distinctio, praesentium dicta iusto incidunt assumenda aut exercitationem.",
    }
  ]
  const [hide,setHide]=useState("none");
  const hendelSidplay=()=>{
    if(hide==="none"){
      setHide("block");
    }
    else{
      setHide( "none");
    }
  }
  const [hidex,setHideX] = useState("none");
  const handelclick=(index)=>{
    setHideX(index);
  }
  return (
    <div className='post-middlepart'>
      <div className="post-titel">
        <p className="text-post-titel">
          Find Relatable Posts
        </p>
      </div>
      <div className="post-content">
        <div className="post-links">
          {postslinks.map((link,index)=>(
            <Link key={index} className="littel-nav-in-the-post" > {link.linkname} </Link>
          ))}
            {/* variale = "condition"? value if treu :value if false */}
          <div className='arrow-down'>
            <button className='anxiety'>Anxiety</button>
            <SlArrowDown className='icon-anxiety' />
          </div>
        </div>
        <div className="posted">
          {postescontent.map((item,index)=>(
              <div className="postcontainer" key={index}>
                <div className="profileofthepost">
                  <img src= {item.img} alt=""  className='image-of-user' />
                  <p style={{fontSize:"12px"}} className='text-username-p'> {item.usernmae} </p>
                  <p style={{fontSize:"12px"}} className='text-time-p'> {item.timeofposting} </p>
                  <div className="button-hA">
                    <button className='heal'>heal</button>
                    <button className='banxiety'>Anxiety</button>
                  </div>
                  <SlOptions className='treepoint' onClick={hendelSidplay}/>
                  <div className="hidecontent" style={{"display": hide}}>
                    {hidepart.map((item,index) =>(
                      <div className="hidecontianer"key={index}
                      onClick={()=>handelclick(item.id)}>
                      {item.icon}
                      <p className="itemname" >{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='contentpost'>
                  <p className='content-post-text1'> {item.content1} </p>
                  <p className='content-post-text2'> {item.content2} </p>
                </div>
              </div>
          ))}
      </div>
    </div>
  </div>
  )
}

export default PostMiddelpart