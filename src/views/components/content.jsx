import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import styles from './content.less';

const Content = ({ compromissos }) => (
  <main className={styles.container}>
    <div className={styles.data}>
      <span>HOJE</span><span>+</span>
      <p>20 de abril de 2015</p>
    </div>
    {compromissos.map(item => (<Card key={item._id} compromisso={item} />))}
  </main>
);

Content.propTypes = {
  compromissos: PropTypes.array.isRequired,
};

export default Content;
