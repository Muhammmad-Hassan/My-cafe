import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <Context.Provider value={{ active, setActive }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
