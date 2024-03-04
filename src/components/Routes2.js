/*


    ---- Links:
    a <Link> component is used to navigate between different views or components i nyour application. 
    It renders am (<a>) tag withthe appropriate hres attrobute, allowing users to 
    click on the linkk and navigate to the specfied  route without causing a full pare reload 
    This helps in creating a single-page application experience.

    **NavBar: 
    use to provide navigation links or menus wothin the web application. 
    It's typically positioned at the top pf the webpage and contains links to various sections or 
    pages of the applications, A navbar can be implementd using the HTML, CSS and JS.
    in the context fo the React Router, a navbar would like consist of <Link> 
    components to facilitate navigation betwen different routes.

*/

import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from "./Routes1/Home.js"
import About from "./Routes1/About.js"
import Links1 from "./Links1.js"
import PageNotFound from "./Routes1/PageNotFound.js"


const Routes2=()=>{


    return (
      <div className="App">
      <h1> React Router V6 Example of Links </h1>


      {/*  Links */}

     
      <BrowserRouter>
                <Links1/>
                <nav>
                    <ul>
                    <li> <Link to="/"> / </Link> </li>
                    <li> <Link to="/shafeeq"> Shafeeq </Link> </li>
                    <li> <Link to="/home"> Home  </Link> </li>
                    <li> <Link to="/about"> About  </Link> </li>
                    

                    
                    
                        
                    </ul>
                </nav>
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
            <Route path="/*" element={<PageNotFound/>}/>
            
            

      </Routes>
      </BrowserRouter>


      </div>
    );
  }
  
  export default Routes2 

