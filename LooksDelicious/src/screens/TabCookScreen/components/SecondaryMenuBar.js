import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Icon, ListItem, Left, Right, Text } from 'native-base';
import PropTypes from 'prop-types';

import UI from '../../../UI';

export default class SecondaryMenuBar extends Component {
  static propTypes = {
    data: PropTypes.array,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    data: [],
    onPress: null,
  };

  state = {
    leftData: [],
    rightData: [],
  };

  defaultData = [];

  leftIndex = 0;

  componentWillMount() {
    const { data } = this.props;
    this.defaultData = JSON.parse(JSON.stringify(data));
    this.getData(this.defaultData);
  }

  shouldComponentUpdate(props, state) {
    const { leftData, rightData } = this.state;
    return leftData !== state.leftData || rightData !== state.rightData;
  }

  getData = data => {
    const left = data.map(d => d);
    this.setState({
      leftData: left,
      rightData: data[this.leftIndex].list,
    });
  };

  renderLeftItem = ({ item, index }) => (
    <ListItem
      noIndent
      onPress={() => {
        this.defaultData.forEach((data, ind) => {
          if (ind === index) {
            data.selected = true;
          } else {
            data.selected = false;
          }
        });
        this.leftIndex = index;
        this.getData(this.defaultData);
      }}
      style={{
        backgroundColor: index === this.leftIndex ? UI.color.bg1 : UI.color.bg2,
      }}
    >
      <Text>{item.name}</Text>
    </ListItem>
  );

  renderRightItem = ({ item }) => {
    const { onPress } = this.props;
    return (
      <ListItem selected onPress={onPress}>
        <Left>
          <Text>{item.name}</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  };

  render() {
    const { leftData, rightData } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <FlatList
          style={styles.left}
          data={leftData || []}
          keyExtractor={item => item.parentId}
          renderItem={this.renderLeftItem}
        />
        <FlatList
          style={styles.right}
          data={rightData || []}
          keyExtractor={item => item.id}
          renderItem={this.renderRightItem}
        />
      </View>
    );
  }
}

const leftWidth = 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    width: leftWidth,
  },
  right: {
    width: UI.size.screenWidth - leftWidth,
    backgroundColor: UI.color.bg1,
  },
});
