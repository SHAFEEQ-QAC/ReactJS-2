

/*

useContext is a react Hook that provides a ways to access the value of a context directly in 
functional component without having to explicity pass down props through intermediary components. 
The *useContext* Hook is a part of the context API, whcihs is a mechanisam is react that allows data to 
be passed through the component tree without having to pass props down manually to every level
 

*/

import UseContextChild1 from "./useContext3/UseContextChild1.js"

function UseContext1() {

  return (
    <div className="App">
 
    <UseContextChild1/>

    </div>
  );
}


export default UseContext1;

