import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import '../styles/landing-page.css';
import Footer from './Components/Footer.jsx';

const BootstrapHeader = () => (
  <header className="masthead text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">Ensure that you are protected today with Valiant.</h1>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div className="form-row">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
              </div>
              <div className="col-12 col-md-3">
                <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
)


const businessAddress = (
  <address>
    <strong>Valiant</strong><br />
    The HiVE, 128 W Hastings St #300, <br />
    Vancouver, BC V6B 1G8<br />
    +1 888-569-6898
  </address>
);

const Entry = () => (


  <div style={bgStyle}>
    <div className="blankDiv">
      <div className="tempText">
        <h1 className="landing_rowMainText">Valiant</h1>
        {/* <Link to="/main"><button className="actionButton">Start Here</button></Link> */}
        <div className="spacer"></div>
      </div>
    </div>
  </div>
)

const bgStyle = {
  backgroundImage: "url('./Images/AdobeStock_64718583.jpeg')",
  backgroundSize: "cover",
  backgroundRepeat: "repeat-x",
  height: "800px",
  opacity: "0.8",
}


const IconsGrid = () => (

  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-screen-desktop m-auto text-primary"></i>
            </div>
            <h3>Personal Plan</h3>
            <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-layers m-auto text-primary"></i>
            </div>
            <h3>Family Plan</h3>
            <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-check m-auto text-primary"></i>
            </div>
            <h3>Enterprise Plan</h3>
            <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ImageShowcase = () => (
  <section className="showcase">
    <div className="container-fluid p-0">
      <div className="row no-gutters">

        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(./Images/AdobeStock_95986245.jpeg)` }}></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Delicious Bacon</h2>
          <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore doner capicola ut frankfurter venison. Meatball id swine capicola, eiusmod tenderloin landjaeger shoulder eu incididunt. Quis boudin dolor pork belly, in strip steak voluptate. Labore id meatloaf turducken dolor tempor, bresaola exercitation chuck lorem. Duis short ribs proident magna ad.</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url(./Images/AdobeStock_92848862.jpeg)`, float: `right` }}></div>
        <div className="col-lg-6 my-auto showcase-text" >
          <h2>Bacon</h2>
          <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore doner capicola ut frankfurter venison. Meatball id swine capicola, eiusmod tenderloin landjaeger shoulder eu incididunt. Quis boudin dolor pork belly, in strip steak voluptate. Labore id meatloaf turducken dolor tempor, bresaola exercitation chuck lorem. Duis short ribs proident magna ad.</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(./Images/AdobeStock_104143549.jpeg)` }}></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Easy to Use / Customize</h2>
          <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore doner capicola ut frankfurter venison. Meatball id swine capicola, eiusmod tenderloin landjaeger shoulder eu incididunt. Quis boudin dolor pork belly, in strip steak voluptate. Labore id meatloaf turducken dolor tempor, bresaola exercitation chuck lorem. Duis short ribs proident magna ad.</p>
          
        </div>
      </div>
    </div>
  </section>
)

const Testimonials = () => (

  <section className="testimonials text-center bg-light">
    <div className="container">
      <h2 className="mb-5">What people are saying...</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="Images/jennifer.jpeg" alt="" />
            <h5>Jennifer H.</h5>
            <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="Images/chibwe.jpeg" alt="" />
            <h5>Chibwe M.</h5>
            <p className="font-weight-light mb-0">"Valiant is amazing. It provides all of the tools you need when you're in a crisis."</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="Images/robs.png" alt="" />
            <h5>Rob	S.</h5>
            <p className="font-weight-light mb-0">"Thanks so much for making everything streamlined and available to us!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>

)


const Home = () => (
  <div>
  <Entry />
  <IconsGrid />
  <ImageShowcase />
  <Testimonials />
  <Footer />
  </div>
  );

export default Home;