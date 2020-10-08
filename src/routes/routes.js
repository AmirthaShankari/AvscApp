/* eslint-disable no-nested-ternary */
// React Imports
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// App Imports
import { AppConstants } from '../constants/AppConstants';
import { Context as AppLoadContext } from '../context/AppLoadContext';
import { Context as AuthContext } from '../context/AuthContext';

// App Screens Imports
// import HomeScreen from '../screens/HomeScreen';
// import TestTabScreen from '../screens/TestTabScreen';
import LoginScreen from '../screens/LoginScreen';
import AppLoadScreen from '../screens/AppLoadScreen';
import LikesScreen from '../screens/LikesScreen';
import TweetsScreen from '../screens/TweetsScreen';
import MediaScreen from '../screens/MediaScreen';
import { HomeTabBar } from '../components';

export default () => {
  // Extracting Context values needed to decide the navigation stack
  const { state: { isAppLoadComplete } } = useContext(AppLoadContext);
  const { state: { authName } } = useContext(AuthContext);

  // Defining stack navigator
  const Stack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();

  const TabBarNavigation = () => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tab.Navigator tabBar={(props) => <HomeTabBar {...props} />}>
      <Tab.Screen name="Likes" component={LikesScreen} />
      <Tab.Screen name="Tweets" component={TweetsScreen} />
      <Tab.Screen name="Media" component={MediaScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAppLoadComplete ? (authName ? (
          <Stack.Screen name={AppConstants.ROUTES.HOME} component={TabBarNavigation} />
        ) : (
          <Stack.Screen name={AppConstants.ROUTES.LOGIN} component={LoginScreen} />
        )) : (
          <Stack.Screen name={AppConstants.ROUTES.APP_LOAD} component={AppLoadScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
