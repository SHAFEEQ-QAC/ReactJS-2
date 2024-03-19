import React from 'react';
import Header1 from './Header';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div>
     
      <Header1/>
      <h1> Welcome to my Home Page </h1>
      <br/>
      <br/>
      
      <Outlet/>
   </div>
  );
}

export default HomePage;
