import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { store, onLoadRedux, Provider } from './redux';

import Navigator from './navigator';

export default class App extends Component<Props> {
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
    if (!this.state.loaded) {
      return null;
    }
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
