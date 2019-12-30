import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewUserForm from '../NewUserForm/NewUserForm';
import LoginForm from '../LoginForm/LoginForm';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hero</h1>

        <Switch>
          <Route
            exact
            path='/'
            component={NewUserForm}
          />
          <Route
            path='/'
            component={LoginForm}
          />
        </Switch>
      </div>
    )
  }
}

export default LandingPage;