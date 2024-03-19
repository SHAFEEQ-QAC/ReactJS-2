
import { useLoaderData } from 'react-router-dom' 

     
   
const SellersList=()=>{
 
  const sellers= useLoaderData()
  console.log("????????????????????????????????????",sellers)

   return (
    <div>
        <h2> List OF Sellers </h2>
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

export default SellersList;
