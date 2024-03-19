

import {useReducer} from "react"


let initialState=0

function  myreducer(state,action){
    // will redute new state on the bases on action
    switch(action.type){
        case "increment": 
              return state + 1;
        case "decrement": 
              return state - 1;
        case "inc": 
              return state + 10;
        case "dec": 
                return state - 10;
        default:
            return state
    }
}

function UseReducer2(){

    let [state,dispatch]=useReducer(myreducer,initialState)

    
    return(
        <>
        +++++++++++++++++++++++++++++++++++++++++++++
        <br/>
        Data:{state}
 <br/>
        <button onClick={ ()=> dispatch({type:'increment'})}> Increment </button>
        <button onClick={ ()=> dispatch({type:'decrement'})}> Decrement </button>
        <button onClick={ ()=> dispatch({type:'inc'})}> Increment by 10 </button>
        <button onClick={ ()=> dispatch({type:'dec'})}> Decrement by 10 </button>
        
       
        </>
    )
}

export default UseReducer2