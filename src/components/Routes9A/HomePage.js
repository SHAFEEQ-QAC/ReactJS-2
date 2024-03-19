import React from 'react';
import Header1 from './Header';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div>
     
      <Header1/>
      <Outlet/>
   </div>
  );
}

export default HomePage;
