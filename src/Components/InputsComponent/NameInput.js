import React, { useState, useEffect } from "react";

const NameInput = ({ value, onChange, error }) => {
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id="username"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your username"
      />
      <label htmlFor="username">Username</label>
      <span style={{ color: "Red" }}>{error}</span>
    </div>
  );
};

export default NameInput;
