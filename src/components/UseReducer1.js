import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const reducer = (state,action) => {
    
  switch (action) {
    case "Increment":
        return state+1
    case "Decrement":
        return state+1
    default:
      return state;
  }
};

  const UseReducer1=()=> {
  const [data, dispatch] = useReducer(reducer, 10);

  return (
    <>
    The Data:{data}    
    <button onClick={()=> dispatch("Increment")}> Increment </button> --- 
    <button onClick={()=>dispatch("Decrement")}> DEcerement </button>
    </>
  );
}
export default UseReducer1