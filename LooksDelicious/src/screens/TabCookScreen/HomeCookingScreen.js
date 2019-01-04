import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import Container from '../../components/Container';
import DishItem from './components/DishItem';
import server from '../../server';
import { dispatch } from '../../redux';

export default class HomeCookingScreen extends Component {
  static propTypes = {
    dishes: PropTypes.object,
    id: PropTypes.number,
  };

  static defaultProps = {
    dishes: {},
    id: 1,
  };

  state = {
    data: null,
    loaded: false,
    refreshing: false,
  };

  componentDidMount() {
    const { id, dishes } = this.props;
    const data = dishes && dishes.get && dishes.get(`${id}`);
    if (data) {
      if (Date.now() - data.get('updatedAt') > 1000 * 1200) {
        this.initialData();
      } else {
        this.setState({ loaded: true, data: data.get('list') });
      }
    } else {
      this.initialData();
    }
  }

  onRefresh = async () => {
    const { id } = this.props;
    this.setState({ refreshing: false });
    let response;
    try {
      response = await server.getDataOfTag(id);
    } catch (e) {
      this.setState({ refreshing: true });
    }
    dispatch('UPDATE_DISHES_WITH_ID', { id, list: response.result.data });
    this.setState({
      refreshing: false,
      data: response.result.data,
    });
  };

  initialData = async () => {
    const { id } = this.props;
    this.setState({ loaded: false });
    let response;
    try {
      response = await server.getDataOfTag(id);
    } catch (e) {
      this.setState({ loaded: true });
    }
    dispatch('UPDATE_DISHES_WITH_ID', { id, list: response.result.data });
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
    const { loaded, data, refreshing } = this.state;
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
          onRefresh={this.onRefresh}
          refreshing={refreshing}
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
