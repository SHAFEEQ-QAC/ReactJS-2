import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { QueryClient, QueryClientProvider,reactquerydevtools } from '@tanstack/react-query';

/*

 Poolig is the techinique use to regularly fetch dta from server at fixed intervals
 
 -refetchInterval in miliseconds
    if the tabe is active the query will be refeteheed after 2 seconds
 - refetchIntervalInBackground:
     even if the tabe is inactive the query will be refeteheed after 2 seconds


*/



const AppComponent1=()=>{
    const {data,isLoading,isError} = useQuery({
        queryKey:['sellers1'],
        queryFn:async ()=>{
            
         const res= await fetch("http://localhost:8082/seller")
         
        return res.json()
        
    },
     refetchInterval:2000,
    //refetchIntervalInBackground:2000
    })
   console.log(isError)

    if(isLoading){
        return <div> Loading..............</div>
    }
   
  return (
    <div>
        <h1> TanStakQuery 4 - refetchInterval </h1>
       
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
