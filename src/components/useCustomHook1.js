/*

*/

 import useCounter from "./CustomHook/CustomeHook1.js"

const useCustomHook1=()=>{
// console.log(useCounter)
    
     const {count,increment,decrement} = useCounter(2,100)

    return(
        <>
        <h2> CustomeHook </h2>
        
        The Value of Count :{ count} 
        <br/>
        <button onClick={()=>increment()}> Increment </button> 
        <button onClick={()=>decrement()}> Decrement </button> <br/>
        
        
        </>
    )
}

export default useCustomHook1