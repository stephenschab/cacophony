import React, { Component } from 'react';

import PostApiService from '../services/post-api-service' 

const PostListContext = React.createContext({
  postList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPostList: () => {}
})
export default PostListContext;

export class PostListProvider extends Component {
  state = {
    postList: [],
    error: null
  };

  setPostList = postList => {
    this.setState({ postList });
  };

  addPost = () => {
    PostApiService.getPosts()
      .then(this.setPostList)
      .catch(this.context.setError)
  }

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      postList: this.state.postList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPostList: this.setPostList,
      addPost: this.addPost
    }
    return (
      <PostListContext.Provider value={value}>
        {this.props.children}
      </PostListContext.Provider>
    )
  }
}