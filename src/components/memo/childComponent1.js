
/*

  Wrap a component in memo to get a memoized version of that component. 
  This memoized version of your component will usually not be re-rendered 
  when its parent component is re-rendered as long as its props have not changed. 
  But React may still re-render it: memoization is a performance optimization, not a guarantee.

  memo(Component, arePropsEqual?) 

  Parameters 
        Component:The component that you want to memoize. The memo does not modify 
                  this component, but returns a new, memoized component instead. 
                  Any valid React component, including functions and forwardRef 
                  components, is accepted.

        optional arePropsEqual: 
                  A function that accepts two arguments: the component’s previous props, 
                  and its new props. It should return true if the old and new props are equal: 
                  that is, if the component will render the same output and behave in the same 
                  way with the new props as with the old. Otherwise it should return false. 
                  Usually, you will not specify this function. By default, React will compare each prop 
                  with Object.is.
*/


let a=10
function ChildComponent1() {
    
    a++
    console.log("1st:=>"+a)
  return (
    <div className="App">
        This is 1st Child Component
    </div>
  );
}

export default (ChildComponent1)
