import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LandingPage from '../../routes/LandingPage/LandingPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import PostsListPage from '../../routes/PostListPage/PostListPage';
import PostPage from '../../routes/PostPage/PostPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import Navbar from '../Navbar/Navbar';
import PrivateRoute from '../Utils/PrivateRoute';
import './App.css';

export default class App extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true}
  }

  render() {
    return (
      <div className="App">
        <header className='App__header'>
          <Navbar />
        </header>

        <main className='App__main'>
          {this.state.hasError && <p className='error'></p>}
  
          <Switch>
            <PublicOnlyRoute
              exact
              path='/'
              component={LandingPage}
            />
            <PublicOnlyRoute
              path='/new-user'
              component={RegisterPage}
            />
            <PublicOnlyRoute
              path='/login'
              component={LoginPage}
            />
            <PrivateRoute
              exact
              path='/posts'
              component={PostsListPage}
            />
            <PrivateRoute
              path='/posts/:postId'
              component={PostPage}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
  
}
