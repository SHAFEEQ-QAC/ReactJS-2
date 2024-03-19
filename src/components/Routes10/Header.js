import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    
      <>
        <Link to="/" class="btn btn-primary">Home</Link>
        <Link to="/properties" class="btn btn-primary">Properties</Link>
        <Link to="/sellers" class="btn btn-primary">Seller</Link>
        <Link to="/buyers" class="btn btn-primary">Buyers</Link>
        <Link to="/buy" class="btn btn-primary">Buy Property</Link>
        <Link to="/sell" class="btn btn-primary">Sell Property </Link>
      </>
    
  );
}

export default Header;
<></>;
