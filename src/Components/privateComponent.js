import React from "react";
import { useContext } from "react";
import { LoginContext } from "../LoginContext";

const PrivateComponent = () => {
  const { isLoggedIn } = useContext(LoginContext);

  if (!isLoggedIn) {
    return (
      <div className="navbar-header">
        <span className="navbar-brand">Codefire Technology</span>
      </div>
    );
  }

  return null;
};

export default PrivateComponent;
