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
          <h1 className="mb-5">Ensure that you are protected today with Sentinel.</h1>
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
    <strong>Sentinel</strong><br />
    The HiVE, 128 W Hastings St #300, <br />
    Vancouver, BC V6B 1G8<br />
    +1 888-569-6898
  </address>
);

const Entry = () => (


  <div style={bgStyle}>
    <div className="blankDiv">
      <div className="tempText">
        <h1 className="landing_rowMainText">Sentinel</h1>
        {/* <Link to="/main"><button className="actionButton">Start Here</button></Link> */}
        <div className="spacer"></div>
      </div>
    </div>
  </div>
)

const bgStyle = {
  backgroundImage: "url('https://steemitimages.com/0x0/https://plotagraph.s3.amazonaws.com/shared/589e4c6ed1e4e81500537144.gif')",
  backgroundSize: "cover",
  backgroundRepeat: "repeat-x",
  height: "800px",
  marginTop: "-23px"
}


// const IconsGrid = () => (

//   <section className="features-icons bg-light text-center">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-4">
//           <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//             <div className="features-icons-icon d-flex">
//               <i className="icon-screen-desktop m-auto text-primary"></i>
//             </div>
//             <h3>Personal Plan</h3>
//             <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore</p>
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
//             <div className="features-icons-icon d-flex">
//               <i className="icon-layers m-auto text-primary"></i>
//             </div>
//             <h3>Family Plan</h3>
//             <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore</p>
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="features-icons-item mx-auto mb-0 mb-lg-3">
//             <div className="features-icons-icon d-flex">
//               <i className="icon-check m-auto text-primary"></i>
//             </div>
//             <h3>Enterprise Plan</h3>
//             <p className="lead mb-0">Spicy jalapeno bacon ipsum dolor amet chicken in exercitation pork ribeye. Velit enim ipsum bacon labore in dolore </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )

const ImageShowcase = () => (
  <section className="showcase">
    <div className="container-fluid p-0">
      <div className="row no-gutters">

        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(./Images/AdobeStock_95986245.jpeg)` }}></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Standing By</h2>
          <p className="lead mb-0">Our customer support team are available 24 hours to assist with accident reports if needed. Call us any time for roadside assistance or technical support. </p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url(./Images/AdobeStock_92848862.jpeg)`, float: `right` }}></div>
        <div className="col-lg-6 my-auto showcase-text" >
          <h2>Knowledgable</h2>
          <p className="lead mb-0">Our team of experts can help with damage assessment and legal issues.</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(./Images/AdobeStock_104143549.jpeg)` }}></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Easy to Use / Customize</h2>
          <p className="lead mb-0">Filing a report with Sentinel is simple. The entire process is made painless and quick.</p>
        </div>
      </div>
    </div>
  </section>
)

const PricePlan = () => (
  <div className="container">
    <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Individual</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$99 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>1 client protected</li>
              <li>Up to $1mil coverage</li>
              <li>24 hour support</li>
              <li>Email support</li>
            </ul>
            <Link to="/contact"><button type="button" className="btn btn-lg btn-block btn-primary">Get started</button></Link>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Family</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$299 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Up to 5 protected</li>
              <li>Up to $5mil coverage</li>
              <li>24 hour support</li>
              <li>Priority email support</li>
            </ul>
            <Link to="/contact"><button type="button" className="btn btn-lg btn-block btn-primary">Get started</button></Link>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$2499 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Up to 50 protected</li>
              <li>$20mil coverage</li>
              <li>24 hour support</li>
              <li>Priority email support</li>
            </ul>
            <Link to="/contact"><button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button></Link>
          </div>
        </div>
      </div>
    </div>
)

const Testimonials = () => (

  <section className="testimonials text-center bg-light">
    <div className="container">
      <h2 className="mb-5">What people are saying...</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="user img-fluid rounded-circle mb-3" src="Images/jennifer.jpeg" alt="" />
            <h5>Jennifer H.</h5>
            <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys! PLONK!"</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="user img-fluid rounded-circle mb-3" src="Images/chibwe.jpeg" alt="" />
            <h5>Chibwe M.</h5>
            <p className="font-weight-light mb-0">"Sentinel is amazing. It provides all of the tools you need when you're in a crisis."</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="user img-fluid rounded-circle mb-3" src="Images/rob.png" alt="" />
            <h5>Rob	S.</h5>
            <p className="font-weight-light mb-0">"I really appreciate how Sentinel makes everything so simple."</p>
          </div>
        </div>
      </div>
    </div>
  </section>

)


const Home = () => (
  <div>
  <Entry />
  <ImageShowcase />
  <PricePlan />
  <Testimonials />
  <Footer />
  </div>
  );

export default Home;