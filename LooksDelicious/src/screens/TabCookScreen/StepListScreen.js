import React, { Component } from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import {
  CardItem,
  Card,
  Body,
  Text,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

import Container from '../../components/Container';
import StepItem from './components/StepItem';
import UI from '../../UI';

export default class DishListScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  renderHeader = () => {
    const {
      albums,
      burden,
      ingredients,
      tags,
      imtro,
    } = this.props.navigation.state.params;
    return (
      <Card>
        <CardItem cardBody>
          <Image
            source={{ uri: albums[0] }}
            style={{ height: UI.size.screenWidth - 10, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text note style={{ fontSize: 12 }}>
              标签: {tags}
            </Text>
            <Text style={{ fontSize: 12, marginTop: 6, marginBottom: 6 }}>
              介绍: {imtro}
            </Text>
            <Text style={{ marginTop: 12, fontSize: 12 }}>
              主料: {ingredients}
            </Text>
            <Text note style={{ fontSize: 12 }}>
              辅料: {burden}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  };

  renderItem = ({ item }) => <StepItem data={item} />;

  render() {
    const { steps } = this.props.navigation.state.params;
    return (
      <Container style={{ paddingBottom: 0 }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <FlatList
          data={steps || []}
          keyExtractor={item => item.img}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
