import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PostListItem from './PostListItem';

it('renders without crashing', () => {
  const post = {
    id: 1,
    title: 'Test',
    content: 'This is just a test',
    genre: 'Rock',
    user_name: 'TestUser'
  };

  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><PostListItem post={post} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})