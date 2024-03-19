import { useQuery,useMutation } from '@tanstack/react-query';
import React from 'react';
import { QueryClient, QueryClientProvider,useQueryClient } from '@tanstack/react-query';

/*

  React Query is not only npt only *Data fetching* solution but also *state management solution*
    npm i @tanstack/react-query 

    queryClient.invalidateQueries({queryKey:["sellers1"]})
    will invalidae a query and the query will instantly get reexecuted and will bring the 
    fresh data

    Satle Time:
    staleTime is a configuration option in React Query that specifies the duration (in milliseconds) 
    for which the fetched data is considered fresh. During this period, React Query won't automatically 
    refetch the data. This helps improve performance and by reducing unnecessary network

*/

const AppComponent1=()=>{
    const queryClient=useQueryClient()
    const {mutate,isPendding,isError} = useMutation({
        queryKey:['todos'],
        mutationFn:async (newRec)=>{
            
         const res= await fetch("http://localhost:8082/seller",{
          method:"POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(newRec)
         }).then((res)=>res.json)
         
    },onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:["sellers1"]})
    }})
   console.log(isError)

    if(isPendding){
        return <div> Loading..............</div>
    }

  return (
    <div>
        <h1> TanStakQuery - POSTING Data </h1>
       
    <button onClick={()=>mutate({firstName:"James1",surname:"Bond1"})}> Save Data</button>
    <button onClick={()=>queryClient.invalidateQueries({queryKey:["sellers1"]})}> Refetch The data</button>
      <br/>
      
    </div>
  );
}
export default AppComponent1;
