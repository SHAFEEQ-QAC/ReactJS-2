import React, { useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()

    useEffect(()=>{
        let login = localStorage.getItem("login");
        console.log(login)
        if(login){
            navigate("/")
        }


  })
    const Login=()=>{
        localStorage.setItem('login',true)
        navigate("/")

    }
  return (
    <div>
            <button onClick={()=>Login()}> Click to Login </button>
         
    </div>
  );
}

export default Login;
