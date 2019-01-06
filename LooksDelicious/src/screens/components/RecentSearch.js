import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';

import UI from '../../UI';

export default class RecentSearch extends Component<{}> {
  static propTypes = {
    recent: PropTypes.array,
    onItemPress: PropTypes.func,
  };

  static defaultProps = {
    recent: [],
    onItemPress: null,
  };

  shouldComponentUpdate(props) {
    const { recent } = this.props;
    return recent !== props.recent;
  }

  render() {
    const { recent, onItemPress } = this.props;
    if (!recent.length) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Text note style={{ marginVertical: UI.unit * 2 }}>
          最近搜索:
        </Text>
        <View style={styles.buttonContainer}>
          {recent.map(a => (
            <Button
              key={a.get('key')}
              onPress={() => onItemPress(a.get('key'))}
              light
              style={styles.button}
            >
              <Text>{a.get('key')}</Text>
            </Button>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: UI.unit * 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    height: 36,
    paddingHorizontal: UI.unit * 2,
    marginHorizontal: UI.unit,
    marginVertical: UI.unit,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
