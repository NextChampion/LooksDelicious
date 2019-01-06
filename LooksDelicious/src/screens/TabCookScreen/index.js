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
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
// import server from '../../server';
import { connect, dispatch } from '../../redux';
import UI from '../../UI';
import server from '../../server';
import SearchBar from './components/SearchBar';

import BakingScreen from './BakingScreen';
import ColdDishScreen from './ColdDishScreen';
import CreativeCuisineScreen from './CreativeCuisineScreen';
import FastFoodScreen from './FastFoodScreen';
import HomeCookingScreen from './HomeCookingScreen';
import HomemadeSeasoningScreen from './HomemadeSeasoningScreen';
import PastaScreen from './PastaScreen';
import SoupScreen from './SoupScreen';
import VegetarianDishScreen from './VegetarianDishScreen';

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

@connect(['cook', 'dishes'])
class TabCookScreen extends Component<{}> {
  componentDidMount() {
    // this.onRefresh();
  }

  onRefresh = async () => {
    this.setState({ refreshing: true });
    let response;
    try {
      response = await server.getAllTags();
    } catch (e) {
      this.setState({ refreshing: false });
    }
    dispatch('UPDATE_COOK', response.result);
    this.setState({
      refreshing: false,
      data: response.result,
    });
  };

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
    const { navigation } = this.props;
    return (
      <Container style={{ paddingBottom: 0 }}>
        <Header transparent searchBar rounded>
          <TouchableOpacity
            style={{
              width: 44,
              paddingHorizontal: UI.unit * 2,
              justifyContent: 'center',
            }}
          >
            <Icon name="arrow-back" style={{ color: UI.color.primary1 }} />
          </TouchableOpacity>
          <SearchBar
            editable={false}
            onPress={() => {
              navigation.navigate('search');
            }}
          />
          <Button
            transparent
            onPress={() => {
              console.log('111');
              navigation.navigate('allCook');
            }}
          >
            <Icon name="menu" style={{ color: UI.color.primary1 }} />
          </Button>
        </Header>
        <ScrollableTabView
          renderTabBar={() => (
            <ScrollableTabBar
              tabStyle={{ height: 40 }}
              style={{ borderWidth: 0, height: 40 }}
            />
          )}
          tabBarUnderlineStyle={{
            backgroundColor: UI.color.primary1,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
          tabBarTextStyle={{
            fontSize: UI.fontSize.regular,
            color: UI.color.primary1,
          }}
        >
          <HomeCookingScreen tabLabel="家常菜" id={1} {...this.props} />
          <FastFoodScreen tabLabel="快手菜" id={2} {...this.props} />
          <CreativeCuisineScreen tabLabel="创意菜" id={3} {...this.props} />
          <VegetarianDishScreen tabLabel="素菜" id={4} {...this.props} />
          <ColdDishScreen tabLabel="凉菜" id={5} {...this.props} />
          <BakingScreen tabLabel="烘焙" id={6} {...this.props} />
          <PastaScreen tabLabel="面食" id={7} {...this.props} />
          <SoupScreen tabLabel="汤" id={8} {...this.props} />
          <HomemadeSeasoningScreen tabLabel="调味料" id={9} {...this.props} />
        </ScrollableTabView>
      </Container>
    );
  }
}

export default TabCookScreen;
