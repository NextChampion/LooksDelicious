import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import UI from '../UI';

import AddWalletScreen from '../screens/CreateAndImportScreens/AddWalletScreen';
import AddWalletScreen2 from '../screens/CreateAndImportScreens/AddWalletScreen2';
import AddWalletScreen3 from '../screens/CreateAndImportScreens/AddWalletScreen3';
import EnterKeyScreen from '../screens/CreateAndImportScreens/EnterKeyScreen';
import EnterAddressScreen from '../screens/CreateAndImportScreens/EnterAddressScreen';
import EnterMnemonicScreen from '../screens/CreateAndImportScreens/EnterMnemonicScreen';
import ScanScreen from '../screens/ScanScreen';

import SelectWalletsScreen from '../screens/CreateAndImportScreens/SelectWalletsScreen';
import CreateWalletsScreen from '../screens/CreateAndImportScreens/CreateWalletsScreen';
import CreatePasscodeScreen from '../screens/CreateAndImportScreens/CreatePasscodeScreen';
import VerifyPasscodeScreen from '../screens/CreateAndImportScreens/VerifyPasscodeScreen';
import CreateEosAccountScreen from '../screens/CreateAndImportScreens/CreateEosAccountScreen';
import EnterAccountNameScreen from '../screens/CreateAndImportScreens/EnterAccountNameScreen';
import IAPPayToCreateScreen from '../screens/CreateAndImportScreens/IAPPayToCreateScreen';
import CreateEndScreen from '../screens/CreateAndImportScreens/CreateEndScreen';
import IntroduceFeeScreen from '../screens/CreateAndImportScreens/IntroduceFeeScreen';

import navigationOptionsWithHeader from './navigationOptionsWithHeader';

// const TransitionConfiguration = () => ({
//   screenInterpolator: sceneProps => {
//     const { scene } = sceneProps;
//     const { route } = scene;
//     const params = route.params || {};
//     const transition = params.transition || 'forHorizontal';
//     return CardStackStyleInterpolator[transition](sceneProps);
//   },
//   transitionSpec: {
//     duration: 250,
//     easing: Easing.linear,
//     timing: Animated.timing,
//   },
// });

export default createStackNavigator(
  {
    addWallet: { screen: AddWalletScreen },
    selectWallet: { screen: SelectWalletsScreen },
    createWallets: { screen: CreateWalletsScreen },
    createPasscode: { screen: CreatePasscodeScreen },
    verifyPasscode: { screen: VerifyPasscodeScreen },
    createEosAccount: { screen: CreateEosAccountScreen },
    enterAccountName: { screen: EnterAccountNameScreen },
    payToCreate: { screen: IAPPayToCreateScreen },
    createEnd: { screen: CreateEndScreen },
    introduceFee: { screen: IntroduceFeeScreen },
    addWallet2: { screen: AddWalletScreen2 },
    addWallet3: { screen: AddWalletScreen3 },
    enterKey: { screen: EnterKeyScreen },
    enterAddress: { screen: EnterAddressScreen },
    enterMnemonic: { screen: EnterMnemonicScreen },
    addScan: { screen: ScanScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: UI.color.white1,
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 0,
      },
      headerTitleStyle: {
        fontWeight: '600',
      },
      headerBackTitleStyle: {
        fontWeight: '400',
      },
      headerTintColor: UI.color.black,
    },
  },
);
