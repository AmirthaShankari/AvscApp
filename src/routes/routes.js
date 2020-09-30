/* eslint-disable no-nested-ternary */
// React Imports
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// App Imports
import { AppConstants } from '../constants/AppConstants';
import { Context as AppLoadContext } from '../context/AppLoadContext';
import { Context as AuthContext } from '../context/AuthContext';

// App Screens Imports
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AppLoadScreen from '../screens/AppLoadScreen';

export default () => {
  // Extracting Context values needed to decide the navigation stack
  const { state: { isAppLoadComplete } } = useContext(AppLoadContext);
  const { state: { authName } } = useContext(AuthContext);

  // Defining stack navigator
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAppLoadComplete ? (authName ? (
          <Stack.Screen name={AppConstants.ROUTES.HOME} component={HomeScreen} />
        ) : (
          <Stack.Screen name={AppConstants.ROUTES.LOGIN} component={LoginScreen} />
        )) : (
          <Stack.Screen name={AppConstants.ROUTES.APP_LOAD} component={AppLoadScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
