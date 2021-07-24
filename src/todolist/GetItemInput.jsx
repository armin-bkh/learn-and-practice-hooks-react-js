import React, { useState } from "react";

const GetItem = ({ title, asign, holder }) => {
  const [value, setValue] = useState("");
  const inpRef = React.createRef();
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const clickHandler = () => {
    if (value) {
      asign(value);
      setValue("");
      inpRef.current.placeholder = holder;
    } else {
      inpRef.current.focus();
      inpRef.current.placeholder = "you must write something";
    }
  };
  return (
    <>
      <input
        className="todo-input"
        ref={inpRef}
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder={holder}
      />
      <button className="todo-btn" type="button" onClick={clickHandler}>
        {title}
      </button>
    </>
  );
};

export default GetItem;
