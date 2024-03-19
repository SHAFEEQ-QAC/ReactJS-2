
import {useReducer} from "react"
let initialState={
    name:"shafeeq",
    salary:1000
}
function  myreducer(state1,action1){
    // will redute new state on the bases on action 
    switch(parseInt(action1)){
        case 1: return "Andy"; 
        case 2: return "Shafeeq"; 
        case 3: return "JAmes"; 
        case 4: return "Peter"; 
        default:
            return ""
    }
}
function UseReducer5(){
    //useReduce(function,initialvalue)
    let [Trainer,dispatch1]=useReducer(myreducer,"Shafeeq")
return(
        <>
        ----------------------------------------
        <br/>
        <br/>     
        Trainer:{Trainer} 
        <br></br>
        <button onClick={ ()=> dispatch1(1)}> Jave </button> <br/>
        <button onClick={ ()=> dispatch1(2)}> C Sharp </button> <br/>
        <button onClick={ ()=> dispatch1(3)}> HTML </button> <br/>
        <button onClick={ ()=> dispatch1(4)}> SQL </button> <br/>   
        </>
    )
}

export default UseReducer5;