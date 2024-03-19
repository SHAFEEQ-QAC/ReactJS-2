
/*
       Property Project


*/
import {
    createBrowserRouter,
    RouterProvider,
   
  } from "react-router-dom";
  import HomePage from "./Routes10/HomePage";
    import Properties from "./Routes10/Properties";
import {propertyLoaders,Sellers,Buyers} from "./Routes10/Loaders";
import ShowProperties from "./Routes10/ShowProperties";
import PropertyEntry from "./Routes10/PropertyEntry";
import {addProperty} from "./Routes10/Actions.js";
import SellersList from "./Routes10/Sellers.js";
import BuyersList from "./Routes10/BuyersList.js";
  const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,  
        children:[
            {
                path:"/sellers",
                loader:Sellers,
                element:<SellersList/>,  
                
            },
            {
                path:"/buyers",
                loader:Buyers,
                element:<BuyersList/>,  

            },
            {
                path:"/properties",
                element:<Properties/>,
                children:[
                    {
                        path:"/properties/propertieslist/:type",
                        loader:propertyLoaders,
                        element:<ShowProperties/>
                    },{
                        path:"/properties/addproperty",
                        action:addProperty,
                        element:<PropertyEntry/>
                    },

                ]
            }
            ]
    }
    ])

   

const Routes10=()=>{

    return (
        <>


            <RouterProvider router={router} />
           

        </>  
    );
}

export default Routes10
