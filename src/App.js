import { React, useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Layouts/Header";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Footer from "./Layouts/Footer";
import Profile from "./Pages/Profile";
import { LoginProvider, LoginContext } from "./LoginContext";

const App = () => {
  const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useContext(LoginContext);
    let navigate = useNavigate();

    if (!isLoggedIn) {
      return navigate("/login");
    }

    return children;
  };
  return (
    <LoginProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginProvider>
  );
};

export default App;
