import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { loadApp } from 'actions/app';
import styles from './app.css';
import LoginPage from './LoginPage';

type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  props: Props;

  render() {
    if (!this.props.loaded) {
      return null;
    }

    return (
      <div className={styles.container}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kataaalog</title>
        </Helmet>
        <LoginPage />
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProperties)(AppContainer);
