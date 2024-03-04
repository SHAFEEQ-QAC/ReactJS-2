
import { useRef } from "react";


/*

ref is a special attribute that can be used to access or reference a DOM element or a React component 
instant, it provides a way to interact directly with DOM elements or omponents, 
enabling you to perform certain operations like ficusing an input field etc

The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.


The primary use cases for useRef are:
    *** Accessing DOM elements***: you can useRef to get a reference to a DOM element and interact with it 
    directly, like changin iots style, adding events listenets, or triggering imperative functions.

    *** Storing mutable values ***: Since the ref object persist across renders, you cn use it to
    store values that need to be accesses and updates without triggering re-renders.

    *** Caching expensive calculations ***: if you have a computation that is costly in terms of 
    performance and doesn't depend on the component's state or props, you can use useRef to sore 
    the result of the computation and reuse it across renders
*/

function UseRef1() {
    const inputRef= useRef(null)

    const handleEvent=()=>{
        const inputValue=inputRef.current.value;            
        alert(inputValue)
    }
    
  return (

    <div className="App">
        <h2> useRef</h2>
        <input ref={inputRef} type="text"/>
        <button onClick={handleEvent}> Click</button>


    </div>
  );
}

export default UseRef1;
