import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends Component<{}> {
  static propTypes = {
    source: PropTypes.number,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    source: null,
    onPress: null,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { source, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={source} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  innerContainer: {},
  image: {
    height: 150,
    backgroundColor: 'green',
  },
});
