import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div>

        <h1>Hero</h1>

        <p>Volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis</p>

        <p>New to Cacophony? <Link to='/new-user'>sign up</Link></p>
        <p>Return users <Link to='/login'>login</Link></p>
      </div>
    )
  }
}

export default LandingPage;