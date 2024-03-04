

/*

REact Router DOM is a popular library for managin navigation and routing in React Application.
it defines different routes and their corresponding components


The primary use cases for ReactRouter v6 are:
    ** Declarative Routing: with v6, you define your routes using JSX components. Instead of a <SWITC H> Component, 
    you now use the <Routes> component to declare your routes.
    
    ** Route Components: Each route is represented by <Route> Component, where you specfy the path 
    and the path and the component to render when that path matches.

    ** Hooks-based Approach: React Router V6 heavily relies on React hooks, 
    You use the --useRoutes-- hook to handle the Routing logic based on the declared routes

    ** Nested Routing: V6 improves the support for nested routing,
    making it wasier to create comples layouts and nested UI structures

    ** Route Parameters: Routee parameters are now accessed using using hooks, 
    You use the useParams hook to retrieve paramaters from the URL

    ** Navigation: For Navigation, you use the useNavigate hook, 
    which provides a function to programmitcally navigate to different routes. This simplifies navigation 
    compared to the older history object

    ** Layouts and LayoutRoutes: Introduces the Concept of layout routes, allowing you to 
    define common layouts that wrap specfics sets of routes. This is usefull for creating 
    consisten UI structures

    ** No Render Props: Unlike the previous version, v6 get rid of the render props pattern. Instead all
    routing-related components are hooks, This simplifies the code and make it more in 
    line with modern React patterns

    ** TypeScript Support: React Router DOM v6 offers improved TypeScript 
    support out of the box, making it easir to catch outing related errors during development.

    ---- Links:
    a <Link> component is used to navigate between different views or components i nyour application. 
    It renders am (<a>) tag withthe appropriate hres attrobute, allowing users to 
    click on the linkk and navigate to the specfied  route without causing a full pare reload 
    This helps in creating a single-page application experience.


    setup installation:

    npm install react-router-dom 



*/

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./Routes1/Home.js"
import About from "./Routes1/About.js"
import PageNotFound from "./NewRouting1/PageNotFound.js"



const Router1=createBrowserRouter(
    [
       
        {
        path:'/',
        element:<Home/>,
        errorElement:<PageNotFound/>,
        
    },
    {
        path:'/home',
        element:<Home/>,
        
    },
    {
        path:'/about',
        element:<About/>,
    },]);


const NewRouting1=()=>{
    return (
      <div className="App">
          <h1> createBrowserRouter, new way of RoutingReact Router V6.4+ </h1>


      {/*  Navigation */}
      <RouterProvider router={Router1}/>
      </div>
    );
  }
  
  export default NewRouting1 

