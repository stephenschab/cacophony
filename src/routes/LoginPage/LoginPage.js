import React, { Component } from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  handleLoginSucces = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'

    history.push(destination)
  }

  render() {
    return (
      <div className='LoginPage'>
        <h2>Login</h2>

        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    )
  }
}

export default LoginPage;