import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">

        <h1 className="LandingPage__title">Welcome to Cacophony</h1>

        <div className="LandingPage__content">
          <p>Cacophony is a community for Pro Tools users. This site is designed to be a forum for users to get together, share sessions with each other, and request help on sessions if they need it. You can either create your own profile or use the given test user account to explore the site.</p>
          <p>New to Cacophony? <Link to='/new-user'>sign up</Link></p>
          <p>Return users <Link to='/login'>login</Link></p>
        </div>

        <div className="LandingPage__test">
          <p>Test User Name: <span className="LandingPage__test-info">TestUser</span></p>
          <p>Test Password: <span className="LandingPage__test-info">Passw0rd!</span></p>
        </div>
      </div>
    )
  }
}

export default LandingPage;