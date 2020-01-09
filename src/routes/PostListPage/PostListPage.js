import React, { Component } from 'react';

import PostListContext from '../../contexts/PostListContext';
import PostApiService from '../../services/post-api-service';
import PostListItem from '../../components/PostListItem/PostListItem';
import PostForm from '../../components/PostForm/PostForm';
import './PostListPage.css';

export default class PostListPage extends Component {
  static contextType = PostListContext;

  componentDidMount() {
    this.context.clearError();
    PostApiService.getPosts()
      .then(this.context.setPostList)
      .catch(this.context.setError)
  }

  renderPage() {
    const { postList = [] } = this.context;

    return <>
      <PostForm />
      <PageContent postList={postList} />
    </>
  }

  render() {
    const { error } = this.context;

    return (
      <div className='PostListPage'>
        {error
          ? <p className='error'>There was an error, go to last page and try again</p>
          : this.renderPage()}
      </div>
    )
  }
}

function PageContent({postList}) {
  return postList.map(post =>
    <PostListItem
      key={post.id}
      post={post}
    />  
  )
}