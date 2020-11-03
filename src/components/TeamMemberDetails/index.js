/* eslint-disable no-nested-ternary */
// React Imports
import React, { useEffect, useState } from 'react';
import {
  View, Text, Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { log } from '../../utils/logger';
import { styles } from './styles';
import { Colors } from '../../themes';

const TeamMemberDetails = ({
  selectedMember,
  tasksList
}) => {
  log.info('Team members details component rendered...');
  const opacity = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, [tasksList]);

  return (
    (selectedMember) ? (
      <View style={[styles.teamMemberDetailsWrapper]}>
        <View style={[styles.detailWrapper, ((tasksList && tasksList.length)) ? { opacity: 1 } : { opacity: 0 }]}>
          <Animated.Text style={[styles.tasksCount, { opacity }]}>
            {(tasksList && tasksList.length) ? tasksList.length : 0}
          </Animated.Text>
          <Animated.Text style={[styles.subDetail, { opacity }]}>Tasks</Animated.Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.memberName}>
            {selectedMember.name}
          </Text>
          <Text style={styles.subDetail}>
            {selectedMember.role}
          </Text>
        </View>
        <View style={styles.detailWrapper}>
          <Icon
            name="add-circle-outline"
            size={50}
            color={Colors.green}
          />
        </View>
      </View>
    ) : null
  );
};

export default React.memo(TeamMemberDetails);
