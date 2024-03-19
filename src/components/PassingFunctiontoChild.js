

import React, { useState } from 'react';
import ChildButton from './AccordionDemo/ChildButton';

function PassingFunctiontoChild() {

    const IncrementCounter=()=>{
        setCounter(counter+1)
    }

    const [counter,setCounter] = useState(100)
  return (
    <div>
      The Value of Counter:{counter}
      <br></br>
      <button onClick={()=> IncrementCounter()}> Button in Parent </button>
      <br></br>
        <ChildButton function1={IncrementCounter}/>
      
    </div>
  );
}

export default PassingFunctiontoChild;
