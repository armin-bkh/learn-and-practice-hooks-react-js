import React, { useState } from "react";
import ComponentA from "./ComponentA";
export const UseContext = React.createContext();
export const UseProvider = UseContext.Provider;
export const UseCosumer = UseContext.Consumer;
export const NewContext = React.createContext();
export const NewProvider = NewContext.Provider;
export const NewConsumer = NewContext.Consumer;
const App = () => {
  return (
    <UseProvider value="Armin">
      <NewProvider value="Bakhshi">
        <ComponentA />
      </NewProvider>
    </UseProvider>
  );
};

export default App;
