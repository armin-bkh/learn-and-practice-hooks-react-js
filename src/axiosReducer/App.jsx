import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import './App.scss';

const App = () => {
  const initialValue = {
    loading: true,
    error: "",
    data: {},
  };
  const reducer = (currentState, action) => {
    switch (action.type) {
      case "success":
        return {
          loading: false,
          error: "",
          data: action.data,
        };
      case "error":
        return {
          loading: false,
          error: "we have a same error",
          data: {},
        };
      default:
        return currentState;
    }
  };
  const [employee, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employee/4")
      .then((res) => {
          dispatch({ type: "success", data: res.data.data });
        })
      .catch((err) => dispatch({ type: "error", data: [] }));
  }, []);
  return <h1>
      {employee.loading ? "loading" : employee.data.employee_name}
      {employee.error ? employee.error : null}
  </h1>;
};

export default App;
