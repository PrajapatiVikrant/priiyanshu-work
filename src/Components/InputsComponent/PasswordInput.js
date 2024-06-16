import React, { useState, useEffect } from "react";

const PasswordInput = ({ value, onChange, error }) => {
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
        type="password"
        className="form-control"
        id="password"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <label htmlFor="password">Password</label>
      <span style={{ color: "Red" }}>{error}</span>
    </div>
  );
};

export default PasswordInput;
