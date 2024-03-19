import {useContext,useEffect} from "react"
import UseContextChild2 from "./UseContextChild2.js"
import { MyContext1,MyContext2 } from "../../App.js"
function UseContextChild1() {
   
  let {shareData1,setShareData1}= useContext(MyContext1)
  let {shareData2,setShareData2}= useContext(MyContext2)
  
  
  //const [shareData1,setShareData1]=useState(" SHAFEEQ is Back")
  return (
    <div className="App">
        <h1> UseContext Child-1 </h1>
        {shareData1}
         ................
         {shareData2} 
        <UseContextChild2/>
    </div>
  );
}


export default UseContextChild1;

