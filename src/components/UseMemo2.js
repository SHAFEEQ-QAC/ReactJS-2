
import { useState,useMemo } from "react";


/*

The React useMemo Hook returns a memoized value.
Think of memoization as caching a value so that it does not need to be recalculated.

The basics purpose of the useMemo is to cache the return value of a function and only 
recompute it when the dependencies specficied in teh secon argument of the useMemo call changes.

The useMemo Hook only runs when one of its dependencies update.
This can improve performance.

The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns 
a memoized value and useCallback returns a memoized function. 

*/

function UseMemo2() {

    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [count, setCount] = useState(0)

    function calculatingsum(){
        console.log("Calculating sum...!")
        return number1+number2
      }

    const sum = useMemo( calculatingsum,[number1,number2])
  
  return (
    <div className="App">
        <h1>  useMemo Hook </h1>

        <br/>
        Number1:<input  type="number"
                value={number1}
                onChange={ (e)=>setNumber1(Number(e.target.value)) }/>
        <br/>
        Number2:<input  type="number"
                value={number2}
                onChange={ (e)=>setNumber2(Number(e.target.value)) }/>
                
        <br/>
        <p> Sum:{sum}</p>
        <br/>
        <button onClick={()=>setCount(count+1)}> Counting </button>
        
        {/* when we click the count button its calling the sum function as well why?
         because the component is redendering and the call in the return method  
         to solve the problem useMemo2.js we have to use useMemo()*/}
        
        <br></br>
        Count: {count}

    </div>
  );
}

export default UseMemo2;
