import React from "react";


 /*

 npm i @tanstack/react-query

 */
 import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function Query1() {

    const {data, error, isLoading} = useQuery({
        queryKey:['todos1'], 
        queryFn:async ()=>{
            const res = await fetch('http://localhost:8082/seller');
		return res.json();

        }
    });


    const{mutate,isPending,isError,isSuccess}=useMutation({mutationFn:async (newdata)=>{
       
            const res = await fetch('http://localhost:8082/seller',{
                method:"POST",
                body:JSON.stringify(newdata),
                headers:{"Content-type":"application/json"}
            })
            console.log(JSON.stringify(res.json()))
            return res.json()
        }})

    
	// Error and Loading states
    
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
    if (isPending) return <div> </div>
	return(
        <>
        { isPending && <p> DATA is BEING ADDED </p>}
        <button onClick={()=>mutate({firstName:'Muhammad2',surname:'Shafeeq2'})}> add seller </button>
        <br/>
        {data.map((person)=>
            <div>
                {person.firstName}
                </div>)} </>
    )
}


export default Query1;