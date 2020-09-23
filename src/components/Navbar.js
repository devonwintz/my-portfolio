import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark">
      <a href="/" className="navbar-brand">
        DW
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/#about-me" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="/#my-work" className="nav-link">
              My Work
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
