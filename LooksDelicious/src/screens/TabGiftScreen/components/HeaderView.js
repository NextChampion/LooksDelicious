import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import HeaderItem from './HeaderItem';

export default class HeaderView extends Component<{}> {
  static propTypes = {};

  static defaultProps = {};

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderItem title="扫码乘车" />
        <HeaderItem title="扫一扫" />
        <HeaderItem title="我要咨询" />
        <HeaderItem title="办事指南" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
