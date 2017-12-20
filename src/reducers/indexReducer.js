import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';

const allReducer = combineReducers({
  posts: PostsReducer
})

export default allReducer;
