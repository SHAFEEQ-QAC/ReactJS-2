


/*

NavLink

the -- Link and --NavLink components are used for navigation with your application to build 
single-applications with clisnt-side routing

--Navlink is a variation of link hat provides additional styling and behaviou 
for the currently active route. It adds a class name to the active link allowing 
you to apply specfic styles to it

you can also cutomize the NAvLink to add your own active styles and 
behavior using the --activeClassName and --isActive props

*/
import '../App.css';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from "./Routes1/Home.js"
import About from "./Routes1/About.js"
import Links4 from "./Routes4/Links4.js"
import PageNotFound from "./Routes1/PageNotFound.js"
import UserList from "./Routes2/UserList.js"
import UserProfile from "./Routes2/UserProfile.js"

const Routes4=()=>{


    return (
      <div className="App">
      <h1> React Router V6 Example of NavLinks </h1>


      {/*  Links */}

     
      <BrowserRouter>
        <Links4/>
                
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
  
  export default Routes4 

