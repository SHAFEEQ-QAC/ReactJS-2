/*

custome hooks are JAvascript Functions that start with the wor "Use" and can all other hooks if needed.

The general rules of React Hooks also apply to custom Hooks; these include:

Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions
Only call Hooks from React function components
Don’t call Hooks from regular JavaScript functions

*/

import {useState} from "react"

const UseCounter=(initValue=1,step=1)=>{
    
    const [count,setCounter] = useState(initValue)

    const increment=()=>{
        setCounter(count+step)
    }
    
    const decrement=()=>{
        setCounter(count-step)
    }
    
    return {count,increment,decrement}
}

export default UseCounter;

