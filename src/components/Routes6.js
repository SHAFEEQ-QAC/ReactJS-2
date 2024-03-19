
/*
        --- React Router V6.4 Example of NavLinks 


*/
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
  } from "react-router-dom";

import About from "./Routes5/About.js"
import Home from "./Routes5/Home.js"
import Services from "./Routes5/Services.js"

/*
const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/services",
            element: <Services />,
        },
        
  ]);

*/

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" >
                <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="shafeeq" element={<h2> Shafeeq is Back </h2>}/>
            <Route path="*" element={<h2> Some thing wen really wrong 123</h2>}/>
            
            
        </Route>
        

    ))

const Routes5=()=>{

    return (
        <>
            <div className="App">
            <h1> React Router V6.4 Example-2 </h1>
            <RouterProvider router={router} />
            </div>
        </>  
    );
}

export default Routes5
