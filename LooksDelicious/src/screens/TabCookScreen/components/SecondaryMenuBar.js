import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  findNodeHandle,
} from 'react-native';
import { ListItem, Left, Text } from 'native-base';
import { UIManager } from 'NativeModules';
import PropTypes from 'prop-types';

import UI from '../../../UI';

const LEFT_ITEM_HEIGHT = 40;
const leftWidth = 100;

export default class SecondaryMenuBar extends Component {
  static propTypes = {
    data: PropTypes.array,
    onRightItemPress: PropTypes.func,
  };

  static defaultProps = {
    data: [],
    onRightItemPress: null,
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

  scrollToIndex = index => {
    const lastCount = this.defaultData.length - index;
    const lastHeight = lastCount * LEFT_ITEM_HEIGHT;
    const maxCount = Math.floor(this.height / LEFT_ITEM_HEIGHT);
    const offset = this.height - maxCount * LEFT_ITEM_HEIGHT;
    if (lastHeight > this.height) {
      this.left.scrollToIndex({ index });
    } else {
      this.left.scrollToIndex({
        viewOffset: offset,
        index: this.defaultData.length - maxCount,
      });
    }
  };

  renderLeftItem = ({ item, index }) => (
    <TouchableOpacity
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
        this.scrollToIndex(index);
      }}
    >
      <View
        style={[
          styles.leftItem,
          {
            backgroundColor:
              index === this.leftIndex ? UI.color.bg1 : UI.color.bg2,
          },
        ]}
      >
        <Text
          style={
            index === this.leftIndex ? styles.leftTextSelected : styles.leftText
          }
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  renderRightItem = ({ item }) => {
    const { onRightItemPress } = this.props;
    return (
      <TouchableOpacity onPress={() => onRightItemPress(item)}>
        <View style={styles.rightItem}>
          <Text style={styles.rightText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { leftData, rightData } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <FlatList
          ref={a => (this.left = a)}
          showsVerticalScrollIndicator={false}
          style={styles.left}
          data={leftData || []}
          initialNumToRender={18}
          keyExtractor={item => item.parentId}
          renderItem={this.renderLeftItem}
          getItemLayout={(param, index) => ({
            length: LEFT_ITEM_HEIGHT,
            offset: LEFT_ITEM_HEIGHT * index,
            index,
          })}
          onLayout={() => {
            const handle = findNodeHandle(this.left);
            UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
              this.height = height;
            });
          }}
        />
        <FlatList
          style={styles.right}
          numColumns={2}
          columnWrapperStyle={{
            paddingVertical: UI.unit,
            justifyContent: 'space-around',
          }}
          data={rightData || []}
          keyExtractor={item => item.id}
          renderItem={this.renderRightItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    width: leftWidth,
  },
  leftItem: {
    borderWidth: 0,
    height: LEFT_ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftTextSelected: {
    color: UI.color.primary1,
    fontSize: 14,
    fontWeight: '500',
  },
  leftText: {
    color: UI.color.black,
    fontSize: 14,
  },
  right: {
    width: UI.size.screenWidth - leftWidth,
    backgroundColor: UI.color.bg1,
  },
  rightItem: {
    width: 120,
    height: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: UI.color.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    color: UI.color.gray9,
    fontSize: 14,
  },
});
