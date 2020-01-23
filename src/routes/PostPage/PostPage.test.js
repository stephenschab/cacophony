import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { PostProvider } from '../../contexts/PostContext';
import PostPage from './PostPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><PostProvider><PostPage /></PostProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})