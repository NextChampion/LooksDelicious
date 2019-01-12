import React, { Component } from 'react';
import { Image } from 'react-native';
import { CardItem, Card, Body, Text } from 'native-base';
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
      <Card style={{ margin: 24 }}>
        <CardItem
          cardBody
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            source={{ uri: data.img }}
            style={{ height: 230, width: 300 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{ marginLeft: 20 }} note>
              {data.step}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
