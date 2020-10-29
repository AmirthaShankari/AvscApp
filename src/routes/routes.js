/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
// React Imports
import React, { useContext, Suspense, lazy } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// App Imports
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppConstants } from '../constants/AppConstants';
import { Context as AppLoadContext } from '../context/AppLoadContext';
import { Context as AuthContext } from '../context/AuthContext';
import { HomeTabBar } from '../components';

// App Screens Imports
const LoginScreen = lazy(() => import('../screens/LoginScreen'));
const AppLoadScreen = lazy(() => import('../screens/AppLoadScreen'));
const AlertsScreen = lazy(() => import('../screens/AlertsScreen'));
const BugScreen = lazy(() => import('../screens/BugScreen'));
const TaskScreen = lazy(() => import('../screens/TaskScreen'));
const OptionScreen = lazy(() => import('../screens/OptionScreen'));
const TrafficScreen = lazy(() => import('../screens/TrafficScreen'));
const UserProfileScreen = lazy(() => import('../screens/UserProfileScreen'));
const OrdersScreen = lazy(() => import('../screens/OrdersScreen'));
const VendorProfileScreen = lazy(() => import('../screens/VendorProfileScreen'));

export default () => {
  const APP_CONST = AppConstants.ROUTES;

  // Extracting Context values needed to decide the navigation stack
  const { state: { isAppLoadComplete } } = useContext(AppLoadContext);
  const { state: { authName, role } } = useContext(AuthContext);

  // Defining stack navigator
  const Stack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();

  const TabBarNavigation = () => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tab.Navigator tabBar={(props) => <HomeTabBar {...props} />}>
      <Tab.Screen
        name={APP_CONST.HOME_TABS.ALERTS.ROUTE}
        component={AlertsScreen}
        options={{ tabBarLabel: APP_CONST.HOME_TABS.ALERTS.DISPLAY_NAME, tabBarIcon: APP_CONST.HOME_TABS.ALERTS.ICON }}
      />
      <Tab.Screen
        name={APP_CONST.HOME_TABS.BUGS.ROUTE}
        component={BugScreen}
        options={{ tabBarLabel: APP_CONST.HOME_TABS.BUGS.DISPLAY_NAME, tabBarIcon: APP_CONST.HOME_TABS.BUGS.ICON }}
      />
      <Tab.Screen
        name={APP_CONST.HOME_TABS.TASK.ROUTE}
        component={TaskScreen}
        options={{ tabBarLabel: APP_CONST.HOME_TABS.TASK.DISPLAY_NAME, tabBarIcon: APP_CONST.HOME_TABS.TASK.ICON }}
      />
      <Tab.Screen
        name={APP_CONST.HOME_TABS.OPTIONS.ROUTE}
        component={OptionScreen}
        options={{ tabBarLabel: APP_CONST.HOME_TABS.OPTIONS.DISPLAY_NAME, tabBarIcon: APP_CONST.HOME_TABS.OPTIONS.ICON }}
      />
      <Tab.Screen
        name={APP_CONST.HOME_TABS.TRAFFIC.ROUTE}
        component={TrafficScreen}
        options={{ tabBarLabel: APP_CONST.HOME_TABS.TRAFFIC.DISPLAY_NAME, tabBarIcon: APP_CONST.HOME_TABS.TRAFFIC.ICON }}
      />
    </Tab.Navigator>
  );

  return (
    <SafeAreaProvider>
      <Suspense fallback={<Text>Loading...</Text>}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {isAppLoadComplete ? (authName
              ? ((role === 'USER') ? (
                <>
                  <Stack.Screen name={APP_CONST.HOME} component={TabBarNavigation} />
                  <Stack.Screen name={APP_CONST.USER_PROFILE} component={UserProfileScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name={APP_CONST.ORDERS} component={OrdersScreen} />
                  <Stack.Screen name={APP_CONST.VENDOR_PROFILE} component={VendorProfileScreen} />
                </>
              )
              ) : (
                <Stack.Screen name={APP_CONST.LOGIN} component={LoginScreen} />
              )) : (
                <Stack.Screen name={APP_CONST.APP_LOAD} component={AppLoadScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </SafeAreaProvider>
  );
};
