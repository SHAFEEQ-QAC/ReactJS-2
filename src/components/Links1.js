

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

import { Link } from "react-router-dom"

const Links1=()=>{


    return (

        <>
            <nav>
               <ul>
                    <li> <Link to="/"> / </Link> </li>
                    <li> <Link to="/shafeeq"> Shafeeq </Link> </li>
                    <li> <Link to="/home"> Home  </Link> </li>
                    <li> <Link to="/about"> About  </Link> </li>
                </ul>
            </nav>
        </>
    );
  }
  
  export default Links1 

