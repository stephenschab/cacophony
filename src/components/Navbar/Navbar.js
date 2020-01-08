import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TokenService from '../../services/token-service';

export default class Navbar extends Component {
  handleLogout = () => {
    TokenService.clearAuthToken()
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
            <Link to='/'>
              Cacophony
            </Link>
          </h1>
        
          {TokenService.hasAuthToken() && this.renderLogoutLink}
        </nav>
      </>
    )
  }
}