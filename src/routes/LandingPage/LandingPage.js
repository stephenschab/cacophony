import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">

        <h1>Welcome to Cacophony</h1>

        <div className="LandingPage__content">
          <p>Cacophony is a community for Pro Tools users. This site is designed to be a forum for users to get together, share sessions with each other, and request help on sessions if they need it.</p>

          <p>New to Cacophony? <Link to='/new-user'>sign up</Link></p>
          <p>Return users <Link to='/login'>login</Link></p>
        </div>
      </div>
    )
  }
}

export default LandingPage;