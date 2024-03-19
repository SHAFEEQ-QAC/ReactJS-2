
import {useLoaderData} from "react-router-dom"

function ShowData1() {
const  loaderData= useLoaderData()
console.log("==========>",loaderData)
  return (
    <div className="App">
    <h1> Displayin Dtata from loader function (data comming from Fetch)</h1>
    {!loaderData ?"Loading":"Done"}
    {
        loaderData.map((rec)=>(
                <b> 
                  {rec.firstName} 
                  <br/>
                </b>
                ))
      }
    
    </div>
  );
}

export default ShowData1
