

import {useSelector,useDispatch} from "react-redux"
import {useRef} from "react"
import {addEmployee} from "./Redux2/Slices/EmployeeSlice"
import {addDepartment} from "./Redux2/Slices/DepartmentSlice"


const Redux2=()=>{

    const inputRefEmployee=useRef()
    const inputRefDepartment=useRef()
     
   
    
    const {employees}  = useSelector((state)=>state.employees)
    const {departments} = useSelector((state)=>state.departments)
    const dispatch = useDispatch()


    const EventHandler1=()=>{
        dispatch(addEmployee(inputRefEmployee.current.value))
    }
    const EventHandler2=()=>{
       //alert(inputRefDepartment.current.value)
        dispatch(addDepartment(inputRefDepartment.current.value))
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
        {/* <h1> 2nd Reducer - Departments </h1>
        {departments.map((dept)=>{
            return(
                <div>
                <i>{dept}</i>
                </div>
            )
        })}
        <input ref={inputRefDepartment}/>
        <button  onClick={()=>EventHandler2()}> New DEpartment</button> */}
        
        </>

        
    )
}


export default Redux2;