import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class ServingItem extends Component<{}> {
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
    paddingVertical: 5,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  title: {
    marginTop: 5,
  },
});
