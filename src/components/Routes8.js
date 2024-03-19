
/*
        --- React Router V6.4 Example  

        use out Outlet


*/
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import About from "./Routes5/About.js"
import Home from "./Routes5/Home.js"
import Services from "./Routes5/Services.js"
import Layout1 from "./Routes8/Layout1.js"
import Layout2 from "./Routes8/Layout2.js"



const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout1 />, 
            errorElement:<h1> Some went very Wrong......</h1>,
            children:[
                {
                    index: true,
                    element:<h2> Trainers Home Page</h2>,
                
                },
                {
                    path:"/shafeeq",
                    element:<h2> Shafeeq teaches SQL and PLSQL</h2>
                },
                {
                    path:"/john",
                    element:<h2> John teaches Java Programming</h2>
                },{
                    path:"/profile",
                    element:<Layout2/>,
                    children:[
                        {
                            path:"/profile/settings",
                            element: <div> This is settings pages</div>
                        },
                        {
                            path:"/profile/privacy",
                            element: <div> This is PRIVACY pages</div>
                        },
                        {
                            path:"/profile/account",
                            element: <div> This is ACCOUNT pages</div>
                        },
                        

                    ]
                }

            ]
        }
  ]);


const Routes7=()=>{

    return (
        <>

            <RouterProvider router={router} />
        </>  
    );
}

export default Routes7
