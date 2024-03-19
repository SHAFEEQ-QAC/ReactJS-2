
import ForwardRefChild1 from "./ForwardRefChildComponents/ForwardRefChild1.js"
import {useRef} from "react"

/*

forwardRef is a special function in react that allow you to forward a ref from a parent 
component to a chile component. it is primarily used when you need to access 
the DOM element or component instant of the child component from its parent


forwardRef
forwardRef lets your component expose a DOM node to parent component with a ref.

The primary use cases for forwardRef are:

*** Acccessing DOM elements ***: if you need to focus, scroll, or perform other DOM-related 
    opertions on a child component you can use forwardRef to get access to the child's DOM element

*** Exposing child component functions***: you might have some functions in the child component 
    that you want to trigger from the parent component. Using forwardRed, the parent component can 
    call those functions directly on the shild component instantce

*/


function ForWardRef1() {
    const inputRef = useRef(null)
    
    const updateInput=()=>{
        inputRef.current.value = "1000"
    }


  return (
    <div className="App">
    <h1> ForwardRef </h1>
    <ForwardRefChild1 ref={inputRef}/>
    <button onClick={()=>updateInput()}> Click it(Button is in Parent)</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    

    </div>
  );
}


export default ForWardRef1;
