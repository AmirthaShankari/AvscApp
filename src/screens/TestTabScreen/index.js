// React Imports
import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

// App Imports

// Components Import
import { HomeTabBar } from '../../components';

const TestTabScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <HomeTabBar />
    </View>
    <View style={styles.childContainer}>
      <Text style={{ fontSize: 30 }}>I am test</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    flexDirection: 'column'
  },
  childContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100
  },
  header: {
    backgroundColor: 'cyan',
    width: '100%',
    height: '15%'
  }
});

export default TestTabScreen;
