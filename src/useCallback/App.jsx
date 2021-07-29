import React, { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import Title from "./Title";
import Name from "./Name";
import BtnNameHandler from "./BtnNameHandler";
import Family from "./Family";
import BtnFamilyHandler from "./BtnFamilyHandler";

const App = () => {
  const initialValue = {
    title: "name and family",
    name: "Mohammad",
    family: "Rezaee",
    innerTxt: ["changeName", "changeFamily"],
  };
  const reducer = (currentState, action) => {
    switch (action.type) {
      case "changeName":
        return {
          ...currentState,
          name: action.value,
        };
      case "changeFamily":
        return {
          ...currentState,
          family: action.value,
        };
      default:
        return currentState;
    }
  };
  const [data, dispatch] = useReducer(reducer, initialValue);
  const { title, name, family, innerTxt } = data;

  const changeNameHandler = useCallback(() => {
    dispatch({
      type: "changeName",
      value: "Armin",
    });
  }, [name]);
  const changeFamilyHandler = useCallback(() => {
    dispatch({
      type: "changeFamily",
      value: "Bakhshi",
    });
  }, [family]);

  const nameChanged = useMemo(()=>{
    if(name !== "Mohammad" && family !== "Rezaee"){
        return "name and family changed"
    }
    else if(family !== "Rezaee"){
        return "family Changed"
    }
    else if(name !== "Mohammad"){
        return "name Changed"
    }
    else{
        return null
    }
  },[name, family])

  return (
    <div>
      <Title title={data.title} subtitle={nameChanged}/>
      <Name name={data.name} />
      <BtnNameHandler eve={changeNameHandler} innerTxt={data.innerTxt[0]} />
      <Family family={data.family} />
      <BtnFamilyHandler eve={changeFamilyHandler} innerTxt={data.innerTxt[1]} />
    </div>
  );
};

export default App;
