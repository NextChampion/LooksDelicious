import React, { Component } from 'react';
import { View } from 'react-native';
import Spinkit from 'react-native-spinkit';
import UI from '../../UI';

export default class Loading extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Spinkit type="Bounce" color={UI.color.primary1} />
      </View>
    );
  }
}
