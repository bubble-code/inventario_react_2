import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { notification_Reducer} from './notification';

export const rootReducer = combineReducers({
  notification: notification_Reducer,
  // routing: routerReducer
});