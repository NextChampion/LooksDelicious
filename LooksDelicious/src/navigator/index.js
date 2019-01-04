import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainNavigator from './MainNavigator';
import SplashScreen from '../screens/SplashScreen';
import SearchScreen from '../screens/SearchScreen';

const RootNavigator = createSwitchNavigator({
  splash: SplashScreen,
  main: MainNavigator,
  search: SearchScreen,
});

export default createAppContainer(RootNavigator);
