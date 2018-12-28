import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from '../redux';
import Container from '../components/Container';
import UI from '../UI';
import Button from '../components/Button';

class Splash extends Component<{}> {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {};

  componentDidMount() {}

  onStart = () => {
    const { navigation } = this.props;
    navigation.navigate('main');
  };

  render() {
    return (
      <Container>
        <View style={styles.content}>
          <Text>SplashScreen</Text>
        </View>
        <Button type="small" name="Get Started" onPress={this.onStart} />
      </Container>
    );
  }
}

export default connect(['version'])(Splash);

const styles = StyleSheet.create({
  images: {
    paddingTop: 112,
    alignItems: 'center',
  },
  image: {
    width: 327,
    height: 216,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    marginTop: 56,
    paddingHorizontal: UI.unit * 4,
  },
  text: {
    fontSize: 20,
    color: UI.color.black,
    fontFamily: 'AvenirNext-Medium',
  },
});
