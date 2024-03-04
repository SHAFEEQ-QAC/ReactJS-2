
import {useEffect} from "react"


  

function Test() {


    let balance=44
    let notes=[ {"n50":0},{"n20":0},{"n10":0},{"n5":0},{"n2":0},{"n1":0}]
    
    if(balance>=20){
        notes[0].n20=parseInt(balance/20)
    }
  return (
    <div className="App">
       { notes.map((data) => {
                return(
                         {data}
                )}
       )
                }
        
    </div>
  );
}

export default Test;
