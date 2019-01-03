import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Loading from '../components/Loading';
import Container from '../../components/Container';
import DishItem from './components/DishItem';
import server from '../../server';

export default class DishListScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.get('name')}`,
  });

  state = {
    data: null,
    loaded: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data = this.props.navigation.state.params;
    const id = data.get('id');
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
