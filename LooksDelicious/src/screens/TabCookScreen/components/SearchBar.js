import React, { Component } from 'react';
import { Item, Icon, Input, Text } from 'native-base';
import PropTypes from 'prop-types';

export default class SearchBar extends Component<{}> {
  static propTypes = {
    data: PropTypes.object,
    onPress: PropTypes.func,
    editable: PropTypes.bool,
  };

  static defaultProps = {
    data: {},
    onPress: null,
    editable: true,
  };

  shouldComponentUpdate(props) {
    const { data } = this.props;
    return data.id !== props.data.id;
  }

  render() {
    const { data, onPress, editable, ...others } = this.props;
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
        <Input placeholder="Search" {...others} />
      </Item>
    );
  }
}
