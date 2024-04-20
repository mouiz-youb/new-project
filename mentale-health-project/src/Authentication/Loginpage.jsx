import React, { useState } from "react";
import circle1 from "../assets/circle1.svg";
import circle2 from "../assets/circle2.svg";
import Nedjma from "../assets/Nedjma.svg";
import backgroundofthelegend from "../assets/backgroundofthelegend.svg";
import Titelbackground from "../assets/Titelbackground.svg";
import { Link } from "react-router-dom";
import el3ayen from "../assets/el3ayen.svg";
import facebookicon from "../assets/facebookicon.svg";
import googleicon from "../assets/googleicon.svg";
import Themoonipasion from "../assets/Themoonipasion.svg";
function Loginpage() {
  const [password, setPassword] = useState("password");
  function showpassword() {
    if (password === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  const [inputUsername,setInputUsername]= useState("");
  const [inputEmail,setInputEmail]= useState("");
  const [inputPassword,setInputPassword]= useState("");
  const [user,setUser]= useState([]);
  const handelChangeUsername =(e)=>{
    setInputUsername(e.target.value)
  }
  const handelChangeEmail =(e)=>{
    setInputEmail(e.target.value)
  }
  const handelChangePassword =(e)=>{
    setInputPassword(e.target.value)
  }
  const CreatUser =(e)=>{
  if(e.key === "Enter"){
    if(inputUsername && inputEmail && inputPassword){
      setUser([...user,{
        username : inputUsername ,
        email: inputEmail,
        password: inputPassword,
      }])
      setInputUsername("");
      setInputPassword("");
      setInputEmail("")
    }
  }

  }
  return (
    <div className="contianerlogin">
      <img src={circle1} alt="" className="cerclelogin1" />
      <img src={circle2} alt="" className="cerclelogin2" />
      <form className="login-form">
        <div className="title-container">
          <img src={backgroundofthelegend} alt="" className="backlegend" />
          <img src={Nedjma} alt="" className="nedjmaloign1" />
          <img src={Nedjma} alt="" className="nedjmaloign2" />
          <legend className="legend-login">log in </legend>
          <p className="how">
            How to be relieved ?
            <Link className="signlink" to="/signup">
              Sign up for free
            </Link>
          </p>
        </div>
        <div className="inputs-container">
          <input
            type="email"
            placeholder="Email Address or User Name"
            className="login-input"
            required
            onChange={handelChangeEmail}
            onKeyDown={CreatUser}
            value={inputEmail}
          />
          <input
            type={`${password}`}
            placeholder="Password"
            className="login-input"
            required
            onChange={handelChangePassword}
            onKeyDown={CreatUser}
            value={inputPassword}
          />
          <img
            src={el3ayen}
            alt=""
            className="el3ayen"
            onClick={showpassword}
          />
          <p className="forget">Forgot password ?</p>
          <button type="submit" className="login-button">
            log in
          </button>
          <p className="or">Or log in with </p>
          <div className="faceorgoolge">
            <button className="button-of-facebook">
              <img src={facebookicon} alt="" className="facebook-button" />
            </button>
            <button className="button-of-google">
              <img src={googleicon} alt="" className="google-button" />
            </button>
          </div>
        </div>
      </form>
      <img src={Themoonipasion} alt="" className="mooni-of-login" />
    </div>
  );
}

export default Loginpage;
