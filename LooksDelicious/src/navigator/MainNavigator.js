import { createStackNavigator } from 'react-navigation';

import TabOneSecond from '../screens/TabIndexOne/TabOneSecond';
import Tab from './TabNavigator';

export default createStackNavigator({
  main: Tab,
  tabOneSecond: TabOneSecond,
});
