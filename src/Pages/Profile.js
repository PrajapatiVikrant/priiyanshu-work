import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../LoginContext";

const Profile = () => {
  const [data, setData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useContext(LoginContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token) login();
    setIsLoggedIn(true);
    setData(user);
  }, [login]);

  if (!isLoggedIn) {
    return <div>You need to log in to access this page.</div>;
  }
  return (
    <div
      className="container-fluid border border-dark rounded shadow bg-light"
      style={{
        width: "60%",
        margin: "80px auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <img
          src={data.UploadedImage}
          alt={"Profile"}
          width="200"
          height="200"
          style={{
            borderRadius: "60%",
            marginRight: "20px",
            marginTop: "10px",
          }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Hii Welcome Back!</h3>
        <p>ID: {data.id}</p>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>City: {data.city}</p>
        <p>State: {data.state}</p>
        <p>Gender: {data.gender}</p>
        <p>Location: {data.location}</p>
      </div>
    </div>
  );
};

export default Profile;
