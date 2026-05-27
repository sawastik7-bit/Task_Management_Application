import React from 'react'
import TaskInput from './TaskInput.jsx'
import TaskList from './TaskList.jsx'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { TaskApi } from '../services/api.js'
const TaskCard = () => {
   const [title,setTitle]=useState('');
      const [description,setDescription]=useState('');

      const [tasks,setTasks]=useState([]);
      useEffect(() => {

  const fetchTasks = async () => {

    try{

      const storedAuth = JSON.parse(
        localStorage.getItem("auth")
      );

      const token = storedAuth?.token;

      const response = await axios.get(TaskApi,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      setTasks(response.data.tasks);

    }catch(error){
      console.log(error);
    }
  };

  fetchTasks();

}, []);

  return (
    <div className='task-container'>
        <div className="task-input-wrapper">
        <TaskInput title={title} setTitle={setTitle} description={description} setDescription={setDescription} tasks={tasks}  setTasks={setTasks}/>
      </div>
      
      <div className='task-list-container'>
         <TaskList  tasks={tasks}  setTasks={setTasks}/>
      </div>
     
    </div>
  )
}

export default TaskCard
