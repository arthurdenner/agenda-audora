import React from 'react';
import styles from './header.less';
import Dropdown from './dropdown';

const itemsDD1 = ['Maceió', 'Aracaju', 'Itabaiana', 'Estância', 'Propriá'];
const itemsDD2 = ['Meu Departamento', 'Meus Agendamentos', 'Como Responsável',
  'Departamento', 'Colaborador', 'Atrasados'];

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
        <div key={Math.random()} className={styles.tooltip} data-tooltip={item.tooltip} >
          <i className={`mdi mdi-${item.icon}`} data-tooltip="I’m the tooltip text." />
        </div>
      ))}
    </section>
    <section className={styles.submenu}>
      <Dropdown items={itemsDD1} initialValue="Maceió" style={styles.dropdown1} />
      <Dropdown items={itemsDD2} initialValue="Tudo" style={styles.dropdown2} />
    </section>
  </header>
);

export default Header;
