import React from "react";
import pic from "../images/stud_login.png";
class JobSeeker extends React.Component {
  state = {};
  render() {
    let myStyle1 = {
      width: "700px",
    };
    return (
      <>
        {/* Image shown on the page */}
        <img
          src={pic}
          className="center mt-5 ml-5 "
          style={myStyle1}
          alt="..."
        />
        <div className="row px-4 py-2">
          {/* Sign up form */}

          <div className="col-sm-6 px-4 py-2">
            <div className="card border border-success mt-5 px-2 py-4">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputName14" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName14"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputLastName14" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName14"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputEmail14" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail14"
                    placeholder="abc@gmail.com"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputPassword14" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword14"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCollege" className="form-label">
                    College
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCollege"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputGraduationYear" className="form-label">
                    Year of graduation
                  </label>
                  <select id="inputGraduationYear" className="form-select">
                    <option selected>Choose...</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputCourse" className="form-label">
                    {" "}
                    Course
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCourse"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-outline-success">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Login form */}

          <div className="col-sm-6 px-4 py-2">
            <div className="card border border-success mt-5 px-2 py-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                </div>
                <button type="submit" className="btn btn-outline-success">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobSeeker;
