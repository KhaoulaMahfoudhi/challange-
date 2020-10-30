import UserComment from './UserComment';
import UserPost from './UserPost';
import UserList from './UserList';
import UserReducer from './Reducer';
import {combineReducers} from 'redux';
 const AllReducers = combineReducers({
  UserReducer,
   UserComment,
    UserPost,
    UserList

 });
 export default AllReducers;