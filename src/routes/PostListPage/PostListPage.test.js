import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { PostListProvider } from '../../contexts/PostListContext';
import PostListPage from './PostListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><PostListProvider><PostListPage /></PostListProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})