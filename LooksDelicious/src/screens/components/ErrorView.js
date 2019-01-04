import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Spinkit from 'react-native-spinkit';
import UI from '../../UI';

export default class ErrorView extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>数据加载失败</Text>
      </View>
    );
  }
}
