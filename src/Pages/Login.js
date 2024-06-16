import React, { useContext, useState } from "react";
import axios from "axios";
import EmailInput from "../Components/InputsComponent/EmailInput";
import PasswordInput from "../Components/InputsComponent/PasswordInput";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";

const Login = () => {
  const { login } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginMessage, setLoginMessage] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log("Login successful");
      setEmail("");
      setPassword("");
      login();
      setLoginMessage(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <div
        className="container border border-light rounded shadow"
        style={{
          width: "50%",
          margin: "80px auto",
          paddingTop: 20,
          backgroundColor: "lightblue",
        }}
      >
        <form onSubmit={handleSubmit}>
          <EmailInput
            value={email}
            onChange={handleEmailChange}
            error={error}
          />
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            error={error}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: "10px" }}
          >
            Login
          </button>
        </form>
      </div>

      <div>
        {loginMessage && (
          <div
            className="alert alert-primary d-flex align-items-center"
            role="alert"
          >
            Login successful!
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
