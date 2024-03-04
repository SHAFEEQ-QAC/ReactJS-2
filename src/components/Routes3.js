


/*

Dynamic Routes and Param

Routes are perhaps the most important part of a React Router app. 
They couple -URL segments to -Components, -data loading and -data mutations. 
Though -route nesting, complex application layouts and data depemdemmcies become 
simple and declarative

** Dynamic Routes: Dynamic routes in React Router allow you to create 
routes with variable segments in URL. These variable segmens can change, and you can 
capture these changes to render different components or content based on the URL


** Parametes(Params):
parameters are values extracted from the dynamis sepments in the URL. 
In React Router, you can access these paramaters through the --useParams hook or 
the match object in he class based components



*/
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from "./Routes1/Home.js"
import About from "./Routes1/About.js"
import Links2 from "./Routes2/Links2.js"
import PageNotFound from "./Routes1/PageNotFound.js"
import UserList from "./Routes2/UserList.js"
import UserProfile from "./Routes2/UserProfile.js"

const Routes3=()=>{


    return (
      <div className="App">
      <h1> React Router V6 Example of Links </h1>


      {/*  Links */}

     
      <BrowserRouter>
        <Links2/>
                
        <Routes>
            <Route path="/shafeeq" element={<h1>-- WELCOME to my World --</h1>}/>
            <Route path="/shafeeq" element={

                                                <>
                                                    <h1> 2SHAFEEQ </h1>
                                                    <h2> IS  </h2>
                                                    <h3> Back </h3>
                                                </>
                                            }/>


            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/userinfo/:userId" element={<UserProfile/>}/>
            
            
            <Route path="/*" element={<PageNotFound/>}/>
            
            

      </Routes>
      </BrowserRouter>


      </div>
    );
  }
  
  export default Routes3 

