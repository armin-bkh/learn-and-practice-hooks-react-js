import React, {useState} from 'react';
import useTitle from './hooks/useTitle';

const ClickIncrement = () => {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () =>{
    setCounter(prevState => prevState + 1)
  }
  useTitle(counter);
  return (
    <div>
      <span>click this button: {counter}</span>
      <button onClick={incrementHandler} type="button">click</button>
    </div>
  )
}

const HoverIncrement = () => {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () =>{
    setCounter(prevState => prevState + 1)
  }
  useTitle(counter);
  return (
    <div>
      <span onMouseOver={incrementHandler}>hover on me:{counter}</span>
    </div>
  )
}

export {ClickIncrement, HoverIncrement};