import React, {
  useRef
} from "react";

import axios from "axios";

import { TaskApi }
from "../services/api";

const TaskInput = ({
  title,
  setTitle,
  description,
  setDescription,
  setTasks,
}) => {

  const titleRef =
    useRef(null);

  const descriptionRef =
    useRef(null);

  const handleInput =
    async () => {

    if(!title || !description){
      alert(
        "Enter all fields"
      );
      return;
    }

    try {

      const storedAuth =
        JSON.parse(
          localStorage.getItem(
            "auth"
          )
        );

      const token =
        storedAuth?.token;

      if(!token){
        alert(
          "Please login first"
        );
        return;
      }

      const response =
        await axios.post(
          TaskApi,
          {
            title,
            description
          },
          {
            headers:{
              "Content-Type":
              "application/json",

              Authorization:
              `Bearer ${token}`
            }
          }
        );

      if(!response){
        alert(
          "Error adding task"
        );
        return;
      }

      setTasks((prev)=>[
        response.data.task,
        ...prev
      ]);

      setTitle("");
      setDescription("");

      titleRef.current.focus();

      alert(
        "Task added successfully"
      );

    } catch(error){

      alert(
        error.response?.data?.message ||
        "Error while adding task"
      );
    }
  };

  return (

    <div className="taskinput-container">

      <h2>
        Add New Task
      </h2>

      <label>
        Title
      </label>

      <input
        ref={titleRef}
        type="text"
        placeholder=
        "Enter task title"
        value={title}
        onChange={(e)=>
          setTitle(
            e.target.value
          )
        }

        onKeyDown={(e)=>{

          if(e.key === "Enter"){

            e.preventDefault();

            descriptionRef
            .current
            .focus();
          }
        }}
      />

      <label>
        Description
      </label>

      <textarea
        ref={descriptionRef}
        placeholder=
        "Enter description"

        value={description}

        onChange={(e)=>
          setDescription(
            e.target.value
          )
        }

        onKeyDown={(e)=>{

          if(e.key === "Enter" &&
             !e.shiftKey){

            e.preventDefault();

            handleInput();
          }
        }}
      />

      <button
        onClick={handleInput}
      >
        Add Task
      </button>

    </div>
  );
};

export default TaskInput;