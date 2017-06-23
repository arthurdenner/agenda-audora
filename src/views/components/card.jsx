import React from 'react';
import ExtraInfo from './extra-info';
import styles from './card.less';

const botoes = ['folder-outline', 'check', 'pencil', 'close-circle'];

const Card = () => (
  <div className={styles.card}>
    <span className={styles.hora}>14:00</span>
    <p className={styles.tagdata}><span>HOJE</span></p>
    <div className={styles.container}>
      <div className={styles.informacoesPrincipais}>
        <div className={styles.assunto}>
          <p>Santa Casa</p>
          <strong>Requerimento</strong>
        </div>
        <div className={styles.usuario}>
          <img
            alt="James Ford"
            src="https://s-media-cache-ak0.pinimg.com/originals/14/3d/6b/143d6bfea7d2ecbfc61a0467f2f6261d.jpg"
          />
          <p>James Ford</p>
        </div>
        <div className={styles.botoes}>
          {botoes.map(item => <i className={`mdi mdi-${item}`} />)}
        </div>
      </div>
      <ExtraInfo />
    </div>
  </div>
);

export default Card;
