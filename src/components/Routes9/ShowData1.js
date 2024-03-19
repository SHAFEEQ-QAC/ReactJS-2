
import {useLoaderData} from "react-router-dom"

function ShowData1() {
const  loaderData= useLoaderData()

  return (
    <div className="App">
    <h1> Displayin Dtata from loader function</h1>
    
    {
        loaderData.map((rec)=>(
                <b> 
                  {rec.name}
                  <br/>
                </b>
                ))
      }
    </div>
  );
}

export default ShowData1
