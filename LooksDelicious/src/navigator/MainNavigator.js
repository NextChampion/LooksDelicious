import { createStackNavigator } from 'react-navigation';

import CookListScreen from '../screens/TabCookScreen/CookListScreen';
import Tab from './TabNavigator';

export default createStackNavigator({
  main: Tab,
  cookList: CookListScreen,
});
