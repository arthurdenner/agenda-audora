import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import styles from './dropdown.less';

class Dropdown extends PureComponent {
  static propTypes = {
    initialValue: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    style: PropTypes.string.isRequired,
  };

  state = {
    isListVisible: false,
    selectedItem: this.props.initialValue,
  };

  controlList = () => this.setState({ isListVisible: true });

  handleClickOutside = () => this.setState({ isListVisible: false });

  handleSelectItem = (selectedItem) => {
    this.setState({ selectedItem });
    this.handleClickOutside();
  };

  render() {
    const { isListVisible, selectedItem } = this.state;
    const { items, style } = this.props;

    return (
      <div style={{ zIndex: 1 }}>
        <div className={styles.container} onClick={this.controlList}>
          <span>{selectedItem}</span>
          <i className="mdi mdi-menu-down" />
        </div>
        <div className={style}>
          {isListVisible && items.map(item => (
            <div
              key={Math.random()}
              onClick={() => this.handleSelectItem(item)}
              className={styles.option}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
