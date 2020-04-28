import React, { createContext, useContext, useState } from "react";

const initialConfig = {
  length: 20,
  generators: ["upper", "lower", "number"],
  setConfig: () => {}
};

const ConfigContext = createContext(initialConfig);

export const ConfigContextProvider = ({ children }) => {
  const [config, setConfig] = useState({
    length: 20,
    generators: ["upper", "lower", "number"]
  });

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
