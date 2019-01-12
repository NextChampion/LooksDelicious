import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import IWantItem from './IWantItem';

export default class IWantView extends Component<{}> {
  static propTypes = {};

  static defaultProps = {};

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowView}>
          <IWantItem title="我要办理" subTitle="登记审批" />
          <IWantItem title="我要缴费" subTitle="充值|收缴|罚款" />
        </View>
        <View style={styles.rowView}>
          <IWantItem title="我要查询" subTitle="查询下载" />
          <IWantItem title="我要预约" subTitle="线上预约线下办理" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  rowView: {
    flexDirection: 'row',
  },
});
