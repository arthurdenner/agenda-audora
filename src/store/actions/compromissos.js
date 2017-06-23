import { createAction } from 'redux-actions';

export const populateCompromissos = createAction('POPULATE_COMPROMISSOS');

export const fetchCompromissos = compromissos => (dispatch) => {
  setTimeout(() => dispatch(populateCompromissos(compromissos)), 2000);
  clearTimeout();
};
