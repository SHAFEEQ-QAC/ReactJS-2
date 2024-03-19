
import {useEffect, useState} from "react"


  
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
