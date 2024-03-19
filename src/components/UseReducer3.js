

import {useReducer} from "react"


let initialState={
    name:"shafeeq",
    salary:1000
}

function  myreducer(state,action){
    // will redute new state on the bases on action
    console.log(state.name)
    switch(action.type){
        case "increase": 
                    return {...state,salary:state.salary+10}; break;
                  
        case "decrease": 
                    return {...state,salary:state.salary+10}; break;
                    
    
        default:
            throw Error("no action type")
    }
}

function UseReducer3(){

    let [state,dispatch]=useReducer(myreducer,initialState)

    
    return(
        <>
        <br/>
        Name:{state.name} <br/>
        Salary:{state.salary} <br/>
        <button onClick={ ()=> dispatch({type:'increase'})}> Increment </button>
        <button onClick={ ()=> dispatch({type:'decrease'})}> Decrement </button>
       
        </>
    )
}

export default UseReducer3