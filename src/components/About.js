import React from "react";
import pic1 from "../images/About_img.png";
import pic2 from "../images/teamLead.jpg";
class About extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="row px-4 py-4 justify-content-center">
          <div className="col-sm-6 mt-5 px-4 py-4">
            <h1 style={{ fontWeight: "bold", color: "#006400" }}>About Us</h1>

            {/* About us content */}

            <p style={{ fontSize: 23, fontFamily: "Cochin" }}>
              Job Hunter, connects startup founders, business owners,
              recruiters, and HR heads directly to job seekers and candidates.
              Hirect's intelligent AI-matching algorithms, inbuilt chat, and
              verification features make it possible to schedule interviews
              within the app. It connects candidates with decision-makers
              quickly. Job Hunter is a chat-based, direct hiring platform
              designed for high-growth startups to meet their hiring needs
              without consultants and with 100% data privacy.
            </p>
          </div>

          {/* Image side by abount content */}

          <div className="col-sm-6 mt-5 px-2 py-4">
            <img
              src={pic1}
              alt="..."
              style={{ width: "300px", height: "400px" }}
              class="center mt-5"
            />
          </div>
        </div>

        <h1 className="center py-4">Meet the team</h1>

        {/* ALl team member details */}

        <div className="row row-cols-1 row-cols-md-3 g-4 px-4 py-4 ms-5">
          {/* Vaibhav kumar details */}

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h5
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "white" }}
                >
                  Vaibhav Kumar (Team Leader)
                </h5>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 4th year Undergraduate student at BIT Mesra. A coding
                  enthusists. A MERN developer and have experience of 1 year in
                  this field.
                </p>
                <button type="button" class="btn btn-light">
                  Connect with Vaibhav
                </button>
              </div>
            </div>
          </div>

          {/* Aasia fatma details */}

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h5
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "white" }}
                >
                  Aasia Fatma
                </h5>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A React Js developer and open-source contributer.
                </p>
                <button type="button" class="btn btn-light">
                  Connect with Aasia
                </button>
              </div>
            </div>
          </div>

          {/* Saumya chauhan details */}

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h5
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "white" }}
                >
                  Saumya Chauhan
                </h5>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A Web developer.
                </p>
                <button type="button" class="btn btn-light">
                  Connect with Saumya
                </button>
              </div>
            </div>
          </div>

          {/* Priyanshu roy details */}

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h5
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "white" }}
                >
                  Priyanshu Roy
                </h5>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A Competitive Programmer.
                </p>
                <button type="button" class="btn btn-light">
                  Connect with Priyanshu
                </button>
              </div>
            </div>
          </div>

          {/* Shreya shanakr details */}

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h5
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "white" }}
                >
                  Shreya Shankar
                </h5>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A Web developer .
                </p>
                <button type="button" class="btn btn-light">
                  Connect with Shreya
                </button>
              </div>
            </div>
          </div>

          {/* Aayushi Jaiswal details */}

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h5
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "white" }}
                >
                  Aayushi Jaiswal
                </h5>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A Web developer .
                </p>
                <button type="button" class="btn btn-light">
                  Connect with Aayushi
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
