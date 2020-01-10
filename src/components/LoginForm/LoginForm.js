import React, { Component } from 'react';

import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import LoginContext from '../../contexts/LoginContext';
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  static contextType = LoginContext;

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
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
        this.context.setLoggedIn();
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  render() {
    const { error } = this.state

    return (
      <div className='LoginForm'>
        <form
          className='LoginForm__form'
          onSubmit={this.handleSubmitJwtAuth}
        >

          <div className='LoginForm__inputs'>
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
          
            <button type='submit' className='LoginForm__button'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;