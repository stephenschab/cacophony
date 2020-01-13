import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PostListItem.css';

export default class PostListItem extends Component {
  render() {
    const { post } = this.props;

    return (
      <Link to={`/posts/${post.id}`} className='PostListItem'>
        <div className='PostListItem__details'>
          <div className='PostListItem__text'>
            <h2 className='PostListItem__title'>{post.title}</h2>
            <p className='PostListItem__genre'>{post.genre}</p>
            <p className='PostListItem__user'>{post.user_name}</p>
            <p className='PostListItem__description'>{post.content}</p>
          </div>
        </div>
      </Link>
    )
  }
}