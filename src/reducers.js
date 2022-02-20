import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { notificationReducer } from './notification';

export default combineReducers({
  notification: notificationReducer,
  routing: routerReducer
});