import React, { useState, createContext } from 'react';
import Child1 from './useContext3/Child1';
export const loginContext=createContext()
const UseContext3 = () => {
    const [isLoggedIn,setLoggin]= useState(false)
    const login=()=>{
        setLoggin(true)
    }
    const logout=()=>{
        setLoggin(false)
    }
  return (  
    <div>
        <loginContext.Provider value={{isLoggedIn,login,logout}}>
        <h1> Welcome to Home Page</h1>
        <h3> { isLoggedIn ? "User is Login" : "User is Logout"} </h3>
        <button onClick={()=>login()}>Login </button>
        <button onClick={()=>logout()}>Logout </button>   
        <br/>
      <Child1/>
      </loginContext.Provider>
    </div>
  );
}
export default UseContext3;
