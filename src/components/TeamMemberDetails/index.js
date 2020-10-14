/* eslint-disable no-nested-ternary */
// React Imports
import React from 'react';
import {
  View, Text
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

  return (
    (selectedMember) ? (
      <View style={styles.teamMemberDetailsWrapper}>
        <View style={styles.detailWrapper}>
          <Text style={styles.tasksCount}>
            {(tasksList && tasksList.length) ? tasksList.length : 0}
          </Text>
          <Text style={styles.subDetail}>Tasks</Text>
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
