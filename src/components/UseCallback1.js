import { useCallback, useState } from "react";
import UseCallBackChild1 from "./UseCallBack/UseCallBackChild1"

/*

useCallback hoot in React is used to optimize the performance of your component by memoizing functions, 
ensuring that they are not recreacted on every render

the primary use cases for useCallback are:
    *** Function Memoization *** : usecallback memoizes(caches) a function , ensuring that the same 
    functions instance is returned on subsequent renders as long as its dependencies remain  un changed.
    this is particularly useful to pregvent unnecessaary re-renders of the child components that 
    recieve functions as  props.

    


*/

const UseCallback1=()=> {
  const [counter1,setCounter1]=useState(10)
  const [counter2,setCounter2]=useState(100)
 
  const change1=()=>{
 //   console.log("1")
    setCounter1(counter1+10)
  }

  const change2=useCallback(()=>{
    console.log("*")
     setCounter2((t)=>t+100)
  },[])
  
  return (
    <div className="App">
        <h1> useCallBack </h1>
        <h2> Counter1:{counter1}</h2>
        <h2> Counter2:{counter2}</h2>
        <button onClick={()=>change1()}> Click 1 </button>
        <UseCallBackChild1 function1={change2}/>
    </div>
  );
}



export default UseCallback1;
