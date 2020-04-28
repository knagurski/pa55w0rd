import React from "react";
import { usePassword } from "../hooks/password";

const PasswordOutput = () => {
  const { password } = usePassword();

  const canCopy = navigator.clipboard && navigator.clipboard.writeText;
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => alert(`copied ${password} to clipboard`));
  };

  return (
    <section className="pa55w0rd__output">
      <div>
        <output className="pa55w0rd__output-field">{password}</output>
        {password && canCopy && (
          <button
            className="pa55w0rd__output-copy-button"
            type="button"
            onClick={e => {
              e.preventDefault();
              copyToClipboard();
            }}
          >
            📋 copy to clipboard
          </button>
        )}
      </div>
    </section>
  );
};

export default PasswordOutput;
