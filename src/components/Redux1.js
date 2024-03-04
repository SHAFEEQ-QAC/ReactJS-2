/*

Redux is a global state of whole Application


npm  install @reduxjs/toolkit
npm install react-redux

Store:
Reducers:

useSelector:
useDispatch: // update store


the --createSlice() method is a utility function that helps simplfy the process of creating Redux slices.
 Slice i Redux represents a piece of the Redux store and include the -reduer function and -action related to that --state



to create a store configureStore() is used


*/

import {useSelector,useDispatch} from "react-redux"
import {deposite,withdraw} from "./Redux1/BankSlices.js"

const Redux1=()=>{  

    const { amount } = useSelector( (state)=> state.bank )
    const dispatch = useDispatch()
    return(
        <>
            Current Balance is : {amount}
            <br/>
            <br/>
            <button onClick={()=> dispatch(deposite())}> Amount Deposite </button>
            <br/>
            <button onClick={()=>dispatch(withdraw())}> Amount With Draw </button>
            <br/>
            <button > Show Balance </button>
        </>
    )
}

export default Redux1