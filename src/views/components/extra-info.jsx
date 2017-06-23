import React from 'react';
import PropTypes from 'prop-types';
import styles from './extra-info.less';

const ExtraInfo = ({ infos, isOpen }) => (
  <div className={isOpen ? styles.show : styles.hide}>
    {Object.keys(infos).map(key => (
      <div key={key} className={styles.info}>
        <div className={styles.infos}>
          <span>{key}</span>
          <span className={styles.divider} />
        </div>
        <p>{infos[key]}</p>
      </div>
    ))}
  </div>
);

ExtraInfo.propTypes = {
  infos: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ExtraInfo;
