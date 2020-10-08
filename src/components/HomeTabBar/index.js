// React Imports
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
// App Imports
import { log } from '../../utils/logger';
import Header from '../shared/Header';

const HomeTabBar = ({
  state, descriptors, navigation
}) => {
  log.info('Home Tab bar component rendered...');

  return (
    <View style={styles.containerHeader}>
      <Header
        showBack={false}
        showLogo
        showProfile
      />
      {/* <View style={styles.tabContainer}>
        <View>
          <Text>Tweets</Text>
        </View>
        <View>
          <Text>Media</Text>
        </View>
        <View>
          <Text>Likes</Text>
        </View>
      </View> */}
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          // eslint-disable-next-line no-nested-ternary
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // const inputRange = state.routes.map((_, i) => i);
          // const opacity = Animated.interpolate(position, {
          //   inputRange,
          //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
          // });

          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Animated.Text>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 70
  },
  textWhite: {
    color: 'black',
    marginVertical: 10
  },
  tabContainer: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
    height: 40
  }
});

export default React.memo(HomeTabBar);
