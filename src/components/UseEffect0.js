
import React, { useEffect, useState } from 'react';
const Component1=()=>{
    //will execute when the component is un mounting
    useEffect(
        ()=>{
            return function(){
                console.log("Component is un mounted")
            }
        },[])
    return(
        <> Hello My Friends</>
    )
}
const UseEffect0 = () => {
    const [state,setState] = useState(10)
    const [boolean,setBoolean] = useState(true)
  
    // will execute just after mount
    useEffect(
            ()=>{console.log("Component mounted")},[])

    //will execute when ever the component is rerendering
    useEffect(()=>{console.log("Componnet re rendered")},[state])

    return (
    <div>
        Data:{state}
        <br></br>
        <button onClick={()=>setState(state+1)}> Counter</button>
        <br></br>
        <button onClick={()=>setBoolean(!boolean)}> Click </button>
        { boolean ? <Component1/>:""}
    </div>
  );
}

export default UseEffect0;
