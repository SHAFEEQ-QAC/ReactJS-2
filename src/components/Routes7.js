
/*
        --- React Router V6.4 Example  


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
            path:"/profile",
            children:[
                {
                    index: true,
                    element:<h2> Profile Home Page</h2>
                },
                {
                    path:"/profile/about",
                    element: <About/>
                },
                
                {
                    path:"/profile/settings",
                    element: <div> SEtting Components </div>
                },
                {
                    path:"/profile/account",
                    element: <div> Account Components </div>
                }
            ]
        },
        {
            path:"/trainers",
            children:[
                {
                    index: true,
                    element:<h2> Trainers Home Page</h2>
                },
                {
                    path:"/trainers/shafeeq",
                    element:<h2> Shafeeq teaches SQL and PLSQL</h2>
                },
                {
                    path:"/trainers/john",
                    element:<h2> John teaches Java Programming</h2>
                }

            ]
        }
  ]);


const Routes7=()=>{

    return (
        <>
            <div className="App">
            <h1> React Router  </h1>
            <RouterProvider router={router} />
            </div>
        </>  
    );
}

export default Routes7
