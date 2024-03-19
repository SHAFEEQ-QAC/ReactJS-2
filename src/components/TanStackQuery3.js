import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { QueryClient, QueryClientProvider,reactquerydevtools } from '@tanstack/react-query';

/*

  React Query is not only npt only *Data fetching* solution but also *state management solution*
    npm i @tanstack/react-query 
    npm i @tanstack/react-query-devtools
    Satle Time:
    staleTime is a configuration option in React Query that specifies the duration (in milliseconds) 
    for which the fetched data is considered fresh. During this period, React Query won't automatically 
    refetch the data. This helps improve performance and by reducing unnecessary network

    Stale Time is not egouhg to re eecure the query>
    There are other factors as well
    1. when new instance of the query is mounted
    2. or teh window is refocused
    3. or when the network is reconected

*/



const AppComponent1=()=>{
    const {data,isLoading,isError} = useQuery({
        queryKey:['sellers1'],
        queryFn:async ()=>{
            
         const res= await fetch("http://localhost:8082/seller")
         
        return res.json()
        
    }
    , refetchInterval:4000
    })
   console.log(isError)

    if(isLoading){
        return <div> Loading..............</div>
    }
    console.log("What????")
  return (
    <div>
        <h1> TanStakQuery - Reading Data TanStackQuery3</h1>
       
      {isLoading}
      <br/>
      {isError}
      <br/>
        {
            data.map((rec)=>
            <div>
                <b> {rec.id},{rec.firstName},{rec.surname}</b>
            </div>
            )
        }
      <br/>
      
    </div>
  );
}
export default AppComponent1;
