import React from "react";
import "../App.css";
import Nedjma from "../assets/Nedjma.svg";
import Themoonidoctor from "../assets/Themoonidoctor.svg";
import Themoonipasion from "../assets/Themoonipasion.svg";
import Titelbackground from "../assets/Titelbackground.svg";
import circle1 from "../assets/circle1.svg";
import circle2 from "../assets/circle2.svg";
import circle3 from "../assets/circle3.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
function Thefirstpage() {
  return (
    <div className="contianer-of-the-role-page">
      <img src= {circle1} alt="" className="cercle1" />
      <img src= {circle2} alt="" className="cercle2" />
      <img src= {circle3} alt="" className="cercle3" />
      <div className="container-ofthetitel">
        <img src= {Titelbackground} alt="" className="backgroundtitel" />
        <p className="titel">What is your role in Relievo ?</p>
        <img src={Nedjma} alt="" className="nedjma1" />
        <img src={Nedjma} alt="" className="nedjma2" />
      </div>
      <div className="container-of-moonies">
        <div className="passion">
          <img src= {Themoonipasion} alt="" className="paisson-image" />
          <p className="text-passion">passion</p>
        </div>
        <div className="doctor">
          <img src= {Themoonidoctor} alt="" className="doctor-image" />
          <p className="text-doctor">doctor</p>
        </div>
      </div>
    </div>
  );
}

export default Thefirstpage;
