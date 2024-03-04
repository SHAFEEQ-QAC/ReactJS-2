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
//import Routes2 from "./components/Routes2.js"
//import Routes3 from "./components/Routes3.js"
//import Routes4 from "./components/Routes4.js"
import NewRouting1 from "./components/NewRouting1.js"

import Redux1 from "./components/Redux1"
import Redux2 from "./components/Redux2"
import Test from "./components/Test.js"


  /* example to useContext */

  const MyContext1 = createContext();
  const MyContext2 = createContext();
  

function App() {

  const [shareData1,setShareData1]=useState(" SHAFEEQ is Back")
 const [shareData2,setShareData2]=useState(" Today is Tuesday")
 
  
  
  return (
    <div className="App">
      HEllo
    {/* <Memo1/> */ }
     {/* <UseMemo1/>  
     <UseMemo2/>   */}
    {/* <UseRef1/> */ }
     {/* <ForWardRef1/>  */}
     {/* { <ForWardRef2/>  } */}

    {/* <UseCallback/> */}
    
          {/* <MyContext1.Provider value={{shareData1,setShareData1}}>
          <MyContext2.Provider value={{shareData2,setShareData2}}> 
    
              <UseContext1/>
         
          </MyContext2.Provider>
        </MyContext1.Provider>  */}
   
    {/* <Test/> */}
    {/* <Routes1/> */}
    {/* <Routes2/> */}
    {/* <Routes3/> */}
    {/* <Routes4/> */}
    {/* <NewRouting1/> */}
     <Redux2/> 
    {/* <Redux2/>  */}

    </div>
  );
}

export default App;
export {MyContext1} // exporting context , we have import in where ever we are suing it
export {MyContext2} // exporting context , we have import in where ever we are suing it
