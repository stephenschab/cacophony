import React, { Component } from 'react';

import PostContext from '../../contexts/PostContext';
import PostApiService from '../../services/post-api-service';
import './CommentForm.css';

export default class CommentForm extends Component {
  static contextType = PostContext;

  handleSubmit = ev => {
    ev.preventDefault()
    const { post } = this.context;
    const { text } = ev.target;

    PostApiService.postComment(text.value, post.id)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <textarea
          required
          aria-label='Type a comment...'
          name='text'
          id='text'
          cols='30'
          rows='3'
          placeholder='Type a comment...'>
        </textarea>

        <button type='submit'>
          Post Comment
        </button>
      </form>
    )
  }
}