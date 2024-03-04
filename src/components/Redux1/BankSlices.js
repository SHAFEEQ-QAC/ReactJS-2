

import {createSlice} from "@reduxjs/toolkit"


 const initialState={
     amount: 0
 }

const AmountSlice=createSlice({
    name:'AmountSlice',
    initialState,
        reducers:{
        deposite:(state,action)=>{
            state.amount += 1
        },
        withdraw:(state,action)=>{
            state.amount -= 1
        },
        
    }

})

export default AmountSlice.reducer;
export const{deposite,withdraw} = AmountSlice.actions
