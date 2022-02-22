import { Record } from 'immutable';
import { DISMISS_NOTIFICATION } from './action-types';
import { REMOVE_TASK_SUCCESS } from '../../tasks'


export const NotificationState = new Record({
  actionLabel: '',
  display: false,
  message: ''
});

const initialState = {
  notifi: []
};

// export function notificationReducer(state = new NotificationState(), action) {
export function notification_Reducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_TASK_SUCCESS:
      return state.merge({
        actionLabel: 'Undo',
        display: true,
        message: 'Task deleted'
      });
    case DISMISS_NOTIFICATION:
      return new NotificationState();
    default:
      return new NotificationState();
  }
}