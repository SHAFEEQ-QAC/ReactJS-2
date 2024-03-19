import React from 'react';
import { Link, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
/*
the useLocation hook is used to access the current location 
object in your application'routing returns an object that
represents the current URL's location
*/
const Location=()=>{
    const location= useLocation()
    console.log(location)
    return(
        <>
        For example: http://localhosthost:3000/service?city=manchester&A=30&B=30#part1 
        <br></br>
        <br/>
       Location Path:{location.pathname} <br/>
       Query String:{location.search} <br/>
       Hash:{location.hash}
        </>
    )
}
const Home=()=>{
    return(
        <>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/location"> Location </Link>
   
        </>  
       
    )
}
const About=()=>{
    return(
        <> This is About US</>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/> ,
        errorElement:<h1> Some went very Wrong......</h1>
    },{
        path:"/About",
        element:<About/>
    },{
        path:"/Location",
        element:<Location/>
    }
])

const UseLocation1 = () => {

  return (
    <div>
        <RouterProvider router={router} />
      
    </div>
  );
}

export default UseLocation1;
