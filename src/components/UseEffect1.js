import {useState,useEffect} from "react";

function UseEffect1(){
    const [num1,setCounter]=useState(10) 
    const [num2,setCounter2]=useState(12) 
    const [trainer,setTrainer]=useState("Shafeeq")


    useEffect(() => {
        setCounter2(num2+10)},
        [trainer,num1])

    return(
        <>
            <button onClick={()=> setCounter(num1+1)}>Click it</button>
            <br/>
            <button onClick={()=> setTrainer(trainer+".")}>new Trainer</button>
            
            <br/>
            <b>
            num1={num1}
            <br/>
            Trainer:{trainer}
            </b>
            <br/>
            {num2}
        </>
    )
}
export default UseEffect1;