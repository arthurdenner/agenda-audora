import React, { PureComponent } from 'react';
import onClickOutside from 'react-onclickoutside';
import styles from './dropdown.less';

class Dropdown extends PureComponent {
  state = { isListVisible: false };

  controlList = () => this.setState({ isListVisible: true });

  handleClickOutside = () => this.setState({ isListVisible: false });

  render() {
    const { isListVisible } = this.state;

    return (
      <div style={{ zIndex: 1 }}>
        <div className={styles.container} onClick={this.controlList}>
          <span>Maceió</span>
          <i className="mdi mdi-menu-down" />
        </div>
        {isListVisible && (
          <div style={{ marginTop: '-40px' }}>
            <div className={styles.option}>
              <span>DDD</span>
            </div>
            <div className={styles.option}>
              <span>DDD</span>
            </div>
            <div className={styles.option}>
              <span>DDD</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
