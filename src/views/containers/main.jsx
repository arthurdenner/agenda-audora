import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';

const Main = () => (
  <div
    style={{
      background: '#f8f8f8',
      position: 'absolute',
      overflow: 'hidden',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      fontFamily: 'Roboto',
    }}
  >
    <Route path="/" component={Home} />
  </div>
);

export default Main;
