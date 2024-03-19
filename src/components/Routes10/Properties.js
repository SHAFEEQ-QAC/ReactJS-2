import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Properties=()=> {
  return (
    
      <>
      <nav class="flexColumn">
        <Link to="/properties/propertieslist/all"> All Properties </Link> <br/>
      <Link to="/properties/propertieslist/sold"> Sold Properties </Link> <br/>
      <Link to="/properties/propertieslist/notsold"> Avaliable for Sale Properties </Link><br/>
      <br></br>
      <Link to="/properties/addproperty"> Add Property </Link>
    </nav>
        <Outlet/>
      </>
    
  );
}

export default Properties