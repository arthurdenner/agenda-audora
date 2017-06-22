import React from 'react';
import styles from './header.less';

const Header = () => (
  <header className={styles.header}>
    <section className={styles.submenu}>
      <i className="mdi mdi-reload" />
      <i className="mdi mdi-magnify" />
      <i className="mdi mdi-printer" />
      <i className="mdi mdi-calendar" />
      <i className="mdi mdi-plus" />
    </section>
    <section>
      <div>Maceió</div>
      <div>Tudo</div>
    </section>
  </header>
);

export default Header;
