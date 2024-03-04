

import { configureStore } from "@reduxjs/toolkit"
import EmployeesSlice from "./Slices/EmployeeSlice.js"
import DepartmentSlice from "./Slices/DepartmentSlice.js"



const store=configureStore({

    reducer:{
        employees:EmployeesSlice,
        departments:DepartmentSlice
        
    }


})
export default store