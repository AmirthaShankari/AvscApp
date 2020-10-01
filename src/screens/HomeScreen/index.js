// React Imports
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { AppMessages } from '../../constants/AppMessages';
import { CommonStyles } from '../../themes';
import { log } from '../../utils/logger';

const HomeScreen = () => {
  const MESSAGES = AppMessages.SCREENS.HOME;
  log.info('Logger check!!');
  return (
    <View style={styles.mainContainer}>
      <Text>{MESSAGES.TITLE}</Text>
      <Icon name="add-outline" size={30} color="#900" />
      <Text style={{ fontFamily: 'Roboto-Bold' }}>Roboto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...CommonStyles.screen,
});

export default HomeScreen;
