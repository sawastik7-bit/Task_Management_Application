import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    
    </div>
  )
}

export default App
