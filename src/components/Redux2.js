

import {useSelector,useDispatch} from "react-redux"
import {useRef} from "react"
import {addEmployee} from "./Redux2/Slices/EmployeeSlice"
import {addDepartment} from "./Redux2/Slices/DepartmentSlice"


const Redux2=()=>{

    const inputRefEmployee=useRef()    
    const {employees}  = useSelector((state)=>state.employees)
  
    const dispatch = useDispatch()
    const EventHandler1=()=>{
        dispatch(addEmployee(inputRefEmployee.current.value))
    }
    return(
        <>
        <h1> 2nd Reducer - Employees </h1>
                {
                employees.map((emp)=>{
                    return(  
                        <div>
                            <b> {emp} </b>
                        </div>        
                    )
                })
                }

        <input ref={inputRefEmployee}/>
        <button  onClick={()=>EventHandler1()}> New Employee</button>

        
        </>

        
    )
}


export default Redux2;