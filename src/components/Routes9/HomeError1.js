
import {useRouteError} from "react-router-dom"


function HomeError1() {
    const Error1=useRouteError()
    console.log(Error1)
  return (
    <div className="App">
    <h1> Error Occured</h1>

    Error: <b> {Error1.data} </b>

    </div>
  );
}

export default HomeError1
