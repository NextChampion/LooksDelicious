import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Title extends Component<{}> {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'title',
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.leftView} />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingLeft: 10,
    alignItems: 'center',
  },
  leftView: {
    height: 24,
    width: 5,
    marginRight: 8,
    backgroundColor: 'blue',
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
  },
});
