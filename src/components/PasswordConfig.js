import React from "react";
import { useConfig } from "../hooks/config";
import { usePassword } from "../hooks/password";
import Generator from "./Generator";
import Length from "./Length";

const PasswordConfig = () => {
  const { config, setConfig } = useConfig();
  const { generatePassword } = usePassword();

  const toggleGenerator = generatorName => {
    const generators = [...config.generators];

    if (generators.includes(generatorName)) {
      generators.splice(generators.indexOf(generatorName), 1);
    } else {
      generators.push(generatorName);
    }

    setConfig({ ...config, generators });
  };

  return (
    <form
      className="pa55w0rd__config-form"
      onSubmit={e => {
        e.preventDefault();
        generatePassword();
      }}
    >
      <Generator
        name="upper"
        label="Uppercase letters"
        checked={config.generators.includes("upper")}
        onToggle={toggleGenerator}
      />
      <Generator
        name="lower"
        label="Lowercase letters"
        checked={config.generators.includes("lower")}
        onToggle={toggleGenerator}
      />
      <Generator
        name="number"
        label="Numbers"
        checked={config.generators.includes("number")}
        onToggle={toggleGenerator}
      />
      <Generator
        name="symbol"
        label="Symbols"
        checked={config.generators.includes("symbol")}
        onToggle={toggleGenerator}
      />
      <Length
        label="Password length"
        length={config.length}
        setLength={length => setConfig({ ...config, length })}
      />
      <button type="submit" className="pa55w0rd__config-button">
        Generate password
      </button>
    </form>
  );
};

export default PasswordConfig;
