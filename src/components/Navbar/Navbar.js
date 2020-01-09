import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TokenService from '../../services/token-service';
import LoginContext from '../../contexts/LoginContext';
import './Navbar.css';

export default class Navbar extends Component {
  static contextType = LoginContext;
  
  handleLogout = () => {
    TokenService.clearAuthToken();
    this.context.clearLoggedIn()
  }

  renderLogoutLink() {
    return (
      <div className='Navbar__logged-in'>
        <Link
          onClick={this.handleLogout}
          to='/'
        >
          Logout
        </Link>
      </div>
    )
  }

  render() {
    return (
      <>
        <nav className='Navbar'>
          <h1>
            <Link to='/' className='Navbar__logo'>
              Cacophony
            </Link>
          </h1>

          {this.context.loggedIn && this.renderLogoutLink()} 
        </nav>
      </>
    )
  }
}