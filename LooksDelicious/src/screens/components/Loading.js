import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Spinkit from 'react-native-spinkit';

export default class Loading extends Component<{}> {
  render() {
    return <Spinkit />;
  }
}