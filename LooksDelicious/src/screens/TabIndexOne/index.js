import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import server from '../../server';
import { dispatch, connect } from '../../redux';
import Button from '../../components/Button';
import Container from '../../components/Container';

export default class TabIndexOne extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
  });

  state = {
    refreshing: false,
    data: [],
  };

  componentWillMount() {
    console.log('componentWillMount getData');
    this.onRefresh();
  }

  onStart = () => {
    this.props.navigation.navigate('tabOneSecond');
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    let result;
    try {
      response = await server.getAllTags();
    } catch (e) {
      console.log('eeee', e);
      this.setState({ refreshing: false });
    }
    console.log('result11', response.result);
    dispatch('UPDATE_COOK', response.result);
    this.setState({
      refreshing: false,
      data: response.result,
    });
  };

  renderItem = ({ name }) => (
    <View>
      <Text>{name}</Text>
    </View>
  );

  render() {
    return (
      <Container style={styles.container}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          data={this.state.data}
          renderItem={this.renderItem}
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>TabIndexOne</Text>
        <Button type="small" name="Go to next page" onPress={this.onStart} />
        <Button
          type="small"
          name="Increment"
          onPress={() => {
            dispatch('INCREMENT');
          }}
        />
        <Button
          type="small"
          name="Decrement"
          onPress={() => {
            dispatch('DECREMENT');
          }}
        />
        <Button
          type="small"
          name="Decrement"
          onPress={() => {
            this.props.navigation.setParams({
              title: 'One',
            });
          }}
        />
        <Button type="small" name="Get Data" onPress={this.getData} />
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
