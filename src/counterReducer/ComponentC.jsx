import React, { useContext } from "react";
import { Context } from "./App";
import { CSSTransitionGroup } from "react-transition-group";

const ComponentC = () =>{
  const context = useContext(Context);
  // const changeHandler = (e) =>{
  //   context.func(e.target.name);
  // }
  return (
    <div>
      <h1>{context.counter}</h1>
      <button name={context.innerTxt[0]} onClick={context.func}>{context.innerTxt[0]}</button>
      <button name={context.innerTxt[1]} onClick={context.func}>{context.innerTxt[1]}</button>
    </div>
  )
}
export default ComponentC;
