import React, { Component } from 'react';
import { Item, Icon, Input, Text } from 'native-base';
import PropTypes from 'prop-types';

export default class SearchBar extends Component<{}> {
  static propTypes = {
    data: PropTypes.object,
    onPress: PropTypes.func,
    editable: PropTypes.bool,
    onChangeText: PropTypes.func,
  };

  static defaultProps = {
    data: {},
    onPress: null,
    editable: true,
    onChangeText: null,
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
    const { data, onPress, editable, onChangeText, ...others } = this.props;
    const { value } = this.state;
    if (!editable) {
      return (
        <Item onPress={onPress}>
          <Icon name="ios-search" />
          <Text>Search</Text>
        </Item>
      );
    }
    return (
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Search"
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
