import React from "react";
import { Link } from "react-router-dom";

export default function navbar(props) {
  let myStyle = {
    color: "#006400",
  };
  return (
    <>
      <nav
        className={`navbar navbar-inverse navbar-expand-lg bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Main" style={myStyle}>
            Job Hunter
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={myStyle}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Home"
                  style={myStyle}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={myStyle}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/JobProvider" style={myStyle}>
                  Recruiter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/JobSeeker" style={myStyle}>
                  Job Seekers
                </Link>
              </li>
              <div className="dropdown ml-5">
                <button
                  className="btn btn-success dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/JobSeeker">
                      As a Student
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/JobProvider">
                      As a Recruiter
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

