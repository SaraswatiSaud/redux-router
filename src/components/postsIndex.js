import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(<div>List of posts</div>)
  }
}

export default connect(null, { fetchPosts }) (PostIndex);
