import { memo } from "react";


    const UseCallBackChild1 = ({function1})=>{

        console.log("child1")
        return(
          <>
          <button onClick={()=>function1()}> Click 2 </button>
          </>
        )
      }
export default memo(UseCallBackChild1);