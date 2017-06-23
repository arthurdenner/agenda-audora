import React from 'react';
import styles from './card.less';

const Card = () => (
  <div className={styles.card}>
    <span className={styles.hora}>14:00</span>
    <p className={styles.tagdata}><span>HOJE</span></p>
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
      <i className="mdi mdi-folder-outline" />
      <i className="mdi mdi-check" />
      <i className="mdi mdi-pencil" />
      <i className="mdi mdi-close-circle" />
    </div>
  </div>
);

export default Card;
