import { combineReducers } from 'redux';
import { innerReducer as asyncState } from 'redux-async-initial-state';
import compromissos from './compromissos';

export default combineReducers({
  asyncState,
  compromissos,
});
