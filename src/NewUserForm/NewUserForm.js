import React from 'react';

class NewUserForm extends React.Component {
  render() {
    return (
      <div>
        <form class='signup-form'>
          <div>
            <label for="username">Username</label>
            <input placeholder='Username' type="text" name='Username' id='Username' />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="text" name='email' id='email' />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <div>
            <label for="password">Repeat Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>

        <p>Already a user? <a href="#">Login</a></p>
      </div>
    )
  }
}

export default NewUserForm;