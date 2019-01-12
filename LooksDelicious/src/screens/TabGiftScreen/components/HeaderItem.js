import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class HeaderItem extends Component<{}> {
  static propTypes = {
    title: PropTypes.string,
    source: PropTypes.number,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    title: 'title',
    source: null,
    onPress: null,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { title, source, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={source} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
  },
  title: {
    marginTop: 5,
    color: 'white',
    fontSize: 16,
  },
});
