

import { configureStore } from "@reduxjs/toolkit"
import EmployeesSlice from "./Slices/EmployeeSlice.js"




const store=configureStore({

    reducer:{
        employees:EmployeesSlice,    
    }


})
export default store