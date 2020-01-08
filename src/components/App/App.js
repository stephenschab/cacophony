import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LandingPage from '../../routes/LandingPage/LandingPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import Navbar from '../Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
  
        <Switch>
          <Route
            exact
            path='/'
            component={LandingPage}
          />
          <PublicOnlyRoute
            path='/new-user'
            component={RegisterPage}
          />
          <Route
            path='/login'
            component={LoginPage}
          />
        </Switch>
        
  
      </div>
    );
  }
  
}

export default App;
