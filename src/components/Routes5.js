
/*
        --- React Router V6.4 Example of NavLinks 


*/
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import About from "./Routes5/About.js"
import Home from "./Routes5/Home.js"
import Services from "./Routes5/Services.js"


const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement:<h1> Some went very Wrong......</h1>
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/services",
            element: <Services />,
        },
        {
            path:"shafeeq" ,
            element: <h2> Shafeeq is Back </h2>,
           
           
            
        }
        
  ]);


const Routes5=()=>{

    return (
        <>
            <div className="App">
            <h1> React Router Example  </h1>
            <RouterProvider router={router} />
            </div>
        </>  
    );
}

export default Routes5
