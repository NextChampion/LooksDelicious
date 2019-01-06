import React, { Component } from 'react';
import { Item, Icon, Input, Text } from 'native-base';
import PropTypes from 'prop-types';

import UI from '../../../UI';

export default class SearchBar extends Component<{}> {
  static propTypes = {
    data: PropTypes.object,
    onPress: PropTypes.func,
    editable: PropTypes.bool,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    data: {},
    onPress: null,
    editable: true,
    onChangeText: null,
    placeholder: '搜菜谱、食材',
  };

  state = {
    value: this.props.value,
  };

  shouldComponentUpdate(props, state) {
    const { data } = this.props;
    const { value } = this.state;
    return data.id !== props.data.id || value !== state.value;
  }

  setValue = value => {
    this.setState({ value: ' ' }, () => {
      setTimeout(() => {
        this.setState({ value });
      }, 20);
    });
  };

  render() {
    const {
      data,
      onPress,
      editable,
      onChangeText,
      placeholder,
      placeholderTextColor,
      ...others
    } = this.props;
    const { value } = this.state;
    if (!editable) {
      return (
        <Item style={{ backgroundColor: UI.color.gray10 }} onPress={onPress}>
          <Icon name="ios-search" />
          <Text style={{ color: placeholderTextColor }}>{placeholder}</Text>
        </Item>
      );
    }
    return (
      <Item style={{ backgroundColor: UI.color.gray10 }}>
        <Icon name="ios-search" />
        <Input
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          {...others}
          value={value}
          onChangeText={text => {
            this.value = text;
            if (onChangeText) {
              onChangeText(text);
            }
            this.setState({ value: text });
          }}
        />
      </Item>
    );
  }
}
