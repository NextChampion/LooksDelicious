import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import UI from '../../UI';

export default class Container extends Component {
  shouldComponentUpdate(nextProps) {
    const { children } = this.props;
    return children !== nextProps.children;
  }

  scrollTo = offSet => {
    this.scroll.scrollTo(offSet);
  };

  render() {
    console.debug('[render] Container');
    const { scroll, padding, children, style, bgStyle, ...others } = this.props;
    if (scroll) {
      return (
        <ScrollView
          {...others}
          ref={a => (this.scroll = a)}
          style={[
            { flex: 1, backgroundColor: UI.color.bg1 },
            !!bgStyle && bgStyle,
          ]}
          contentContainerStyle={[
            styles.scroll,
            !!padding && styles.padding,
            !!style && style,
          ]}
        >
          {children}
        </ScrollView>
      );
    }

    return (
      <ScrollView
        scrollEnabled={false}
        keyboardDismissMode="on-drag"
        style={[
          { flex: 1, backgroundColor: UI.color.bg1 },
          !!bgStyle && bgStyle,
        ]}
        contentContainerStyle={[
          styles.view,
          !!padding && styles.padding,
          !!style && style,
        ]}
      >
        {children}
      </ScrollView>
    );
  }
}

// export default function Container({ scroll, padding, children, style }) {
//   console.debug('[render] Container');
//
//   if (scroll) {
//     return (
//       <ScrollView
//         style={{ flex: 1, backgroundColor: UI.color.bg1 }}
//         contentContainerStyle={[
//           styles.scroll,
//           padding && styles.padding,
//           style && style,
//         ]}
//         keyboardDismissMode="on-drag"
//       >
//         {children}
//       </ScrollView>
//     );
//   }
//
//   return (
//     <View style={[styles.view, padding && styles.padding, style && style]}>
//       {children}
//     </View>
//   );
// }

Container.propTypes = {
  padding: PropTypes.bool,
  scroll: PropTypes.bool,
  // FIXME: children 没声明类型可能是数组可能是对象
  // children: PropTypes.object,
  // style: PropTypes.number,
};

Container.defaultProps = {
  padding: false,
  scroll: false,
  children: null,
  style: null,
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: UI.color.bg1,
    paddingBottom: UI.IS_IPHONE_X ? 24 : 0,
  },
  view: {
    flex: 1,
    backgroundColor: UI.color.bg1,
    paddingBottom: UI.unit * 4 + (UI.IS_IPHONE_X ? 24 : 0),
  },
  padding: {
    paddingHorizontal: UI.unit * 4,
    paddingTop: UI.unit * 2,
    paddingBottom: UI.unit * 4 + (UI.IS_IPHONE_X ? 24 : 0),
  },
});
