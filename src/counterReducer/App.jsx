import React, { useEffect, useReducer } from "react";
import ComponentA from "./ComponentA";

// const reducer = (currentState, action) => {
//   switch (action.type) {
//     case "incrementOne":
//       return { ...currentState, count1: currentState.count1 + action.value };
//     case "decrementOne":
//       return { ...currentState, count1: currentState.count1 - action.value };
//     case "incrementTwo":
//       return { ...currentState, count2: currentState.count2 + action.value };
//     case "decrementTwo":
//       return { ...currentState, count2: currentState.count2 - action.value };
//       default:
//       return currentState;
//   }
// };
// const initialValue = {
//   count1: 0,
//   count2: 0,
// };

// const App = () => {
//   const [counter, disPatch] = useReducer(reducer, initialValue);

//   return (
//     <div>
//       <h1>{counter.count1}</h1>
//       <button onClick={() => disPatch({type: "incrementOne", value: 5})}>increment</button>
//       <button onClick={() => disPatch({type: "decrementOne", value: 5})}>decrement</button>
//       <h1>{counter.count2}</h1>
//       <button onClick={() => disPatch({type: "incrementTwo", value: 5})}>increment</button>
//       <button onClick={() => disPatch({type: "decrementTwo", value: 5})}>decrement</button>
//     </div>
//   );
// };

// const initialValue = 0;
// const reducer = (currentState, action) => {
//   switch (action) {
//     case "increment":
//       return currentState + 1;
//     case "decrement":
//       return currentState - 1;
//     default:
//       return currentState;
//   }
// };
// export const UseContext = React.createContext();
// const UseProvider = UseContext.Provider;
// const App = () => {
//   const [counterOne, disPatchOne] = useReducer(reducer, initialValue);
//   // const [counterTwo, disPatchTwo] = useReducer(reducer, initialValue);
//   return (
//     // <div>
//     //     <h1>{counterOne}</h1>
//     //     <button onClick={()=> disPatchOne("increment")}>increment</button>
//     //     <button onClick={()=> disPatchOne("decrement")}>decrement</button>
//     //     <h1>{counterTwo}</h1>
//     //     <button onClick={()=> disPatchTwo("increment")}>increment</button>
//     //     <button onClick={()=> disPatchTwo("decrement")}>decrement</button>
//     // </div>
//     <UseProvider value={{ counter: counterOne, reduce: disPatchOne }}>
//       <ComponentA />
//     </UseProvider>
//   );
// };

// export default App;

// const App = () => {
//   const initialValue = {
//     num1: 0,
//     num2: 0,
//   };
//   const reducer = (currentState, action) => {
//     switch (action) {
//       case "incrementOne":
//         return { ...currentState, num1: currentState.num1 + 1 };
//       case "decrementOne":
//         return { ...currentState, num1: currentState.num1 - 1 };
//       case "incrementTwo":
//         return { ...currentState, num2: currentState.num2 + 1 };
//       case "decrementTwo":
//         return { ...currentState, num2: currentState.num2 - 1 };
//       default:
//         return currentState;
//     }
//   };
//   const [counter, dispatch] = useReducer(reducer, initialValue);
//   const changeHandler = (e) => {
//     dispatch(e.target.name);
//   };
//   return (
//     <div>
//       <h1>{counter.num1}</h1>
//       <button name="incrementOne" onClick={changeHandler}>
//         increment
//       </button>
//       <button name="decrementOne" onClick={changeHandler}>
//         decrement
//       </button>
//       <h1>{counter.num2}</h1>
//       <button name="incrementTwo" onClick={changeHandler}>
//         decrement
//       </button>
//       <button name="decrementTwo" onClick={changeHandler}>
//         decrement
//       </button>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const initialValue = {
//     count1: 0,
//     count2: 10,
//   };
//   const reducer = (currentState, action) => {
//     switch (action.type) {
//       case "incrementOne":
//         return {...currentState, count1: currentState.count1 + action.value};
//       case "decrementOne":
//         return {...currentState, count1: currentState.count1 - action.value};
//       case "incrementTwo":
//         return {...currentState, count2: currentState.count2 + action.value};
//       case "decrementTwo":
//         return {...currentState, count2: currentState.count2 - action.value};
//       default:
//         return currentState;
//     }
//   };
//   const [counter, dispatch] = useReducer(reducer, initialValue);
//   const changeHandler = (e) => {
//     dispatch({ type: e.target.name, value: 5});
//   };
//   return (
//     <div>
//       <h1>{counter.count1}</h1>
//       <button name="incrementOne" onClick={changeHandler}>
//         increment
//       </button>
//       <button name="decrementOne" onClick={changeHandler}>
//         decrement
//       </button>
//       <h1>{counter.count2}</h1>
//       <button name="incrementTwo" onClick={changeHandler}>
//         increment
//       </button>
//       <button name="decrementTwo" onClick={changeHandler}>
//         decrement
//       </button>
//     </div>
//   );
// };

// export default App;




// const App = () =>{
//   const initialValue = 0;
//   const reducer = (currentState, action) =>{
//     switch (action){
//       case "increment":
//         return currentState + 1;
//       case "decrement": 
//         return currentState - 1;
//       default:
//         return currentState;
//     }
//   }
//   const [counterOne, dispatchOne] = useReducer(reducer, initialValue);
//   const [counterTwo, dispatchTwo] = useReducer(reducer, initialValue);
//   const changeHandlerOne = (e) =>{
//     dispatchOne(e.target.name);
//   }
//   const changeHandlerTwo = (e) =>{
//     dispatchTwo(e.target.name);
//   }
//   return (
//     <div>
//       <h1>{counterOne}</h1>
//       <button name="increment" ev="dispatchOne" onClick={changeHandlerOne}>incerment</button>
//       <button name="decrement" ev="dispatchOne" onClick={changeHandlerOne}>decerment</button>
//       <h1>{counterTwo}</h1>
//       <button name="increment" ev="dispatchTwo" onClick={changeHandlerTwo}>incerment</button>
//       <button name="decrement" ev="dispatchTwo" onClick={changeHandlerTwo}>decerment</button>
//     </div>
//   )
// }

// export default App;


// const App = () =>{
//   const initialValue = 0;
//   const reducer = (currentState, action) =>{
//     switch(action.type) {
//       case "increment":
//         return currentState + 1;
//       case "decrement":
//         return currentState - 1;
//       default:
//         return currentState;
//     }
//   }
//   const [counter, dispatch] = useReducer(reducer, initialValue);
//   const changeHandler = (e) =>{
//     dispatch({type: e.target.name})
//   }
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button name="increment" type="button" onClick={changeHandler}>increment</button>
//       <button name="decrement" type="button" onClick={changeHandler}>decrement</button>
//     </div>
//   )
// }
// export default App;

export const Context = React.createContext();
export const Provider = Context.Provider;

const App = () =>{
  const initialValue = 0;
  const reducer = (currentState, action) => {
    switch(action.type){
      case "increment":
        return currentState + 1;
      case "decrement":
        return currentState - 1;
      default:
        return currentState;
    }
  }
  const [counter, dispatch] = useReducer(reducer, initialValue);
  useEffect(()=>{
    document.title = `number of counter is: ${counter}`;
  },[counter])
  const changeHandler = (e) =>{
    dispatch({type: e.target.name})
  }
  return (
    <Provider value={{innerTxt: ["increment", "decrement"], func: changeHandler, counter: counter}}>
    <ComponentA />
    </Provider>
  )
}

export default App;