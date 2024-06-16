import React from "react";

const Footer = () => {
  return (
    <footer className="bg-info text-center text-lg-start fixed-bottom">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "lightgrey" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <h5>Site design by @Priyanshu</h5>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
