import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0);
  const title = React.createRef();
  useEffect(() => {
    document.title = `clicked: ${counter} times`;
    console.log(counter);
    return () => {
      document.title = "React App";
    };
  }, [counter]);
  const updateincrementone = () => {
    setCounter((prevState) => prevState + 1);
  };
  const updatedecrementone = () => {
    setCount((prevState) => prevState - 1);
  };
  const updateincrementfive = () => {
    setCount((prevState) => prevState + 5);
  };
  return (
    <div>
      <h1 ref={title}></h1>
      <span>{counter}</span>
      <br />
      <span>{count}</span>
      <br />
      <button onClick={updateincrementone}>+1</button>
      <button onClick={updatedecrementone}>-1</button>
      <button onClick={updateincrementfive}>+5</button>
    </div>
  );
};

export default Counter;
