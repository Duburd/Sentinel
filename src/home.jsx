import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


const bgStyle = {
    backgroundImage: "url('./Images/AdobeStock_64718583.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-x",
    height: "800px",
  }
  

const Home = () => (
    <div style={bgStyle}>
      <div>
        <div className="tempText">
          <h1 className="landing_rowMainText">Test test test test test test</h1>
          <Link to="/admin"><button className="actionButton">Start Here</button></Link>
        </div>
      </div>
    </div>
  );

  export default Home;