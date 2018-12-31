import React, { Component } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { ListItem, Left, Right, Icon } from 'native-base';

import server from '../../server';
import { dispatch, connect } from '../../redux';
import Container from '../../components/Container';

@connect(['cook'])
class TabCookScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
  });

  state = {
    refreshing: false,
    data: [],
  };

  componentDidMount() {
    console.log('componentDidMount getData', this.props);
    // this.onRefresh();
  }

  onStart = () => {
    this.props.navigation.navigate('tabOneSecond');
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    let response;
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

  renderItem = ({ item }) => (
    <ListItem
      selected
      onPress={() => this.props.navigation.navigate('cookList', item)}
    >
      <Left>
        <Text>{item.get('name')}</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );

  render() {
    const { cook } = this.props;
    const data = cook.get('list').toArray();
    console.log('data', data);
    const { refreshing } = this.state;
    return (
      <Container style={{ paddingBottom: 0 }}>
        <FlatList
          refreshing={refreshing}
          onRefresh={this.onRefresh}
          data={data}
          keyExtractor={item => item.get('parentId')}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

export default TabCookScreen;

const styles = StyleSheet.create({});
