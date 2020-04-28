import React from "react";
import AppContext from "./AppContext";
import PasswordConfig from "./PasswordConfig";
import PasswordOutput from "./PasswordOutput";

const App = () => (
  <AppContext>
    <section className="pa55w0rd__config">
      <header className="pa55w0rd__header">
        <h1>Pa55w0rd</h1>
        <h2>A little password generator</h2>
      </header>
      <PasswordConfig />
    </section>
    <PasswordOutput />
  </AppContext>
);

export default App;
