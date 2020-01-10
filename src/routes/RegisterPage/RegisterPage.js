import React, { Component } from 'react';

import NewUserForm from '../../components/NewUserForm/NewUserForm';
import './RegisterPage.css'

class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push('/login')
  }

  render() {
    return (
      <div className='RegisterPage'>
        <h2 className='RegisterPage__title'>Register</h2>

        <NewUserForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    )
  }
}

export default RegisterPage;