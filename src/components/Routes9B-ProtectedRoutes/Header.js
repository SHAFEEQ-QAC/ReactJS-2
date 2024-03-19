import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    
      <>
        <Link to="/" >            Home             </Link>
        <Link to="/sellers" >     Sellers         </Link>
        <Link to="/properties" >  Properties        </Link>
        <Link to="/login">        Login             </Link>
        <Link to="/logout">        Logout             </Link>
        
      </>
    
  );
}

export default Header;

