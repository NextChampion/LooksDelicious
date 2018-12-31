import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Loading from '../components/Loading';
import Container from '../../components/Container';
import StepItem from './components/StepItem';

export default class DishListScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  renderItem = ({ item }) => <StepItem data={item} />;

  render() {
    const { steps } = this.props.navigation.state.params;
    return (
      <Container style={{ paddingBottom: 0 }}>
        <FlatList
          data={steps || []}
          keyExtractor={item => item.img}
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
