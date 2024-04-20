import React from "react";
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
import { useState } from "react";
function Signup() {
  const [password1, setPassword1] = useState("password");
  function showpassword1() {
    if (password1 === "password") {
      setPassword1("text");
    } else {
      setPassword1("password");
    }
  }
  const [inputUsername,setInputUsername] = useState("")
  const [inputEmail,setInputEmail] = useState("")
  const [inputPassword,setInputPassword] = useState("")
  const [users,setUsers]=useState([]);
  const handelChangeUsername =(e)=>{
      setInputUsername(e.target.value)
  }
  const handelChangeEmail =(e)=>{
      setInputEmail(e.target.value)
  }
  const handelChangePassword =(e)=>{
      setInputPassword(e.target.value)
  }
  const handelCreatUser =(e)=>{
      if(e.key === "Enter"){
          if(inputUsername && inputEmail && inputPassword){
              setUsers([...users,{
                  username :inputUsername,
                  email :inputEmail,
                  password :inputPassword,
              }])
          }
          setInputUsername("");
          setInputEmail("");
          setInputPassword("");
      }
  }
  return (
    <div className="contianerlogin">
      <img src={circle1} alt="" className="cerclelogin1" />
      <img src={circle2} alt="" className="cerclelogin2" />
      <form className="form-signup">
        <div className="title-container-ofsignup">
          <div className="nedjmacontianer">
            <img src={Nedjma} alt="" className="Nedjmasignup1" />
            <img src={Nedjma} alt="" className="Nedjmasignup2" />
          </div>
          <img src={backgroundofthelegend} alt="" className="backsignup" />
          <p className="signup-text">sign up</p>
          <div className="verifecation-of-login">
            <p className="have-account">Already have an account ?</p>
            <Link to={"/login"} className="login-link">
              login
            </Link>
          </div>
        </div>
        <div className="input-container-signup">
          <input
            type="text"
            placeholder="user name"
            className="input-signup"
            onChange={handelChangeUsername}
            onKeyDown={handelCreatUser}
            value={inputUsername}
          />
          <input
            type="email"
            placeholder="email address"
            className="input-signup"
            onChange={handelChangeEmail}
            onKeyDown={handelCreatUser}
            value={inputEmail}
          />
          <input
            type={`${password1}`}
            placeholder="password (8 characters)"
            className="input-signup"
            onChange={handelChangePassword}
            onKeyDown={handelCreatUser}
            value={inputPassword}
          />
          <img
            src={el3ayen}
            alt=""
            className="el3ayen1"
            onClick={showpassword1}
          />
          <div className="checkcon">
            <input type="checkbox" id="check" className="check-input" />
            <label htmlFor="check" className="check-label">
              I agree headspace's Terms & Condition and acknowledge the Privacy
              Policy
            </label>
          </div>
          <button className="signup" >Sign up</button>
          <p className="orsignupwith">Or sign up with </p>
          <div className="faceorgoolge1">
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

export default Signup;
