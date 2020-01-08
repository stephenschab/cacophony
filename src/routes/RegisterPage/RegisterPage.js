import React, { Component } from 'react';

import NewUserForm from '../../components/NewUserForm/NewUserForm';

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
      <div>
        <h2>Register</h2>

        <NewUserForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    )
  }
}

export default RegisterPage;