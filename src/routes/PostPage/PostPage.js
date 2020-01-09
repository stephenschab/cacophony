import React, { Component } from 'react';

import PostContext from '../../contexts/PostContext';
import PostApiService from '../../services/post-api-service';
import CommentForm from '../../components/CommentForm/CommentForm';
import './PostPage.css';

export default class PostPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = PostContext;

  componentDidMount() {
    const { postId } = this.props.match.params;
    this.context.clearError();
    PostApiService.getPost(postId)
      .then(this.context.setPost)
      .catch(this.context.setError);
    PostApiService.getPostComments(postId)
      .then(this.context.setComments)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearPost();
  }

  renderPost() {
    const { post, comments } = this.context;
    return (
      <>
        <h2>{post.title}</h2>
        <PostContent post={post} />
        <PostComments comments={comments} />
        <CommentForm postId={this.props.match.params.postId}/>
      </>
    )
  }

  render() {
    const { error, post } = this.context;
    let content;
    if (error) {
      content = (error.error === 'Post doesn\'t exist')
        ? <p className='error'>Post not found</p>
        : <p className='error'>There was an error</p>
    } else if (!post.id) {
      content = <div className='loading' />
    } else {
      content = this.renderPost()
    }
    return (
      <div className='PostPage'>
        {content}
      </div>
    )
  }
}

function PostContent({ post }) {
  return (
    <p className='PostPage__content'>
      {post.content}
    </p>
  )
}

function PostComments({ comments = [] }) {
  return (
    <ul className='PostPage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='PostPage__comment'>
          <p className='PostPage__comment-user'>
            {comment.user.user_name}
          </p>
          <p className='PostPage__comment-text'>
            {comment.text}
          </p>
        </li>
      )}
    </ul>
  )
}