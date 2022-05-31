import React from "react";
class image extends React.Component {
  state = {};
  render() {
    let myStyle = {
      color: "#006400",
    }

    return (
      <>
        <div className="heading my-5">
          <h1 style={{ textAlignVertical: "center", textAlign: "center" }}>
            Find your <text style={myStyle}>Dream Job </text>here!
          </h1>
          <p style={{ textAlignVertical: "center", textAlign: "center" }}>
            <text style={myStyle}>Find out what you like doing best and get someone to pay you for
            it</text>
          </p>
        </div>
      </>
    );
  }
}

export default image;
