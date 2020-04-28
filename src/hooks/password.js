import React, { createContext, useCallback, useContext, useState } from "react";
import { useConfig } from "./config";
import { generatePassword as generate } from "../core/generator";

const initialPassword = {
  password: "",
  generatePassword: () => {}
};

const PasswordContext = createContext(initialPassword);

export const PasswordContextProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const { config } = useConfig();

  const generatePassword = useCallback(() => setPassword(generate(config)), [
    config
  ]);

  return (
    <PasswordContext.Provider value={{ password, generatePassword }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => useContext(PasswordContext);
