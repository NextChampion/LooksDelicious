import React, { Component } from 'react';
import { Text } from 'react-native';
import { ListItem, Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';

export default class StepItem extends Component<{}> {
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
      <ListItem selected onPress={onPress}>
        <Left>
          <Text>{data.title}</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  }
}
