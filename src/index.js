import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { store } from './store/configure-store';
import Application from './application';

const rootEl = document.querySelector('#root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    rootEl,
  );
};

render(Application);

if (module.hot) {
  module.hot.accept('./application', () => {
    const NextApp = require('./application').default;

    render(NextApp);
  });
}
