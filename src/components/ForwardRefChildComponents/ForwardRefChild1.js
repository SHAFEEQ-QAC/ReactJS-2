
import {forwardRef} from "react"

function ForwardRefChild1(props,ref) {


    return (
    <div className="App">
        <h2> This is ForwardRefChild Child Component </h2>

        TextBox is in Child : <input type="text" ref={ref}/>

    </div>
  );
}

export default forwardRef(ForwardRefChild1);
