import React from 'react';
import { Form, useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate=useNavigate()
    const logout=()=>{
        //localStorage.setItem('login',false)
        localStorage.clear()
        navigate("/")

    }
  return (
    <div>
        <button onClick={()=>logout()}> Click to Logout </button>
    </div>
  );
}

export default Logout;
