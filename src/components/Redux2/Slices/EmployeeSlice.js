

import { createSlice } from "@reduxjs/toolkit";
const initialState={
    employees:["Shafeeq","John","Tadas"],
};
const Employees = createSlice({
    name:"employeeSlice",
    initialState,
    reducers:{
        addEmployee:(state,action)=>{
                state.employees=[...state.employees,action.payload]
        },
               
    }
})
console.log("Reducers :=>>>"+Employees.reducer)
export default Employees.reducer;
export const{addEmployee }= Employees.actions