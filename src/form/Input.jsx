import React, { useState } from "react";

const Finp = ({ name, pData }) => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
    pData(e.target.name, e.target.value);
  };
  return (
    <React.Fragment>
      <label>
        {name}: {value}
      </label>
      <input type="text" name={name} onChange={changeHandler} />
    </React.Fragment>
  );
};

export default Finp;
