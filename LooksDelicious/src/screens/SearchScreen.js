import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import {
  Container,
  ListItem,
  Left,
  Right,
  Icon,
  Header,
  Body,
  Button,
  Title,
  Item,
  Input,
} from 'native-base';

// import server from '../../server';
import UI from '../UI';

import SearchBar from './TabCookScreen/components/SearchBar';

/*
  家常菜 : Home cooking
  快手菜 : Fast food
  创意菜:Creative cuisine
  素菜:Vegetarian dish
  凉菜: cold dish
  烘焙: Baking
  面食: pasta
  汤: soup
  自制调味料: Homemade seasoning
*/

class SearchScreen extends Component<{}> {
  state = {
    data: [],
  };

  componentDidMount() {
    // this.onRefresh();
  }

  // onRefresh = async () => {
  //   this.setState({ refreshing: true });
  //   let response;
  //   try {
  //     response = await server.getAllTags();
  //   } catch (e) {
  //     this.setState({ refreshing: false });
  //   }
  //   dispatch('UPDATE_COOK', response.result);
  //   this.setState({
  //     refreshing: false,
  //     data: response.result,
  //   });
  // };

  renderItem = ({ item }) => (
    <ListItem
      selected
      onPress={() => {
        const { navigation } = this.props;
        navigation.navigate('cookList', item);
      }}
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
    const { data } = this.state;
    return (
      <Container style={{ paddingBottom: 0 }}>
        <Header
          transparent
          searchBar
          rounded
          // style={{ backgroundColor: UI.color.primary1 }}
        >
          <SearchBar />
          <Button
            transparent
            onPress={() => {
              console.log('111');
              this.props.navigation.navigate('main');
            }}
          >
            <Text>Cancel</Text>
          </Button>
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

export default SearchScreen;
