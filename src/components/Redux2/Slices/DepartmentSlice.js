

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    departments:["Human Resource","IT","Sales"]
}
const Departments=createSlice({

    name:"departments",
    initialState,
    reducers:{
        addDepartment:(state,action)=>{
            
            state.departments = [...state.departments , action.payload]
        }

    }

})
export default Departments.reducer;
export const {addDepartment} = Departments.actions;