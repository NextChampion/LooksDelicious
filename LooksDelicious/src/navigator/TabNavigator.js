import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import TabCookScreen from '../screens/TabCookScreen';
import TabIndexTwo from '../screens/TabIndexTwo';
import TabIndexThree from '../screens/TabIndexThree';
import UI from '../UI';

const TabNavigator = createBottomTabNavigator(
  {
    Cook: TabCookScreen,
    Gift: TabIndexTwo,
    Mine: TabIndexThree,
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
        // if (routeName === 'Home') {
        //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        //   // Sometimes we want to add badges to some icons.
        //   // You can check the implementation below.
        // } else if (routeName === 'Settings') {
        //   iconName = `ios-options${focused ? '' : '-outline'}`;
        // }

        // You can return any component that you like here!
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
