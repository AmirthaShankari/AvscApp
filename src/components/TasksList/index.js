/* eslint-disable no-nested-ternary */
// React Imports
import React, { useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  LogBox
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { log } from '../../utils/logger';
import { styles } from './styles';
import { TaskDetailModal } from '../../modals';
import { Colors } from '../../themes';
import { AppMessages } from '../../constants/AppMessages';

const APP_MSG = AppMessages.COMPONENTS.TASKS_LIST;

const TasksList = ({
  selectedMember,
  tasksList
}) => {
  log.info('tasks list component rendered...', tasksList);

  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested',
  ]);

  // State Declarations
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');

  const renderProfiles = ({ item }) => (
    <View style={styles.profileImgWrapper}>
      <Image
        style={styles.profileImg}
        source={{
          uri: item.image,
        }}
      />
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onLongPress={() => { setSelectedTask(item); setModalVisible(true); }}
      style={styles.taskWrapper}
    >
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.textStyle}>{item.shortDate}</Text>
      </View>
      <View>
        <Text style={styles.desc}>
          {item.description}
        </Text>
      </View>
      <View style={styles.statusAndProfilesWrapper}>
        <View style={styles.statusWrapper}>
          <Icon name="chatbubble-outline" size={20} color={Colors.green} />
          <Text style={[styles.statusPadding, styles.textStyle]}>{item.comments}</Text>
          <Icon style={styles.statusPadding} name="list-outline" size={20} color={Colors.orange} />
          <Text style={[styles.statusPadding, styles.textStyle]}>{`${item.completedTasks}/${item.totalSubTasks}`}</Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled
            data={item.profiles}
            renderItem={renderProfiles}
            keyExtractor={(profile) => profile.id}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    (selectedMember) ? (
      (tasksList.length > 0) ? (
        <View style={{ zIndex: 1 }}>
          <FlatList
            scrollEnabled
            showsVerticalScrollIndicator={false}
            data={tasksList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          {(modalVisible && selectedTask) ? (
            <TaskDetailModal
              task={selectedTask}
              modalVisible={modalVisible}
              modalDismiss={() => { setModalVisible(false); setSelectedTask(''); }}
            />
          )
            : null}
        </View>
      )
        : (
          <Text style={styles.noTasks}>{APP_MSG.NO_TASKS}</Text>
        )
    ) : null
  );
};

export default React.memo(TasksList);
