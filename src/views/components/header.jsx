import React from 'react';
import styles from './header.less';
import Dropdown from './dropdown';

const Header = () => (
  <header className={styles.header}>
    <section className={styles.submenu}>
      <i className="mdi mdi-reload" />
      <i className="mdi mdi-magnify" />
      <i className="mdi mdi-printer" />
      <i className="mdi mdi-calendar" />
      <i className="mdi mdi-plus" />
    </section>
    <section className={styles.submenu}>
      <Dropdown />
      <Dropdown />
    </section>
  </header>
);

export default Header;
