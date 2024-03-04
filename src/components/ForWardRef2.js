
import ForwardRefChild2 from "./ForwardRefChildComponents/ForwardRefChild2.js"
import {useRef} from "react"

/*

Button is in the parent, but when clicked its executing the function from the child component

*/


function ForWardRef2() {
    const childRef = useRef(null)
    const handleButtonClick=()=>{
        if(childRef.current){
            childRef.current.handleButtonClick()

        }
    }
  return (
    <div className="App">
    <h1> ForwardRef 2 </h1>
    <ForwardRefChild2 ref={childRef}/>
    <button onClick={()=>handleButtonClick()}> Click Child Button from Parrent </button>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    

    </div>
  );
}


export default ForWardRef2;
