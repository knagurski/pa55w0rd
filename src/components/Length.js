import React, { Fragment } from "react";

const Length = ({ label, length, setLength }) => (
  <Fragment>
    <label htmlFor="length">{label}</label>
    <div className="pa55w0rd__config-length-field">
      <input
        type="range"
        min="5"
        max="50"
        name="length"
        id="length"
        value={length}
        onChange={e => setLength(e.target.value)}
      />
      <span>{length}</span>
    </div>
  </Fragment>
);

export default Length;
