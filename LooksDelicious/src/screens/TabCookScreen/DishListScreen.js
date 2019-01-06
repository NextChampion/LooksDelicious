import React, { Component } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Left, Right, Icon, Header, Body, Title } from 'native-base';

import Loading from '../components/Loading';
import Container from '../../components/Container';
import DishItem from './components/DishItem';
import server from '../../server';
import UI from '../../UI';

export default class DishListScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  state = {
    data: null,
    loaded: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { id } = this.props.navigation.state.params;
    this.setState({ loaded: false });
    let response;
    try {
      response = await server.getDataOfTag(id);
    } catch (e) {
      this.setState({ loaded: true });
    }
    this.setState({
      loaded: true,
      data: response.result.data,
    });
  };

  renderItem = ({ item }) => (
    <DishItem
      data={item}
      onPress={() => {
        this.props.navigation.navigate('stepList', item);
      }}
    />
  );

  render() {
    const { loaded, data } = this.state;
    const { navigation } = this.props;
    const { name } = navigation.state.params;
    if (!loaded) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Loading />
        </View>
      );
    }
    return (
      <Container style={{ paddingBottom: 0 }}>
        <Header transparent>
          <Left>
            <TouchableOpacity
              style={{
                width: 44,
                paddingHorizontal: UI.unit * 2,
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="arrow-back" style={{ color: UI.color.primary1 }} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>{name}</Title>
          </Body>
          <Right />
        </Header>
        <FlatList
          data={data || []}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
