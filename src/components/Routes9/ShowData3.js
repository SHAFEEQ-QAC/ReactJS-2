
import { useLoaderData } from "react-router-dom"

function ShowData1() {
    const loaderData = useLoaderData()
  


    return (
        <div className="App">
            <h1> Displaying Data from loader function - Show Data3</h1>
            {
                loaderData.status && <div> {loaderData.status} </div>


            }
            <br />

            {

                !loaderData.status && loaderData?.map((rec) => (
                    <b>
                        {rec.name}
                        <br />
                    </b>
                ))
            }

        </div>
    );
}

export default ShowData1
