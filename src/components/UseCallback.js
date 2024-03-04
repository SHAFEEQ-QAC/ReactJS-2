
/*

useCallback hoot in React is used to optimize the performance of your component by memoizing functions, 
ensuring that they are not recreacted on every render

the primary use cases for useCallback are:
    *** Function Memoization *** : usecallback memoizes(caches) a function , ensuring that the same 
    functions instance is returned on subsequent renders as long as its dependencies remain  un changed.
    this is particularly useful to pregvent unnecessaary re-renders of the child components that 
    recieve functions as  props.

    


*/
function ForWardRef2() {
  return (
    <div className="App">
        <h1> useCallBack </h1>
    </div>
  );
}


export default ForWardRef2;
