import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class TabGiftScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Header transparent>
          <Body>
            <Title>Gift</Title>
          </Body>
        </Header>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>TabGiftScreen</Text>
      </View>
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
