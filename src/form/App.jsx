import React, { useState } from "react";
import Finp from "./Input";
/*
const Form = () =>{
  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: ''
  });
  const changeHandler = (e) =>{
    setFullName({
      ...fullName,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(fullName);
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="firstName" value={fullName.firstName} onChange={changeHandler} />
      <input type="text" name="lastName" value={fullName.lastName} onChange={changeHandler} />
      <button type="submit">submit</button>
    </form>
  )
}
*/

const Form = () => {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fullName);
  };
  const passDataHandler = (name, val) => {
    setFullName({
      ...fullName,
      [name]: val,
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <Finp name="firstName" pData={passDataHandler} />
      <Finp name="lastName" pData={passDataHandler} />
      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
