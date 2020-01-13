import React, { Component } from 'react';

import PostListContext from '../../contexts/PostListContext';
import PostApiService from '../../services/post-api-service';
import './PostForm.css';

export default class PostForm extends Component {
  static contextType = PostListContext;

  handleSubmit = ev => {
    ev.preventDefault();
    const { user_id } = this.context;
    const { title, content, genre } = ev.target;

    PostApiService.postPost(title.value, content.value, genre.value, user_id)
      .then(this.context.addPost)
      .then(() => {
        title.value = '';
        content.value = '';
        genre.value = '';
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <div className='PostForm'>
        <form
          className='PostForm__form'
          onSubmit={this.handleSubmit}
        >
          <div className='PostForm__inputs'>
            <label htmlFor='title'>Project Title:</label>
            <input
              required
              aria-label='Type project title...'
              type='text'
              name='text'
              id='title'
            />

            <label htmlFor='content'>Project Info:</label>
            <textarea
              required
              aria-label='Type project information...'
              name='content'
              id='content'
              cols='20'
              rows='3'
            />

            <label htmlFor='genre'>Project Genre:</label>
            <select
              required
              aria-label='Select project genre...'
              name='genre'
              id='genre'
            >
              <option value='Rock'>Rock</option>
              <option value='Electronic'>Electronic</option>
              <option value='Classical'>Classical</option>
              <option value='Hip Hop'>Hip Hop</option>
              <option value='Jazz'>Jazz</option>
              <option value='Blues'>Blues</option>
              <option value='Folk/Country'>Folk/Country</option>
            </select>
          </div>

          <button type='submit' className='PostForm__button'>
            Post project
          </button>
        </form>
      </div>
    )
  }
}