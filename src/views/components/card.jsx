import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ExtraInfo from './extra-info';
import styles from './card.less';

const getHora = date => moment(date).format('HH:mm');

const botoes = ['folder-outline', 'check', 'pencil', 'close-circle'];

const Card = ({ compromisso }) => (
  <div className={styles.card}>
    <span className={styles.hora}>{getHora(compromisso.horario)}</span>
    <p className={styles.tagdata}><span>HOJE</span></p>
    <div className={styles.container}>
      <div className={styles.informacoesPrincipais}>
        <div className={styles.assunto}>
          <p>{compromisso.local}</p>
          <strong>{compromisso.assunto}</strong>
        </div>
        <div className={styles.usuario}>
          <img
            alt="James Ford"
            src="https://s-media-cache-ak0.pinimg.com/originals/14/3d/6b/143d6bfea7d2ecbfc61a0467f2f6261d.jpg"
          />
          <p>James Ford</p>
        </div>
        <div className={styles.botoes}>
          {botoes.map(item => <i key={Math.random()} className={`mdi mdi-${item}`} />)}
        </div>
      </div>
      <ExtraInfo infos={compromisso.extraInfo} />
    </div>
  </div>
);

Card.propTypes = {
  compromisso: PropTypes.object.isRequired,
};

export default Card;
