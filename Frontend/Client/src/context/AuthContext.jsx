import { createContext, useState } from "react"

export const AuthContext=createContext();

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
  return(

<AuthContext.Provider

value={{
    client,
    accessToken,
    login,
    logout
}}

>
    {children}


</AuthContext.Provider>



  )
}

export default AuthProvider;