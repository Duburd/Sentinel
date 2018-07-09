import React, { Component } from 'react';
import '../styles/App.css';
import Footer from './Components/Footer.jsx'

const businessAddress = (
    <p className="contactAddress">
      <strong>Sentinel</strong><br />
      The HiVE, 128 W Hastings St #300, <br />
      Vancouver, BC V6B 1G8<br />
      +1 888-569-6898
    </p>
  )

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
          <div>
            <img className="contactUs" src='./Images/AdobeStock_82861654.jpeg' />
          <div>
          {businessAddress}
          <Footer />
          </div>
          </div>
    );
  }
}