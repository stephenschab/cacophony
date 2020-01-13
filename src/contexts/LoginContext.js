import React, { Component } from 'react';

import TokenService from '../services/token-service';

const LoginContext = React.createContext({
  loggedIn: TokenService.hasAuthToken(),
  setLoggedIn: () => {},
  clearLoggedIn: () => {}
})

export default LoginContext;

export class LoginProvider extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken()
  };

  setLoggedIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  clearLoggedIn = () => {
    this.setState({
      loggedIn: null
    })
  }

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      setLoggedIn: this.setLoggedIn,
      clearLoggedIn: this.clearLoggedIn
    }

    return (
      <LoginContext.Provider value={value}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}