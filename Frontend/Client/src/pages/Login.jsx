import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { LoginApi } from '../services/api';
import { AuthContext } from '../context/AuthContext';
const Login = () => {

// const navigate=useNavigate();


  const [loginEmail,setLoginEmail]=useState('');
  const [loginPassword,setLoginPassword]=useState('');


const {login}=useContext(AuthContext);




  const handleLogin=async()=>{
try{
  if(!loginEmail || !loginPassword){
    alert("Please enter all of the fields correctly");
    return;
  }
  const response=await axios.post(LoginApi,
    {
      email:loginEmail,
      password:loginPassword
    },{
      headers:{
        'Content-Type':'application/json'
      }
    }
  );

  
  if(!response){
    alert("Login request failed");
    return;
  }
 

  await login(response.data.user,response.data.token);

 
  
// navigate("/dashboard")



}catch(error){
  alert(error.response?.data?.message || "Login failed");
  return;
}


  }
  return (
    <div className='login-page-parent'>
      <div className='login-container'>
        <h1>Login</h1>
        <p>Hey enter your details to sign in your account</p>
        <input type="email" placeholder='Email' value={loginEmail}  onChange={(e)=> setLoginEmail(e.target.value)}/>
        <input type="password"  placeholder='Password' value={loginPassword}  onChange={(e)=>setLoginPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login In</button>
        <p>Don't have an account ?<Link to ="/register">Sign up</Link></p>
      </div>
      
    </div>
  )
}

export default Login
