import React from "react";
import pic from "../images/stud_login.png";
import { Link } from "react-router-dom";
class JobSeeker extends React.Component {
  state = {};
  render() {
    const myStyle = {
      color: "#2e8b57",
      fontFamily: "Cochin",
    };
    let myStyle1 = {
      width: "700px",
    };
    return (
      <>
      <div style={{backgroundColor: "#d3d3d3"}}>
      <nav className={`navbar navbar-inverse navbar-expand-lg`}>
            <div className="container-fluid mr-5 px-5">
            <Link className="nav-link" to="/home" style={{fontSize: "30px", color: "#006400", fontWeight: "600"}}>
                      Job Hunter
                    </Link>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-lg-0">
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
                  <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-secondary" style={{backgroundColor: "white",  color: "#006400"}}>
                <Link className="nav-link" to="/JobSeeker" style={{backgroundColor: "white",  color: "#006400"}}>
                      Student Login
                    </Link>
                </button>
                <button type="button" className="btn btn-success" >
                <Link className="nav-link" to="/JobProvider"style={{color: "white"}} >
                      Industry Login
                    </Link>
                </button>
              </div>
                </ul>
              </div>
            </div>
          </nav>
        {/* Image shown on the page */}
        <img
          src={pic}
          className="center mt-5 ml-5 "
          style={myStyle1}
          alt="..."
        />

        {/* forms */}

        <div className="row px-4 py-4">

        {/* Form signup */}

          <div className="col-sm-6 px-2 py-2">
            <div className="card border border-success">
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Sign Up here
                </h5>
                <p className="card-text">
                  <form
                    className="row g-3 py-4"
                  >
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        placeholder="Your First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        placeholder="Your Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName4"
                        placeholder="Your User Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Your Password"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        id="inputCollegel4"
                        placeholder="Your College"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        placeholder="Your Stream"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        placeholder="Your Graduation Year"
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        class="btn btn-outline-success btn-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </p>
              </div>
            </div>
          </div>

          {/* form Login */}

          <div className="col-sm-6 px-2 py-2">
            <div className="card border border-success bg secondary">
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Login Here...
                </h5>
                <p className="card-text">
                  <form
                    className="row g-3 py-4"
                  >
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName4"
                        placeholder="Your User Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Your Password"
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        class="btn btn-outline-success btn-lg"
                      >
                       Login
                      </button>
                    </div>
                  </form>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default JobSeeker;
