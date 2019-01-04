import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  ViewPropTypes,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import UI from '../../../UI';

export default class ScrollableTabBar extends Component {
  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    widths: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
  };

  static defaultProps = {
    activeTextColor: 'navy',
    inactiveTextColor: 'black',
    backgroundColor: null,
    widths: [100],
  };

  renderTabOption(name, page) {}

  renderTab = (name, page, isTabActive, props, width) => {
    const { goToPage, activeTextColor, inactiveTextColor, textStyle } = props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const bold = Platform.OS === 'ios' ? '600' : '400';
    const fontWeight = isTabActive ? bold : '400';
    return (
      <TouchableOpacity key={name} onPress={() => goToPage(page)}>
        <View style={[styles.tab, props.tabStyle, { width }]}>
          <Text style={[{ color: textColor, fontWeight }, textStyle]}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const numberOfTabs = this.props.tabs.length;
    const { widths, scrollValue } = this.props;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: 100,
      height: 3,
      left: 0,
      bottom: 0,
    };

    const inputRange = [];
    const outputRange = [];
    const scaleOutput = [];
    let accumulatedLeft = widths[0] / 2 - 50;
    for (let i = 0; i < numberOfTabs; i += 1) {
      inputRange.push(i);
      outputRange.push(accumulatedLeft);
      scaleOutput.push(widths[i] / 100);
      accumulatedLeft += widths[i] / 2 + widths[i + 1] / 2;
    }

    const translateX = scrollValue.interpolate({ inputRange, outputRange });
    const scaleX = scrollValue.interpolate({
      inputRange,
      outputRange: scaleOutput,
    });

    return (
      <View
        style={[
          styles.tabs,
          { backgroundColor: this.props.backgroundColor },
          this.props.style,
        ]}
      >
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props, widths[page]);
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            { transform: [{ translateX }, { scaleX }] },
            this.props.underlineStyle,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 40,
    flexDirection: 'row',
    marginHorizontal: 4 * UI.unit,
    borderWidth: 0,
  },
});
