
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
            <li>  <Link to="/"> Home </Link></li>
            <li> <Link to="/sampledata"> Show Data 1 </Link> </li>
            <li> <Link to="/fetchdata1"> Show Data 2 </Link></li>
            <li> <Link to="/fetchdata2"> Show Data 3 </Link></li>
            <li> <Link to="/fetchdata3"> Show Data 4 </Link></li>
            </ul>
      
      <Outlet/>
    </div>
  );
}

export default Nav;
