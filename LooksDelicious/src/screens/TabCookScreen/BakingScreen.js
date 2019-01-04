import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Loading from '../components/Loading';
import Container from '../../components/Container';
import DishItem from './components/DishItem';
import server from '../../server';

export default class BakingScreen extends Component<{}> {
  state = {
    data: null,
    loaded: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { id } = this.props;
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
