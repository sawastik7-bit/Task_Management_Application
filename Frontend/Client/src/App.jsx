import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    
 <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>

     
    </Routes>
    
    </div>
  )
}

export default App
