import React from 'react';
import Card from './card';
import styles from './content.less';

const Content = () => (
  <main className={styles.container}>
    <div className={styles.data}>
      <span>HOJE</span><span>+</span>
      <p>20 de abril de 2015</p>
    </div>
    <Card />
  </main>
);

export default Content;
