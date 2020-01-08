import React, { Component } from 'react';

import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSucces: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = event => {
    event.preventDefault()
    this.setState({ error: null })
    const{ user_name, password } = event.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        // user_name.value = ''
        // password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSucces()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  render() {
    const { error } = this.state

    return (
      <div>
        <form
          className='login-form'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role='alert'>
            {error && <p>{error}</p>}
          </div>
          <div>
            <label htmlFor="user_name">Username</label>
            <input placeholder='user_name' type="text" name='user_name' id='user_name' required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' required />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;