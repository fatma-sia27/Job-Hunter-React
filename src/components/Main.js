import React from "react";
import pic from "../images/intro_pic1.png";
import pic1 from "../images/main_2ndImage.png";
import { Link } from "react-router-dom";
class Main extends React.Component {
  state = {};
  render() {
    let myStyle = {
      width: "750px",
    };
    return (
      <>
        {/* Image  which is shown at home page */}
        <img
          src={pic}
          className="center mt-5 ml-5 "
          style={myStyle}
          alt="Tbhis is an image"
        />
        {/* Here starts code of Search box */}
        <div
          className="search search-lg mb-3 px-5 py-3"
          aria-label=".form-select-lg example"
        >
          <div className="input-group mb-3">
            <span className="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for a job"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">
              <button type="button" class="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>

        {/* Container of student Login and Industry login */}

        <div className="row px-5 py-4">
          <div className="col-sm-6 px-2 py-2">
            <div className="card border border-success">
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Jobs for Student
                </h5>
                <p className="card-text">
                  Enter your interest and we will recommend you Jobs of your
                  interest.
                </p>
                <Link to="/JobSeeker" className="btn btn-success btn-lg">
                  Student Login
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 px-2 py-2">
            <div className="card border border-success bg secondary">
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Want an Employee?
                </h5>
                <p className="card-text">
                  We will hire employee for your industry.
                </p>
                <Link to="/Recruiter" className="btn btn-success btn-lg">
                  Industry Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image on main website */}
        
        <img src={pic1} alt="" style={myStyle} className="center mt-5 ml-5 " />
      </>
    );
  }
}

export default Main;
