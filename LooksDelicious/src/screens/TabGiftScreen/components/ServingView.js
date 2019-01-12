import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import ServingItem from './ServingItem';

export default class ServingView extends Component<{}> {
  static propTypes = {};

  static defaultProps = {};

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowView}>
          <ServingItem title="小客车指标" />
          <ServingItem title="公积金" />
          <ServingItem title="社保" />
          <ServingItem title="户政业务" />
          <ServingItem title="居住登记" />
        </View>
        <View style={styles.rowView}>
          <ServingItem title="房屋产权" />
          <ServingItem title="钱江分" />
          <ServingItem title="便民查询" />
          <ServingItem title="市民卡" />
          <ServingItem title="全部" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginTop: 40,
    marginBottom: 10,
  },
  rowView: {
    flexDirection: 'row',
  },
});
