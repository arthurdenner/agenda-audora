import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import styles from './main.less';

const Main = () => (
  <div className={styles.container}>
    <Route path="/" component={Home} />
  </div>
);

export default Main;
