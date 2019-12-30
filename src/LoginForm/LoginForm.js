import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form class='login-form'>
          <div>
            <label for="username">Username</label>
            <input placeholder='Username' type="text" name='Username' id='Username' />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;