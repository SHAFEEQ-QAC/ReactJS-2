import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomePage from './Routes9B-ProtectedRoutes/HomePage';
import Login from './Routes9B-ProtectedRoutes/Login';
import Logout from './Routes9B-ProtectedRoutes/Logout';


import SellerList from './Routes9B-ProtectedRoutes/SellerList';
import { propertyLoaders, Sellers } from './Routes9B-ProtectedRoutes/Loaders';
import ProtectedRoute from './Routes9B-ProtectedRoutes/ProtectedRoute';
import ShowProperties from './Routes9B-ProtectedRoutes/ShowProperties';

  
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />, 
        children:[
                {
                path:"/login",
                element:<Login/>
            },{
                path:"/sellers",
                loader:Sellers,
                element:<ProtectedRoute Component={SellerList}/>
            },{
                path:"/properties",
                loader:propertyLoaders,
                element:<ProtectedRoute Component={ShowProperties}/>
            },
                {
                    path:"/logout",
                    element:<ProtectedRoute Component={Logout}/>
                }

        ]
    }
]);
const Routes9BProtectedRoutes = () => {
  return (
    <div>
      <div>
      <RouterProvider router={router }/>
    </div>
    </div>
  );
}


export default Routes9BProtectedRoutes
