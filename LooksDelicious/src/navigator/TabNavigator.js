// import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import TabCookScreen from '../screens/TabCookScreen';
import TabIndexTwo from '../screens/TabIndexTwo';
import TabIndexThree from '../screens/TabIndexThree';

const TabNavigator = createBottomTabNavigator({
  Cook: TabCookScreen,
  two: TabIndexTwo,
  three: TabIndexThree,
});

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return { headerTitle };
};

export default TabNavigator;
