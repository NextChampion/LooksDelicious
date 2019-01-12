import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class SearchBar extends Component<{}> {
  static propTypes = {};

  static defaultProps = {};

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} />
          <TextInput placeholder="试试搜索吧" style={styles.textInput} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    backgroundColor: 'green',
  },
  textInput: {
    flex: 1,
  },
});
