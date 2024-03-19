
import {useReducer,useRef} from "react"

function reducer(state, action) {

    switch (action.type) {
      case "add":
        return [...state, action.post];
      case "delete":
        return state.filter((post) => post !== action.post);
      default:
        throw new Error();
    }
  }

function UseReducer6(){

const [posts, dispatch] = useReducer(reducer, [])
const inputRef=useRef()
return(
    <>
    <button onClick={()=>dispatch({post:inputRef.current.value,type:"delete"})}> Remove post </button>
    <input type="text" ref={inputRef}/>
    <button  onClick={()=>dispatch({post:inputRef.current.value,type:"add"})}> Add post</button>
    <br></br>
    <b> Posts </b>
    {
        posts.map((post1)=>
        <div>
            {post1}
        </div>)
    }
    </>
)
}

export default UseReducer6