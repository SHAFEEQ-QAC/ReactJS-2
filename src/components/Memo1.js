
import { useState} from "react";
import ChildComponent1 from "./memo/childComponent1.js"
import ChildComponent2 from "./memo/childComponent2.js"
import ChildComponent3 from "./memo/childComponent3.js"
import ChildComponent4 from "./memo/childComponent4.js"


/*

  Wrap a component in memo to get a memoized version of that component. 
  This memoized version of your component will usually not be re-rendered 
  when its parent component is re-rendered as long as its props have not changed. 
  But React may still re-render it: memoization is a performance optimization, not a guarantee.

  memo(Component, arePropsEqual?) 

  Parameters 
        Component:The component that you want to memoize. The memo does not modify 
                  this component, but returns a new, memoized component instead. 
                  Any valid React component, including functions and forwardRef 
                  components, is accepted.

        optional arePropsEqual: 
                  A function that accepts two arguments: the component’s previous props, 
                  and its new props. It should return true if the old and new props are equal: 
                  that is, if the component will render the same output and behave in the same 
                  way with the new props as with the old. Otherwise it should return false. 
                  Usually, you will not specify this function. By default, React will compare each prop 
                  with Object.is.
*/


function Memo1() {

    const [addition,setAddition]=useState(5)
    const [subtraction,setSubtraction]=useState(10)

    const setSub=()=>{
      if(subtraction>=5){
        setSubtraction(subtraction-1)
      }else{
        setAddition(addition+1)
      }
  }
  return (
    <div className="App">
        <h1>  useMemo Hook </h1>
        <br/>
        <ChildComponent1/>
        <ChildComponent2/>
        <ChildComponent3 A={addition}/>
        <ChildComponent4 A={subtraction}/>
             
        <br/>
        The Result of Addition:{addition}
        <br/>
        The Result of Subtraction:{subtraction}
        <br/>
        <br/>
        <button onClick={()=>setAddition(addition+1)}> + </button> -- 
        <button onClick={setSub}> - </button>
    </div>
  );
}

export default Memo1
;
