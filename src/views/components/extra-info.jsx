import React from 'react';
import styles from './extra-info.less';

const ExtraInfo = () => (
  <div className={styles.container}>
    <div className={styles.infos}>
      <span>ID</span>
      <span className={styles.divider} />
    </div>
    <p>7854</p>
  </div>
);

export default ExtraInfo;
