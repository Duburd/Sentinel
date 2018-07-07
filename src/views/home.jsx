import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


const bgStyle = {
    backgroundImage: "url('./Images/AdobeStock_64718583.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-x",
    height: "800px",
    opacity: "0.8",
  }
  

const Home = () => (
    <div style={bgStyle}>
      <div className="blankDiv">
        <div className="tempText">
          <h1 className="landing_rowMainText">Valiant</h1>
          <Link to="/main"><button className="actionButton">Start Here</button></Link>
        </div>
      </div>
    </div>
  );

  export default Home;