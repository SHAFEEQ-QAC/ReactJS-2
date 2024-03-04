
import { Link } from "react-router-dom"

const Links1=()=>{


    return (
        <>
            <nav>
               <ul>
                    
                    <li> <Link to="/home"> Home  </Link> </li>
                    <li> <Link to="/about"> About  </Link> </li>
                    <li> <Link to="/users"> User List  </Link> </li>
                    
                </ul>
            </nav>
        </>
    );
  }
  
  export default Links1 

