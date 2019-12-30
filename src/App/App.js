import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';

function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <p className="app-logo">Cacophony</p>
      </nav>

      <Route
        exact
        path='/'
        component={LandingPage}
      />

    </div>
  );
}

export default App;
