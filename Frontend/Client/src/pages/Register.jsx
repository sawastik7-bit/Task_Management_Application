import React, { useState } from 'react'

const Register = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
    
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
            <button>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Register
