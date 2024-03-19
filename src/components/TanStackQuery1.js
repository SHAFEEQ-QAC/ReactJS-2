

/*

  React Query is not only npt only *Data fetching* solution but also *state management solution*
    npm i @tanstack/react-query 
    

*/
import { useQuery,useMutation } from '@tanstack/react-query';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const AppComponent1=()=>{
    const {mutate,isPendding,isError} = useMutation({
        queryKey:['todos'],
        mutationFn:async (newRec)=>{
            
         const res= await fetch("http://localhost:8082/seller",{
          method:"POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(newRec)
         }).then((res)=>res.json)

    }})
   console.log(isError)

    if(isPendding){
        return <div> Loading..............</div>
    }

  return (
    <div>
        <h1> TanStakQuery - POSTING Data (TanStackQuery-1) </h1>
       
    <button onClick={()=>mutate({firstName:"James1",surname:"Bond1"})}> Save Data</button>
      <br/>
      
    </div>
  );
}
export default AppComponent1;
