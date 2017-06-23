import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ExtraInfo from './extra-info';
import styles from './card.less';

const getHora = date => moment(date).format('HH:mm');

const botoes = ['folder-outline', 'check', 'pencil', 'close-circle'];

class Card extends PureComponent {
  static propTypes = {
    compromisso: PropTypes.object.isRequired,
  };

  state = {
    isExtraInfoOpen: false,
  };

  controlExtraInfo = () => {
    this.setState({
      isExtraInfoOpen: !this.state.isExtraInfoOpen,
    });
  }

  render() {
    const { compromisso } = this.props;
    const { isExtraInfoOpen } = this.state;

    return (
      <div className={styles.card} onClick={this.controlExtraInfo}>
        <span className={styles.hora}>{getHora(compromisso.horario)}</span>
        <p className={styles.tagdata}>
          {compromisso.comparecido ?
            <i className="mdi mdi-check" style={{ fontSize: '20px', color: 'green' }} /> :
            <span>HOJE</span>
          }
        </p>
        <div className={styles.container}>
          <div className={styles.informacoesPrincipais}>
            <div className={styles.assunto}>
              <p>{compromisso.local}</p>
              <strong>{compromisso.assunto}</strong>
            </div>
            <div className={styles.usuario}>
              <img
                alt={compromisso.responsavel}
                src={compromisso.imgResponsavel}
              />
              <p>{compromisso.responsavel}</p>
            </div>
            <div className={styles.botoes}>
              {botoes.map(item => <i key={Math.random()} className={`mdi mdi-${item}`} />)}
            </div>
          </div>
          <ExtraInfo
            infos={compromisso.extraInfo}
            isOpen={isExtraInfoOpen}
          />
        </div>
      </div>
    );
  }
}

export default Card;
