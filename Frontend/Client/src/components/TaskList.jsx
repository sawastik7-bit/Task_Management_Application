import React from "react";

import { TaskApi } from "../services/api";
import SingleTaskCard from "./SingleTaskCard";
import axios from "axios";
const TaskList = ({tasks,setTasks}) => {


 
const authHeader=JSON.parse(localStorage.getItem("auth"));

  const handleDelete=async(taskId)=>{
try{
  const response=await axios.delete(
    `${TaskApi}/${taskId}`
    ,{
    headers:{
      'Content-Type':"application/json",
      "Authorization":`Bearer ${authHeader.token}`
    }
  })
if(!response){
  alert(response?.data?.message);
  return;
}
setTasks((prev)=>
  prev.filter((task)=>task._id !==taskId)
);
alert("task deleted successfully");

}catch(error){
  alert(error.response?.data?.message || "server error");
}return;
  }
  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <SingleTaskCard
          key={task._id}
          taskId={task._id}
          title={task.title}
          description={task.description}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;