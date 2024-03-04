
import {forwardRef,useRef,useImperativeHandle} from "react"

function ForwardRefChild2(props,ref) {
    
    const childRef=useRef();

    const handleButtonClick=()=>{
        console.log("Function in the Child is executing")
    }

    useImperativeHandle(ref,()=>({
        handleButtonClick,
    }))
    return (
    <div className="App">
        <h2> This is ForwardRefChild Child Component </h2>
        <button > Click Me (Button is in Child Conmponent)</button>
    </div>
  );
}

export default forwardRef(ForwardRefChild2);

