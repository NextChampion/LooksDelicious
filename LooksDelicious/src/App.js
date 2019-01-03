import React, { Component } from 'react';
import { store, onLoadRedux, Provider } from './redux';

import Navigator from './navigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    onLoadRedux(states => {
      this.setState({ loaded: true });
    });
  }

  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return null;
    }
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
