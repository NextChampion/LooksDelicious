import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { CardItem, Card, Body } from 'native-base';
import PropTypes from 'prop-types';

export default class StepItem extends Component<{}> {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  shouldComponentUpdate(props) {
    const { data } = this.props;
    return data.img !== props.data.img;
  }

  render() {
    const { data } = this.props;
    return (
      <Card>
        <CardItem cardBody>
          <Image
            source={{ uri: data.img }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text note>{data.step}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
