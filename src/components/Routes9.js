
/*
        --- React Router V6.4 Example  

        use data loader
        to fetch data, we use to use useEffect

        if any error occured in any loader function


*/
import {
    createBrowserRouter,
    RouterProvider,
    Link
  } from "react-router-dom";


  import ShowData1 from "./Routes9/ShowData1.js"
  import ShowData2 from "./Routes9/ShowData2.js"
  import ShowData3 from "./Routes9/ShowData3.js"
  
  import HomeError1 from "./Routes9/HomeError1.js"
  import Nav from "./Routes9/Nav.js";
  
function loadingData1(){

    let records=[
        {
            name:"Shafeeq",
            salary:2000
        },
        {
            name:"james",
            salary:14000
        }

    ]

    return records
}

const dataFetch1= async()=>{
    // no Error in loader
  
    const response = await fetch("http://localhost:8082/seller")
    const todolist=  response.json()
    console.log(todolist)
    return todolist
}

const dataFetch2= async()=>{

    //Error in loader and we want to render a component <Error1/>
    const response = await fetch('https://jsonplaceholder.typicode.com/todos4')

    if (!response.ok){
            throw new Response("Not Found",{status:404});
    }
    const todolist=  response.json()
    return todolist
}


const dataFetch3= async()=>{

    /* 
    
        Error in loader and we want to render a component <Error1/>
        donot want to thorw and exception
        we want to send handle the error in <ShowData3/>

    */

    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

 
    if (!response.ok){
            return{

                status:response.status,
                statusText:response.text,
                

            }
    }
    const todolist=  response.json()
    return todolist
}

const router = createBrowserRouter([

    {
        path :"/", 
        element:<Nav/>,
        children:[
            {
                /*
                    when ever we visit this path the loader function will get execurted 
                    it wouldnt wait to render the ShowData component
               */
               path: "/sampledata",
               element: <ShowData1 />, 
              // loader: ()=>{ console.log("Data Loader call");return null}
              loader:loadingData1
             
           },{
               path: "/fetchdata1",
               element: <ShowData2 />, 
              // loader: ()=>{ console.log("Data Loader call");return null}
              loader:dataFetch1,
              errorElement:<HomeError1/>  // <HomeError1/> will get renderd if there is any error occured in loader
           },
           {
               path: "/fetchdata2",
               element: <ShowData2 />, 
              // loader: ()=>{ console.log("Data Loader call");return null}
              loader:dataFetch2,
              errorElement:<HomeError1/>  // <HomeError1/> will get renderd if there is any error occured in loader
           },{
               path: "/fetchdata3",
               element: <ShowData3 />, 
              // loader: ()=>{ console.log("Data Loader call");return null}
              loader:dataFetch3,
             // errorElement:<HomeError1/>  // <HomeError1/> will get renderd if there is any error occured in loader
           }
        ]

    }
       
  ]);


const Routes9=()=>{

    return (
        <>


            <RouterProvider router={router} >
           
           </RouterProvider>
        </>  
    );
}

export default Routes9
