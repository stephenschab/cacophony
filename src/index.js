import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { PostListProvider } from '../src/contexts/PostListContext';
import { PostProvider } from '../src/contexts/PostContext';
import { LoginProvider } from '../src/contexts/LoginContext';

ReactDOM.render(
<BrowserRouter>
  <PostListProvider>
    <PostProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </PostProvider>
  </PostListProvider>
</BrowserRouter>,
document.getElementById('root')
);
