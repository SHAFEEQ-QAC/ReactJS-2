
import { useLoaderData } from 'react-router-dom' 

     
   
const BuyersList=()=>{
 
  const buyers= useLoaderData()
  console.log("????????????????????????????????????",buyers)

   return (
    <div>
        <h2> List OF Buyers </h2>
        <table>
            {
                buyers.map( (seller)=>
                <tr>
                    <td>{seller.firstName} </td>
                    <td>{seller.surame} </td>
                    <td>{seller.address} </td>
                    <td>{seller.postcode} </td>
                    <td>{seller.phone} </td>
                    
                    
                </tr> )
            }
            <tr>

            </tr>
        </table>
      
    </div>
  );
}

export default BuyersList;
