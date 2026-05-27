import React from "react";
import { TaskApi } from "../services/api";

const SingleTaskCard = ({ title, description,handleDelete,taskId }) => {


  return (
    <div className="single-task-card">
      <div className="task-header">
        <span className="task-tag">TASK.exe</span>
      </div>

      <h2>{title}</h2>
      <p>{description}</p>

      <div className="task-footer">
        <button onClick={()=>{
          handleDelete(taskId);
        }}>Delete</button>
        <span>Status: Active</span>
      </div>
    </div>
  );
};

export default SingleTaskCard;