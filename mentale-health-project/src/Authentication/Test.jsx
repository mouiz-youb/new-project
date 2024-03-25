import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Test1 from "./Test1";
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
const [color,setColor]=useState('red');
function change(){
  if(color==="red"){
    setColor("green");
  }
  else{
    setColor("red")
  }
}
const [selectedColor, setSelectedColor] = useState(null);

const handleClick = (color) => {
  setSelectedColor(color);
};
const [colorx,setColorx]=useState("red");
// const  pushColors=()=>{
//   if
// }

  return (
    <div>
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
        <ul className="listof-tast">
          <li className="list-itemof-test" onClick={change} style={{color:color}}>home </li>
          <li className="list-itemof-test" onClick={change} style={{color:color}}>posts</li>
          <li className="list-itemof-test">podcast</li>
          <li className="list-itemof-test">tasks</li>
          <li className="list-itemof-test">ai chat</li>
        </ul></div>
        {/* <psuedoElement>asdkjhajs</psuedoElement> */}
        {/* <Test1> hello world</Test1> */}
        <div>
      <button onClick={() => handleClick("red")}>Select Red</button>
      <button onClick={() => handleClick("blue")}>Select Blue</button>
      <button onClick={() => handleClick("green")}>Select Green</button>
      <div>
        You selected: {selectedColor}
      </div>
    </div>
    <div style={{padding : 20}}>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact us</li>
        </ul>
        <h1>
          hello world
        </h1>
    </div>
      </div>
  )
}

export default Test;
