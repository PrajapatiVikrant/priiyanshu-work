import React, { useState, useEffect } from "react";

const EmailInput = ({ value, onChange, error }) => {
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
        type="email"
        className="form-control"
        id="email"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <label htmlFor="email">Email</label>
      <span style={{ color: "Red" }}>{error}</span>
    </div>
  );
};

export default EmailInput;
