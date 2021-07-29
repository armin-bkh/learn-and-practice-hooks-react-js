import React, { useReducer, useEffect } from "react";
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
          loading: !currentState.loading,
          error: "",
          data: action.value,
        };
      case "error":
        return {
          loading: !currentState.loading,
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
      .get("https://dummy.restapiexample.com/api/v1/employee/10")
      .then((res) => {
        dispatch({ type: "success", value: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: "error" });
      });
  }, []);
  return (
    <h1>
      {employee.loading
        ? "loading please wait..."
        : employee.data.employee_name}
      {employee.error ? employee.error : null}
    </h1>
  );
};

export default App;
