import React, { Fragment } from "react";

const Generator = ({ name, label, onToggle, checked }) => (
  <Fragment>
    <label htmlFor={`generator-${name}`}>{label}</label>
    <input
      type="checkbox"
      value={name}
      name="generator"
      id={`generator-${name}`}
      checked={checked}
      onChange={() => onToggle(name)}
    />
  </Fragment>
);

export default Generator;
