import React from "react";
import axios from "axios";
import { TaskApi } from "../services/api";

 
const TaskInput = ({
  title,
  setTitle,
  description,
  setDescription,
  setTasks,

}) => {
  const handleInput = async () => {
    if (!title || !description) {
      alert("Enter all fields");
      return;
    }

    try {
      const storedAuth = JSON.parse(
        localStorage.getItem("auth")
      );

      
      const token = storedAuth?.token;

      if (!token) {
        alert("Please login first");
        return;
      }

      const response = await axios.post(
        TaskApi,
        {
          title,
          description
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      if(!response){
        alert("error in adding the task");
      }
setTasks((prev)=>[
  response.data.task,
  ...prev
]);

      setTitle("");
      setDescription("");

      alert("Task added successfully");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Error while adding task"
      );
    }
  };

  
  return (
    <div className="taskinput-container">
      <h2>Add New Task</h2>

      <label>Title</label>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <label>Description</label>
      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      ></textarea>

      <button onClick={handleInput}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;