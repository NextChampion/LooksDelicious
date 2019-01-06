import { createStackNavigator } from 'react-navigation';

import CookListScreen from '../screens/TabCookScreen/CookListScreen';
import DishListScreen from '../screens/TabCookScreen/DishListScreen';
import StepListScreen from '../screens/TabCookScreen/StepListScreen';
import AllCookListScreen from '../screens/TabCookScreen/AllCookListScreen';
import SearchScreen from '../screens/SearchScreen';
import Tab from './TabNavigator';
import NavigationOptionsWithHeader from './NavigationOptionsWithHeader';

export default createStackNavigator(
  {
    main: Tab,
    cookList: CookListScreen,
    dishList: DishListScreen,
    stepList: StepListScreen,
    search: SearchScreen,
    allCook: AllCookListScreen,
  },
  NavigationOptionsWithHeader,
);
