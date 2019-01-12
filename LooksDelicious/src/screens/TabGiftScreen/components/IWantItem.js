import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class IWantItem extends Component<{}> {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    source: PropTypes.number,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    title: 'title',
    subTitle: 'subTitle',
    source: null,
    onPress: null,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { title, subTitle, source, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
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
  innerContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
  },
  title: {},
  subTitle: { color: 'gray', fontSize: 12, marginTop: 5 },
});
