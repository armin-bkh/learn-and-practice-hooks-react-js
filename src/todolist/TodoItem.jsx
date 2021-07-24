import React from "react";

const TodoItem = ({ innerTxt, check, updatecheck, id }) => {
  const checkHandler = () => {
    updatecheck(id);
  };
  return (
    <>
      <li className="todo-item">
        <input type="checkbox" onChange={checkHandler} checked={check} />
        <span className="item-text">{innerTxt}</span>
      </li>
    </>
  );
};

export default TodoItem;
