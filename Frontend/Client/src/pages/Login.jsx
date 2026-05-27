import React, {
  useContext,
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import axios from "axios";

import { LoginApi }
from "../services/api";

import { AuthContext }
from "../context/AuthContext";

const Login = () => {

  const navigate =
    useNavigate();

  const {
    login
  } = useContext(AuthContext);

  const [
    loginEmail,
    setLoginEmail
  ] = useState("");

  const [
    loginPassword,
    setLoginPassword
  ] = useState("");

  const handleLogin =
    async (e) => {

    e.preventDefault();

    try {

      if(
        !loginEmail ||
        !loginPassword
      ){
        alert(
          "Please enter all fields correctly"
        );
        return;
      }

      const response =
        await axios.post(
          LoginApi,
          {
            email:loginEmail,
            password:loginPassword
          },
          {
            headers:{
              "Content-Type":
              "application/json"
            }
          }
        );

      if(!response){
        alert(
          "Login request failed"
        );
        return;
      }

      login(
        response.data.user,
        response.data.token
      );

      navigate("/dashboard");

    } catch(error){

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (

    <div className="login-page-parent">

      <form
        className="login-container"
        onSubmit={handleLogin}
      >

        <h1>Login</h1>

        <p>
          Hey enter your details
          to sign in your account
        </p>

        <input
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={(e)=>
            setLoginEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e)=>
            setLoginPassword(
              e.target.value
            )
          }
        />

        <button type="submit">
          Log In
        </button>

        <p>
          Don't have an account ?

          <Link to="/">
            Sign up
          </Link>
        </p>

      </form>

    </div>
  );
};

export default Login;