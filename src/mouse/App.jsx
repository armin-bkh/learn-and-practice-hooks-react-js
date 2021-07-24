import React, { useState } from "react";
import Mouse from "./mouse";

const App = () => {
    const [visible, setVisible] = useState(true);
    const removeHandler = () =>{
        setVisible(prevState => !prevState);
        }
  return (
    <div>
        {(visible && <Mouse />)}
      <button onClick={removeHandler}>remove</button>
    </div>
  );
};


export default App;