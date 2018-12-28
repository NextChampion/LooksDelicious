export default class App extends React.Component {
  render() {
    /* In the root component we are rendering the app navigator */
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

const AuthenticationContainer = createAppContainer(AuthenticationNavigator);

class AuthenticationScreen extends React.Component {
  render() {
    /*
     * In a screen inside of the navigator we are rendering another navigator
     * You should avoid this! It will have its own navigation state and be unable
     * To interact with any parent navigator, eg: it would not know the route "Home" exists
     */
    return <AuthenticationContainer />;
  }
}

const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationScreen, // This screen renders a navigator!
  Home: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);
