import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import TabCookScreen from '../screens/TabCookScreen';
import TabGiftScreen from '../screens/TabGiftScreen';
import TabMineScreen from '../screens/TabMineScreen';
import UI from '../UI';

const TabNavigator = createBottomTabNavigator(
  {
    Cook: TabCookScreen,
    Gift: TabGiftScreen,
    Mine: TabMineScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let source;
        if (routeName === 'Mine') {
          if (focused) {
            source = require('./tabImages/mine_selected.png');
          } else {
            source = require('./tabImages/mine_unselected.png');
          }
        }
        if (routeName === 'Gift') {
          if (focused) {
            source = require('./tabImages/gift_selected.png');
          } else {
            source = require('./tabImages/gift_unselected.png');
          }
        }
        if (routeName === 'Cook') {
          if (focused) {
            source = require('./tabImages/cook_selected.png');
          } else {
            source = require('./tabImages/cook_unselected.png');
          }
        }
        return <Image source={source} style={{ width: 26, height: 26 }} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: UI.color.primary1,
      inactiveTintColor: UI.color.unselected,
    },
  },
);

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return { headerTitle };
};

export default TabNavigator;
