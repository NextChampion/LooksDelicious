import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import {
  CardItem,
  Card,
  Body,
  Text,
  Header,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

import { connect, dispatch } from '../../redux';
import Container from '../../components/Container';
import StepItem from './components/StepItem';
import UI from '../../UI';

@connect(['collections'])
export default class StepListScreen extends Component<{}> {
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
      <Container>
        <Card>
          <CardItem cardBody>
            <Image
              source={{ uri: albums[0] }}
              style={{ height: UI.size.screenWidth - 10, width: null, flex: 1 }}
            />
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text note style={{ fontSize: 12 }}>
                标签: {tags}
              </Text>
              <Text style={{ fontSize: 12, marginTop: 6, marginBottom: 6 }}>
                介绍: {imtro}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Text style={{ marginTop: 12, fontSize: 16, marginLeft: 12 }}>
          食材清单:
        </Text>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ marginBottom: 12, fontSize: 12 }}>
                主料: {ingredients}
              </Text>
              <Text note style={{ fontSize: 12 }}>
                辅料: {burden}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Text style={{ marginTop: 12, fontSize: 16, marginLeft: 12 }}>
          烹饪步骤:
        </Text>
      </Container>
    );
  };

  renderItem = ({ item }) => <StepItem data={item} />;

  render() {
    const { navigation, collections } = this.props;
    const data = navigation.state.params;
    const { steps, title, id } = data;
    const index = collections.find(c => c.get('id') === id);
    let isHadCollected = false;
    if (index) {
      isHadCollected = true;
    }
    return (
      <Container style={{ paddingBottom: 0 }}>
        <Header transparent>
          <TouchableOpacity
            style={{
              width: 44,
              paddingHorizontal: UI.unit * 2,
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('main');
            }}
          >
            <Icon name="arrow-back" style={{ color: UI.color.primary1 }} />
          </TouchableOpacity>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                dispatch('CHANGE_COLLECTIONS_STATE', data);
              }}
            >
              <Icon
                name={isHadCollected ? 'ios-star' : 'ios-star-outline'}
                size={30}
                style={{ color: UI.color.primary1 }}
              />
            </Button>
          </Right>
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
