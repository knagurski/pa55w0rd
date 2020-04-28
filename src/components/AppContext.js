import React from "react";
import { ConfigContextProvider } from "../hooks/config";
import { PasswordContextProvider } from "../hooks/password";

const AppContext = ({ children }) => (
  <ConfigContextProvider>
    <PasswordContextProvider>{children}</PasswordContextProvider>
  </ConfigContextProvider>
);

export default AppContext;
