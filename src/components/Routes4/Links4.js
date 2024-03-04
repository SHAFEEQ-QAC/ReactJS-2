
import { NavLink } from "react-router-dom"

const Links4=()=>{


    return (
        <>
            <nav>
               <ul>
                    
                    <li> <NavLink to="/home"> Home  </NavLink> </li>
                    <li> <NavLink to="/about"> About  </NavLink> </li>
                    <li> <NavLink to="/users"> User List  </NavLink> </li>
                    
                </ul>
            </nav>
        </>
    );
  }
  
  export default Links4 

