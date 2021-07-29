import React, { useState, useEffect, useRef } from "react";

const App = () =>{
  const [counter, setCounter] = useState(0);
  const timer = useRef();
  useEffect(()=>{
    timer.current = setInterval(()=>{
      setCounter(prevState => prevState + 1);
    }, 1000)
    return ()=>{
      clearInterval(timer.current)
    }
  }, [])
  const stopHander = () =>{
    clearInterval(timer.current)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={stopHander}>stop</button>
    </div>
  )
}

export default App;