// React Imports
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

// App Imports
import { styles } from './styles';
import { log } from '../../utils/logger';

// Component Imports
import { Header, HomeTabs, TasksTab } from '../../components';
import { AppConstants } from '../../constants/AppConstants';

// Constants Declaration
const APP_CONST = AppConstants.SCREENS.HOME_SCREEN;

const HomeScreen = () => {
  log.info('Rendering Home Screen....');

  // State Declaration
  const [selectedTab, setSelectedTab] = useState('');

  useEffect(() => {
    // Setting the default tab selection
    if (!selectedTab) {
      const defaultTab = APP_CONST.TABS.find((tab) => tab.DEFAULT);
      setSelectedTab(defaultTab.KEY);
    }
  }, []);

  const populateHomeScreenBasedOnTab = (tabSelected) => {
    log.info('Populate the home screen based on tab selection : ', tabSelected);
    switch (tabSelected) {
      case 'TASK':
        return (
          <View style={styles.tabContent}>
            <TasksTab />
          </View>
        );
      case 'ALERTS':
        return <View><Text>Alerts Selected</Text></View>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Header
          showBack={false}
          showLogo
          showProfile
        />
        <HomeTabs
          tabs={APP_CONST.TABS}
          selectedTab={selectedTab}
          updateTabSelection={(tab) => setSelectedTab(tab)}
        />
        {populateHomeScreenBasedOnTab(selectedTab)}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
