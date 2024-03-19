import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    
      <>
        <Link to="/" > Home           </Link>
        <Link to="/sellers" > Sellers        </Link>
        <Link to="/form"> New Seller  </Link>
      </>
    
  );
}

export default Header;

