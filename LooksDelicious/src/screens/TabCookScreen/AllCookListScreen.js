import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
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
import { connect } from '../../redux';
import UI from '../../UI';

import SearchBar from './components/SearchBar';
import SecondaryMenuBar from './components/SecondaryMenuBar';

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

@connect(['cook'])
class AllCookListScreen extends Component<{}> {
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
    const { navigation, cook } = this.props;
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
            <Title>菜谱分类</Title>
          </Body>
          <Right />
        </Header>
        <SecondaryMenuBar
          data={cook.get('list').toJS()}
          onRightItemPress={a => {
            navigation.navigate('dishList', a);
            console.log('aaaa', a);
          }}
        />
      </Container>
    );
  }
}

export default AllCookListScreen;
