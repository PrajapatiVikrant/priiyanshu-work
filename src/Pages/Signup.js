import React, { useState, useEffect } from "react";
import NameInput from "../Components/InputsComponent/NameInput";
import EmailInput from "../Components/InputsComponent/EmailInput";
import PasswordInput from "../Components/InputsComponent/PasswordInput";
import StateInput from "../Components/StateInput";
import CityInput from "../Components/CityInput";
import ImageUpload from "../Components/ImageUploads";
import { useNavigate } from "react-router-dom";
import ConfirmPassInput from "../Components/InputsComponent/ConfirmPass";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [base64Data, setBase64Data] = useState(null);

  const [successMessage, setSuccessMessage] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cityError, setCityError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [locationError, setLocationError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    if (value.length < 3) {
      setNameError("Username must be 3 characters long");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!Regex) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPassError("password must be 6 character long");
    } else {
      setPassError("");
    }
  };

  const handleConfirmPassChange = (event) => {
    const value = event.target.value;
    setConfirmPass(value);
    if (!value === password) {
      setConfirmPassError("Password does not match");
    } else {
      setConfirmPassError("");
    }
  };

  const handleStateChange = (event) => {
    const value = event.target.value;
    setState(value);
    if (value.length === 0) {
      setStateError("state is required");
    } else {
      setStateError("");
    }
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
    if (value.length === 0) {
      setCityError("city is required");
    } else {
      setCityError("");
    }
  };

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setGender(value);
    if (!value) {
      setGenderError("gender is required");
    } else {
      setGenderError("");
    }
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
    if (!value) {
      setLocationError("location is required");
    } else {
      setLocationError("");
    }
  };

  const handleImageUpload = (base64Data) => {
    setBase64Data(base64Data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !state ||
      !city ||
      !gender ||
      !location ||
      !confirmPass
    ) {
      if (!name) {
        setNameError("Username is required");
      }
      if (!email) {
        setEmailError("Email is required");
      }
      if (!password) {
        setPassError("Password is required");
      }
      if (!state) {
        setStateError("State is required");
      }
      if (!city) {
        setCityError("City is required");
      }
      if (!gender) {
        setGenderError("Gender is required");
      }
      if (!location) {
        setLocationError("Location is required");
      }
      if (!confirmPass) {
        setConfirmPassError("Confirm Password is required");
      }
      return;
    } else {
      if (password !== confirmPass) {
        setConfirmPassError("Password does not match");
        return;
      }
    }

    const formData = {
      name,
      email,
      password,
      state,
      city,
      gender,
      location,
      confirmPass,
      image: base64Data,
    };
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/users/signup",
        formData
      );
      console.log("Signup successful!", response.data);
      setSuccessMessage(true);
      localStorage.setItem("token", response.data.token);
      setBase64Data(null);
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.error("Error signing up:", error);
    }

    setName("");
    setEmail("");
    setPassword("");
    setState("");
    setCity("");
    setGender("");
    setLocation("");
    setConfirmPass("");
  };

  return (
    <div
      className="container border border-light rounded shadow"
      style={{
        width: "50%",
        margin: "60px auto",
        paddingTop: 5,
        backgroundColor: "lightblue",
      }}
    >
      <form onSubmit={handleSubmit} style={{ marginTop: 15 }} method="post">
        <NameInput value={name} onChange={handleNameChange} error={nameError} />
        <EmailInput
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />
        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          error={passError}
        />
        <ConfirmPassInput
          value={confirmPass}
          onChange={handleConfirmPassChange}
          error={confirmPassError}
        />

        <StateInput
          value={state}
          onChange={handleStateChange}
          error={stateError}
        />
        <CityInput value={city} onChange={handleCityChange} error={cityError} />

        <div className="form-check mb-3">
          <input
            type="radio"
            className="form-check-input"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
          <br />
          <input
            type="radio"
            className="form-check-input"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
          <br />
          <span style={{ color: "Red" }}>{genderError}</span>
        </div>

        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="location"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="">Select a location</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Mumbai">Mumbai</option>
          </select>
          <label htmlFor="location">Office Location</label>
          <span style={{ color: "red" }}>{locationError}</span>
        </div>

        <ImageUpload onImageUpload={handleImageUpload} />

        <div className="mb-3">
          {successMessage && (
            <div
              className="alert alert-primary d-flex align-items-center"
              role="alert"
            >
              Signup successful! Redirecting to login page...
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
