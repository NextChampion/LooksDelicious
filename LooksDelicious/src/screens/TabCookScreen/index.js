import React, { Component } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { ListItem, Left, Right, Icon } from 'native-base';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';

import server from '../../server';
import { dispatch, connect } from '../../redux';
import Container from '../../components/Container';

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
    const { refreshing } = this.state;
    return (
      <Container style={{ paddingBottom: 0 }}>
        <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}>
          <HomeCookingScreen tabLabel="家常菜" />
          <FastFoodScreen tabLabel="快手菜" />
          <CreativeCuisineScreen tabLabel="创意菜" />
          <VegetarianDishScreen tabLabel="素菜" />
          <ColdDishScreen tabLabel="凉菜" />
          <BakingScreen tabLabel="烘焙" />
          <PastaScreen tabLabel="面食" />
          <SoupScreen tabLabel="汤" />
          <HomemadeSeasoningScreen tabLabel="调味料" />
        </ScrollableTabView>
      </Container>
    );
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
