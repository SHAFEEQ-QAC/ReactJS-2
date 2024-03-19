import React from 'react';
/*

    FORM

*/


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomePage from './Routes9A/HomePage';
import FormComponent from './Routes9A/FormComponent';
import { SaveSellerInformation } from './Routes9A/Actions';
import { Sellers } from './Routes9A/Loaders'; 
import SellerList from './Routes9A/SellerList';

const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />, 
           
            children:[
                {
                    index: true,
                    element:<h2> Welcoem to Our Home Page</h2>
                },
                {
                    path:"/sellers",
                    loader:Sellers,
                    element:<SellerList/>
                },
                
                {
                    path:"/form",
                    element:<FormComponent/>,
                    action:SaveSellerInformation
                }   ]
        }
  ]);

function Routes9A() {
  return (
    <div>
      <RouterProvider router={router }/>
    </div>
  );
}

export default Routes9A;
