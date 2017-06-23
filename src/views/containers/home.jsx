import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '~/views/components/header';
import Content from '~/views/components/content';
import actions from '~/store/actions';
import staticCompromissos from '~/staticData/compromissos';

class Home extends PureComponent {
  static propTypes = {
    compromissos: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchCompromissos(staticCompromissos));
  }

  render() {
    const { compromissos } = this.props;

    return (
      <div style={{ height: '100%' }}>
        <Header />
        <Content compromissos={compromissos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  compromissos: state.compromissos,
});

export default connect(mapStateToProps)(Home);
