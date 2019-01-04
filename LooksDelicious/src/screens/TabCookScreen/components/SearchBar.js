import React, { Component } from 'react';
import { Item, Icon, Input, Text } from 'native-base';
import PropTypes from 'prop-types';

export default class SearchBar extends Component<{}> {
  static propTypes = {
    data: PropTypes.object,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    data: {},
    onPress: null,
  };

  shouldComponentUpdate(props) {
    const { data } = this.props;
    return data.id !== props.data.id;
  }

  render() {
    const { data, onPress } = this.props;
    return (
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search" {...this.props} />
      </Item>
    );
  }
}
