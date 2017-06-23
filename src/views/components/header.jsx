import React from 'react';
import styles from './header.less';
import Dropdown from './dropdown';

const menuItems = [
  { icon: 'reload', tooltip: 'Hoje' },
  { icon: 'magnify', tooltip: 'Buscar' },
  { icon: 'printer', tooltip: 'Imprimir' },
  { icon: 'calendar', tooltip: 'Calendário' },
  { icon: 'plus', tooltip: 'Novo' },
];

const Header = () => (
  <header className={styles.header}>
    <section className={styles.submenu}>
      {menuItems.map(item => (
        <i key={Math.random()} className={`mdi mdi-${item.icon}`} />
      ))}
    </section>
    <section className={styles.submenu}>
      <Dropdown />
      <Dropdown />
    </section>
  </header>
);

export default Header;
