import React, { useState } from "react";
import GetItem from "./GetItemInput";
import TodoItem from "./TodoItem";
import uuid from "react-uuid";
import "./App.scss";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const asignHandler = (val) => {
    setItems([
      ...items,
      {
        key: uuid(),
        txt: val,
        checked: false,
      },
    ]);
  };
  const updateCheckHandler = (key) => {
    console.log(key);
    setItems(
      items.map((el) => {
        if (el.key === key) {
          el.checked = !el.checked;
        }
        return el;
      })
    );
    console.log(items);
  };
  const list = items.length
    ? items.map((el) => (
        <TodoItem
          key={el.key}
          id={el.key}
          updatecheck={updateCheckHandler}
          check={el.checked}
          innerTxt={el.txt}
        />
      ))
    : "";
  return (
    <React.Fragment>
      <ul className="todo-list">
        <h1 className="header">TodoList</h1>
        <li className="todo-item">
          <GetItem holder="write to do" asign={asignHandler} title="insert" />
        </li>
        {list}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
