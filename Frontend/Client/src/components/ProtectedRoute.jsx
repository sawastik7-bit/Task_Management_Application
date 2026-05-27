import React from "react";

import {
  Navigate
} from "react-router-dom";

const ProtectedRoute = ({
  children
}) => {

  const storedAuth =
    JSON.parse(
      localStorage.getItem("auth")
    );

  if(
    !storedAuth ||
    !storedAuth.token
  ){

    return (
      <Navigate to="/login" />
    );
  }

  return children;
};

export default ProtectedRoute;