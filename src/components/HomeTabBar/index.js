// React Imports
import React from 'react';
import {
  View, TouchableOpacity, Text, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { log } from '../../utils/logger';
import Header from '../shared/Header';
import { Colors } from '../../themes';
import { styles } from './styles';

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabContainer}>
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

            return (
              <TouchableOpacity
                key={label}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <View style={[styles.tab, isFocused ? styles.selectedTab : '']}>
                  <Icon
                    name={options.tabBarIcon}
                    size={30}
                    color={isFocused ? Colors.white : Colors.grey}
                  />
                  <Text style={[styles.title, isFocused ? styles.titleSelected : '']}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>

  );
};

export default React.memo(HomeTabBar);
