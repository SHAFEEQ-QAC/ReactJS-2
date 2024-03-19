

import {useReducer} from "react"




function  myreducer(state1,action1){
    // will redute new state on the bases on action
    if(action1.type==="+"){
        
        return state1*2
    }
    if(action1.type==="-"){
        return state1-1
    }
}

function UseReducer4(){
    //useReduce(function,initialvalue)
    let [count,dispatch1]=useReducer(myreducer,2000)

    
    return(
        <>

        <br/>
     
        <button onClick={ ()=> dispatch1({type:'+'})}> Increment </button> <br/>
        {count} <br></br>
        <button onClick={ ()=> dispatch1({type:'-'})}> Decrement </button> <br/>
       
        </>
    )
}

export default UseReducer4