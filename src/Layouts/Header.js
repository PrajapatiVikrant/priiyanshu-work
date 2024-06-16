import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";
import PrivateComponent from "../Components/privateComponent";

const Header = () => {
  const { isLoggedIn, login, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      login();
    }
  }, [login]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-md text-white fixed-top"
      style={{ backgroundColor: "grey" }}
    >
      <div className="container-fluid">
        <PrivateComponent />
        <div className="row w-100">
          <div className="col-lg-6">
            {!isLoggedIn ? (
              <span></span>
            ) : (
              <Link
                className="btn btn-outline-white bg-info mr-2 navbar-brand"
                to="/home"
              >
                Home
              </Link>
            )}
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            {!isLoggedIn ? (
              <>
                <Link className="btn btn-outline-white bg-info" to="/signup">
                  Signup
                </Link>
                <span>&nbsp;</span>
                <Link className="btn btn-outline-white bg-info" to="/login">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn btn-outline-white bg-info mr-2"
                  to="/home/profile"
                >
                  Profile
                </Link>
                <span>&nbsp;</span>
                <Link
                  className="btn btn-outline-white bg-info"
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
