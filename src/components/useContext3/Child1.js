import React from 'react';
import Child2 from './Child2';
import { useContext} from 'react';
import {loginContext} from "../UseContext3.js"

const Child1 = () => {

    const {isLoggedIn,login,logout} = useContext(loginContext)
  return (
    <div>
      <h1> Child-1 Page </h1>
      <h3> {isLoggedIn?"User in Logined" : "USer is Logout"}</h3>
      <br/>
      <button onClick={()=>login()}>Login </button>
      <button onClick={()=>logout()}>Logout </button>
      <Child2/>
    </div>
  );
}
export default Child1;
