import { createContext, useState } from "react"
import { useEffect } from "react";
export const AuthContext=createContext();
import axios from "axios";
const AuthProvider=({children})=>{
    const [client,setClient]=useState(null);
    const [accessToken,setAccessToken]=useState(null);
    const login=(userData,token)=>{
        setClient(userData);
        setAccessToken(token);

        localStorage.setItem(
  "auth",
  JSON.stringify({
    user: userData,
    token: token,
  })
);
    };

      const logout = () => {
    setClient(null);
    setAccessToken(null);
  };
useEffect(() => {

  const storedAuth =
    JSON.parse(
      localStorage.getItem("auth")
    );

  if(storedAuth){

    setClient(
      storedAuth.user
    );

    setAccessToken(
      storedAuth.token
    );
  }

}, []);
const refreshAccessToken = async () => {

  try {

    const response = await axios.post(
      "http://localhost:5000/api/refresh-token",
      {},
      {
        withCredentials:true
      }
    );

    const newAccessToken =
      response.data.accessToken;

    const storedAuth = JSON.parse(
      localStorage.getItem("auth")
    );

    const updatedAuth = {
      ...storedAuth,
      token:newAccessToken
    };

    localStorage.setItem(
      "auth",
      JSON.stringify(updatedAuth)
    );

    setAccessToken(newAccessToken);

    console.log("Token refreshed");

  } catch(error){
logout();
    console.log(
      error.response?.data?.message
    );
  }
};

 useEffect(() => {

    const interval =
      setInterval(() => {

        refreshAccessToken();

      }, 14 * 60 * 1000);

    return () =>
      clearInterval(interval);

  }, []);


   
  return(

<AuthContext.Provider

value={{
    client,
    accessToken,
    login,
    logout,
    refreshAccessToken,
}}

>
    {children}


</AuthContext.Provider>



  )
}

export default AuthProvider;