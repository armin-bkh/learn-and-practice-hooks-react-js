import React, { useState } from "react";
import useTitle from "./hooks/useTitle";

const App = () => {
  const [counter, setCounter] = useState(0);
  useTitle(counter);
  const incrementHandler = () => {
    setCounter((prevState) => prevState + 1);
  };
  return (
    <div>
      <h4>clicked: {counter} times</h4>
      <button onClick={incrementHandler}>click</button>
    </div>
  );
};

const AppTwo = () => {
    const [counter, setCounter] = useState(0);
    useTitle(counter);
    const incrementHandler = () => {
      setCounter((prevState) => prevState + 1);
    };
    return (
      <div>
        <h4>mouseoverd: {counter} times</h4>
        <h1 onMouseOver={incrementHandler}>hover</h1>
      </div>
    );
  };

export {App, AppTwo};
