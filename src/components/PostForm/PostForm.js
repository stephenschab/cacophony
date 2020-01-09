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
      <form
        className='PostForm'
        onSubmit={this.handleSubmit}
      >
        <div className='title'>
          <label htmlFor='title'>Project Title:</label>
          <input
            required
            aria-label='Type project title...'
            type='text'
            name='text'
            id='title'
          />
        </div>

        <div className='content'>
          <label htmlFor='content'>Project Info:</label>
          <textarea
            required
            aria-label='Type project information...'
            name='content'
            id='content'
            cols='30'
            rows='3'
          />
        </div>

        <div className='select'>
          <label htmlFor='genre'>Project Genre:</label>
          <select
            required
            aria-label='Select project genre...'
            name='genre'
            id='genre'
          >
            <option value='rock'>Rock</option>
            <option value='electronic'>Electronic</option>
            <option value='classical'>Classical</option>
            <option value='hip-hop'>Hip Hop</option>
            <option value='jazz'>Jazz</option>
            <option value='blues'>Blues</option>
            <option value='folk/country'>Folk/Country</option>
          </select>
        </div>

        <button type='submit'>
          Post project
        </button>
      </form>
    )
  }
}