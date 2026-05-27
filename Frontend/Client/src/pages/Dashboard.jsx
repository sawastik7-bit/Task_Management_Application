import React from 'react'
import Navbar from '../components/Navbar'
import TaskCard from '../components/TaskCard'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {



  return (
 <div className="dashboard">
   <Navbar />
   <div className="dashboard-body">
      <TaskCard />
   </div>
</div>
  )
}

export default Dashboard
