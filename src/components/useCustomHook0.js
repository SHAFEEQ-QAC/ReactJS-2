
import {useEffect, useState} from "react"
/*

normal function can use hooks
custom hook much srat with use key word


React Hooks can only be used within functional components, 
whereas JavaScript functions can be used anywhere in your code.
React Hooks follow specific naming conventions, starting with the 
"use" prefix (e.g., useState, useEffect), while JavaScript functions 
can be named anything.
*/

/*
testing function will give you error as this is normal function 
and it using useState hook


function testing(){

    const [data,setData]=useState(12)

  return "hello"+data
}

*/
function useWhat(){

  const [data,setData]=useState(12)

  return "hello"+data
}


function Test() {

    const abc=useWhat()
    
  return (
    <div className="App">
      {abc}
        
    </div>
  );
}

export default Test;
