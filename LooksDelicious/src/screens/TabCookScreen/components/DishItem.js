import React, { Component } from 'react';
import { ListItem, Thumbnail, Body, Text } from 'native-base';
import PropTypes from 'prop-types';

export default class DishItem extends Component<{}> {
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
      <ListItem thumbnail onPress={onPress}>
        <Thumbnail square source={{ uri: data.albums[0] }} />
        <Body>
          <Text>{data.title}</Text>
          <Text note numberOfLines={3} style={{ marginTop: 6, fontSize: 12 }}>
            {data.imtro}
          </Text>
        </Body>
      </ListItem>
    );
  }
}
