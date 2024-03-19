import React from 'react';
import Header1 from './Header';
import { Outlet } from 'react-router-dom';






function HomePage() {
  return (
    <div>
        
    <div class="container">
      <header class="layoutHeader">
        <h1 class="logo">LOGO</h1>
        <nav class="navbar">

        <Header1/> 

        </nav>
      </header>
      <div class="layoutBody">
        
        <div class="layoutContent">  
             <Outlet/>
        </div>
     
      </div>
    </div>
   

 </div>
  );
}

export default HomePage;
