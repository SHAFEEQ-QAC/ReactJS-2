
import { useLoaderData } from 'react-router-dom' 
import React from 'react';
     
   
const SellerList=()=>{
 
  const sellers= useLoaderData()
   return (
    <div>
        <h2> List OF sellers </h2>
        <table>
            {
                sellers.map( (seller)=>
                <tr>
                    <td>{seller.firstName} </td>
                    <td>{seller.surame} </td>                  
                </tr> )
            }
            <tr>

            </tr>
        </table>
      
    </div>
  );
}

export default SellerList;
