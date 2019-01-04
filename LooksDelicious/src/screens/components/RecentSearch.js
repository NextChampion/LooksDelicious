import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import UI from '../../UI';

export default class RecentSearch extends Component<{}> {
  static propTypes = {
    recent: PropTypes.array,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    recent: [],
    onPress: null,
  };

  shouldComponentUpdate(props) {
    const { recent } = this.props;
    return recent !== props.recent;
  }

  render() {
    const { recent } = this.props;
    if (!recent.length) {
      return null;
    }
    return (
      <View style={{ flex: 1, paddingHorizontal: UI.unit * 4 }}>
        <Text>最近搜索</Text>
        <View>
          {recent.map(a => (
            <View key={a.get('key')}>
              <Text>{a.get('key')}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
