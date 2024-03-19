import {useContext} from "react"
/// we have to import the context
import { MyContext1,MyContext2 } from "../../App.js"

function UseContextChild2() {


    //  const shareData1= useContext(MyContext1)
    //  const shareData2= useContext(MyContext2)
    
    let {shareData1,setShareData1}= useContext(MyContext1)
    let {shareData2,setShareData2}= useContext(MyContext2)
    setShareData1("James Bond")
    return (
      <div className="App">
         <h1> UseContext Child-2 </h1>
         {shareData1}
         ................
         {shareData2}
      </div>
    );
  }
  
    export default UseContextChild2;
  