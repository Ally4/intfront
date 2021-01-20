import { combineReducers } from 'redux';
import registerReducer from './register';
import loginReducer from './login';
import postReducer from './post';
import getPostsReducer from './getPosts';

const indexReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  post: postReducer,
  get: getPostsReducer,
});

export default indexReducer;