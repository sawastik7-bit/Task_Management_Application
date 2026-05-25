import React, { useState } from 'react'
import axios from 'axios';
import {registerApi } from '../services/api.js';
import { useNavigate,Link } from 'react-router-dom';
const Register = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const navigate=useNavigate();

  const handleRegister=async()=>{
try{
  if(!name || !email || !password){
    alert("please enter all of the fields");
    return;
  }
const response = await axios.post(
  registerApi,
  { name, email, password },
  { headers: { 'Content-Type': 'application/json' } }
);

alert(response.data.message || "Registered successfully");
navigate('/login');

}catch(error){
    alert(error.response?.data?.message || "Registration failed");
    return;
  }
  }
    
  return (
    <div className='parent'>
      <div className='login-container'>
        <div className='image-container'>
            <img src="https://img.freepik.com/premium-photo/art-japan-background_839182-17143.jpg" alt="" />
        </div>
        <div className='details-container'>
            <div className='title'><img src="" alt="" />
            <h1>Task Hub</h1>
            </div>
            <h2>Welcome to Task Hub! <br /><p>please sign-in and start the adventure</p></h2>
            <input type="text" placeholder='Name' value={name} onChange={(e) =>{setName(e.target.value) }}/>
            
            <input type="email" name="" placeholder='Email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <input type="password" name="" placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
            <button onClick={()=>{
              handleRegister();
            }}>Sign up</button>
        </div> 
      </div>
    </div>
  )
}

export default Register;

