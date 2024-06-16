import React, { useState, useEffect } from "react";

const StateInput = ({ value, onChange, error }) => {
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
        id="state"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your state"
      />
      <label htmlFor="state">State</label>
      <span style={{ color: "Red" }}>{error}</span>
    </div>
  );
};

export default StateInput;
