import { handleActions } from 'redux-actions';
import actions from '../actions';

export default handleActions({
  [actions.populateCompromissos]: (state, { payload }) => payload,
}, []);
