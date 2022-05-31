import React from "react";
import pic from "../images/indus_login.png";
import pic1 from "../images/recruiter_img.png";
class JobProvider extends React.Component {
  state = {};
  render() {
    let myStyle = {
      width: "700px",
    };
    return (
      <>
        {/* image to be shown first */}
        <img
          src={pic}
          className="center mt-5 ml-5 "
          style={myStyle}
          alt="..."
        />
        {/* form for recruiter */}
        <div className="row px-4 py-4">
        <form className="row g-3 px-4 py-4 mt-5 ml-5" style={{ width: "40rem" }} >
          <h1>Hurry up fill the form with required skills...</h1>
        <div className="col-md-6">
          {/* <label htmlFor="inputEmail4" className="form-label">Email</label> */}
          <input type="text" className="form-control" id="inputEmail4" placeholder="Your Name"/>
        </div>
        <div className="col-md-6">
          {/* <label htmlFor="inputPassword4" className="form-label">Password</label> */}
          <input type="number" className="form-control" id="inputPassword4" placeholder="Your Mobile number"/>
        </div>
        <div className="col-12">
          {/* <label htmlFor="inputAddress" className="form-label">Address</label> */}
          <input type="text" className="form-control" id="inputAddress" placeholder="Required skills" />
        </div>
        <div className="col-12">
          {/* <label htmlFor="inputAddress2" className="form-label">Address 2</label> */}
          <input type="text" className="form-control" id="inputAddress2" placeholder="Required skills" />
        </div>
        <div className="col-md-6">
          {/* <label htmlFor="inputCity" className="form-label">City</label> */}
          <input type="text" className="form-control" id="inputCompany" placeholder="Your Company name"/>
        </div>
        <div className="col-md-6">
          {/* <label htmlFor="inputCity" className="form-label">City</label> */}
          <input type="email" className="form-control" id="inputEmail" placeholder="Your Work email"/>
        </div>
        <div className="col-md-6">
          {/* <label htmlFor="inputCity" className="form-label">City</label> */}
          <input type="text" className="form-control" id="inputPosition" placeholder="Your Position"/>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Remember me
            </label>
          </div>
        </div>
        <div className="col-12">
        <button type="button" class="btn btn-outline-success btn-lg">Submit</button>
        </div>
      </form>
      <img src={pic1} className="Img mt-5" alt="" style={{width: "520px"}}/>
        </div>
      </>
    );
  }
}

export default JobProvider;