import React from 'react'
import { useState } from 'react'
export default function Testx() {
    const style={
        width :200,
        height:30,
        paddingLeft:15,
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
    const rendertheusers=()=>{
        return users.map((user)=>(
            <h2 key={user.username}>
                <li>the username is: {user.username}</li>
                <li>the email is :{user.email}</li>
                <li>the password is :{user.password}</li>
            </h2>
        ))
    }
    const [inputValue,setInputValue] = useState('');
    const [inputPasswordlogin,setInputPasswordLogin] = useState('');
    const [oldUser,setOldUser] = useState([]);
    const handelchangevalue =(e)=>{
        setInputValue(e.target.value)
    }
    const handelChangePasswordlogin =(e)=>{
        setInputPasswordLogin(e.target.value)
    }
    const  handelolduser=(e)=>{
        if(e.key==="Enter"){
            if(inputValue && inputPasswordlogin){
                setOldUser([...oldUser,{
                    value :inputValue,
                    password :inputPasswordlogin,
                }])
            }
            setInputValue("");
            setInputPasswordLogin("")
        }
    }
    const renderolduser=()=>{
        return oldUser.map((user)=>(
            <h2 key={user.value}>
                <li>the value of the input is: {user.value}</li>
                <li>the password is :{user.password}</li>
            </h2>
        ))
    }
    const [pass,setPass]=useState("password");
    function Showpassword(){
        if(pass==="password"){
            setPass( "text");
        }
        else{
            setPass( "password");
        }
    }
    return (
        <div style={{
            display: "flex",
            justifyContent:"center",
            alignItems :"center",
            height: "100vh",
            width :"100vw",
            gap:20,
            flexDirection:"column"
        }}>
            <div style={{
            display: "flex",justifyContent:"center",alignItems :"center",height: "100vh",
            width :"100vw",gap:20,flexDirection:"column"}}>
                <h1>Create User in the sign up page </h1> 
            <input 
                type="text"  placeholder='enter the value of username '
                style={style}
                onChange={handelChangeUsername}
                onKeyDown={handelCreatUser}
                value ={inputUsername}
    />
            <input 
                type="text"  placeholder='enter the value of the email '
                style={style}
                onChange={handelChangeEmail}
                onKeyDown={handelCreatUser}
                value ={inputEmail}
    />
            <input 
                type= {`${pass}`} placeholder='enter the value password' 
                style={style}
                onChange={handelChangePassword}
                onKeyDown={handelCreatUser}
                value ={inputPassword}
    />
    <button onClick={Showpassword}>show the password</button>
    {rendertheusers()}
            </div>
    <br/>
    <div style={{display: "flex",justifyContent:"center",alignItems :"center",height: "100vh",
        width :"100vw",gap:20,flexDirection:"column"}}>
            <h1>Create User in the log in page </h1> 
        <input type="text" placeholder='enter the value of username or email  '
        style={style}
        onChange={handelchangevalue}
        onKeyDown={handelolduser}
        value={inputValue}/>
        <input type={`${pass}`} placeholder='enter the value password' 
        style={style}
        onChange={handelChangePasswordlogin}
        onKeyDown={handelolduser}
        value={inputPasswordlogin}/>
    </div>
    {renderolduser()}
        </div>
    )
}

