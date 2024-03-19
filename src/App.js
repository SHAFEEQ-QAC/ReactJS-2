import logo from './logo.svg';
import './App.css';
import {createContext,useState} from "react"

//import Memo1 from "./components/Memo1.js" 
import UseMemo1 from "./components/UseMemo1.js" 
import UseMemo2 from "./components/UseMemo2.js" 
// import UseRef1 from "./components/UseRef1.js" 
import ForWardRef1 from "./components/ForWardRef1.js"
import ForWardRef2 from "./components/ForWardRef2.js"
//import UseCallback from "./components/UseCallback.js"
import UseContext1 from "./components/UseContext1.js"
import UseContext0 from "./components/UseContext1.js"
//import Routes1 from "./components/Routes1.js"
// import Routes2 from "./components/Routes2.js"
//import Routes3 from "./components/Routes3.js"
//import Routes4 from "./components/Routes4.js"
//  import Routes5 from "./components/Routes5.js"
//import Routes6 from "./components/Routes6.js"
//import Routes7 from "./components/Routes7.js"
//import Routes7 from "./components/Routes7.js"
import Routes8 from "./components/Routes8.js"
//import Routes9 from "./components/Routes9.js"
import Routes9A from "./components/Routes9A.js"

//import Routes10 from './components/Routes10.js';

//import Test from './components/Test.js'; from 


import NewRouting1 from "./components/NewRouting1.js"

import Redux1 from "./components/Redux1"
import Redux2 from "./components/Redux2"
import Test from "./components/Test.js"
import UseCostumHook1 from "./components/useCustomHook1.js"
//import TanStackQuery1 from './components/TanStackQuery1.js';
import { QueryClient, QueryClientProvider,reactquerydevtools } from '@tanstack/react-query';

import Routes9BProtectedRoutes from './components/Routes9B-ProtectedRoutes.js';
import UseLocation1 from './components/UseLocation1.js';
import UseState_Search from './components/UseState_Search.js';
import AccordionDemo from './components/AccordionDemo.js';
import PassingFunctiontoChild from './components/PassingFunctiontoChild.js';
import UseCallback1 from "./components/UseCallback1"
import UseReducer1 from './components/UseReducer1.js';
import Query1 from './components/React-Query/Query1.js';
import UseContext3 from './components/UseContext3.js';
import UseEffect0 from './components/UseEffect0.js';
import TanStackQuery0 from "./components/TanStackQuery0.js"
import TanStackQuery1 from "./components/TanStackQuery1.js"
import TanStackQuery2 from "./components/TanStackQuery2.js"
import TanStackQuery3 from "./components/TanStackQuery3.js"
import TanStackQuery4 from "./components/TanStackQuery4.js"

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

  /* example to useContext */

  const MyContext1 = createContext();
  const MyContext2 = createContext();
  

function App() {

  const [shareData1,setShareData1]=useState(" SHAFEEQ is Back")
 const [shareData2,setShareData2]=useState(" Today is Tuesday")
 
   const queryClient1=new QueryClient();
  
  return (


    <div className="App">

      
   <QueryClientProvider client={queryClient1}> 



   <ReactQueryDevtools initialIsOpen/>
    {/* <UseState_Search/> */}
    {/* <AccordionDemo/> */}

    {/* <PassingFunctiontoChild/> */}
    {/* <Memo1/> */ }
     {/* <UseMemo1/>  
     <UseMemo2/>   */}
    {/* <UseRef1/> */ }
     {/* <ForWardRef1/>  */}
     {/* { <ForWardRef2/>  } */}

     {/* <UseCallback1/>  */}
     {/* <Test/> */}
     {/* ::<Query1/> */}
    {/* <UseReducer1/> */}
             <MyContext1.Provider value={{shareData1,setShareData1}}> 
          <MyContext2.Provider value={{shareData2,setShareData2}}>   
         {/* </MyContext2.Provider><MyContext2.Provider value={{value:[shareData2,setShareData2],value:[shareData2,setShareData2]}}>  */}
               {/* <UseContext1/>  */}
         
          </MyContext2.Provider>
         </MyContext1.Provider> 
         ---------------------------------------   
         
    {/* <UseCostumHook1/>  */}
    ---------------------------
    {/* <Test/> */}
    {/* <Routes1/> */}
    {/* <Routes2/> */}
    {/* <Routes3/> */}
    {/* <Routes4/> */}
    {/* <NewRouting1/> */}
     {/* <Redux1/>  */}
    {/* <Redux2/>  */}
    
    {/* <Routes5/> */}
    {/* <Routes6/>  */}
    {/* { <Routes7/>  } */}
      {/* <Routes9A/>  */}
      {/* <Routes9BProtectedRoutes/> */}
      {/* <Routes9/>   */}
     {/* <Routes9A/>   */}

    {/* <Routes9BProtectedRoutes/> */}
    {/* <UseLocation1/> */}
    {/* <TanStackQuery1/>*/}
    {/* <Routes9A/> */}
    {/* <UseContext3/> */}
    {/* <UseEffect0/> */}
    

    <TanStackQuery0/>
    <br/>
    -------------------------
    <TanStackQuery1/>
    ---------------------
    <TanStackQuery2/>
    --------------------------
    TranstackQuery 3
    <TanStackQuery3/>
    ------------------------ 
    TranstackQuery 4 - refetchInterval
    <TanStackQuery4/>
    ------------------------ 
    
    
     </QueryClientProvider>  
    {/* <Redux1/><br/> */}
    ---------------------------------
    <br/>
    {/* <Redux2/> */}
    <br/>
   
     
    </div>
  );
}

export default App;
export {MyContext1} // exporting context , we have import in where ever we are suing it
export {MyContext2} // exporting context , we have import in where ever we are suing it
