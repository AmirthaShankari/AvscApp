/* eslint-disable no-nested-ternary */
// React Imports
import React from 'react';
import {
  View, Text, Modal, TouchableWithoutFeedback, FlatList, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { log } from '../../utils/logger';
import { styles } from './styles';
import { Colors } from '../../themes';

const TaskDetailModal = ({
  task,
  modalVisible,
  modalDismiss
}) => {
  log.info('Team detail modal rendered...');

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

  const renderSubTasks = ({ item }) => (
    <View style={styles.subTaskWrapper}>
      <Icon
        name={(item.done) ? 'checkmark-circle-outline' : 'ellipse-outline'}
        size={30}
        color={(item.done) ? Colors.green : Colors.blue_grey}
      />
      <Text style={styles.subTask}>{item.title}</Text>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => modalDismiss()}
    >
      <TouchableWithoutFeedback onPress={() => modalDismiss()}>
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <View style={styles.sectionPadding}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>{task.title}</Text>
                <Icon
                  name="ellipsis-horizontal-outline"
                  size={30}
                  color={Colors.blue_grey}
                />
              </View>
              <Text style={styles.createdDate}>{`on ${task.createdDate}`}</Text>
            </View>
            <View style={styles.sectionDivider} />
            <View style={[styles.profileAndEstimWrapper, styles.sectionPadding]}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled
                data={task.profiles}
                renderItem={renderProfiles}
                keyExtractor={(profile) => profile.id}
              />
              <View style={styles.trackerWrapper}>
                <View style={styles.timeTracked}>
                  <Icon
                    name="time-outline"
                    size={20}
                    color={Colors.blue_grey}
                  />
                  <Text style={styles.timeTrackedLabel}>Time Tracked:</Text>
                </View>
                <Text style={styles.time}>{`${task.timeTracked.hours}:${task.timeTracked.min}h`}</Text>
              </View>
            </View>
            <View style={styles.sectionDivider} />
            <Text style={[styles.taskDesc, styles.sectionPadding]}>
              {task.description}
            </Text>
            <View style={styles.sectionDivider} />
            <View style={styles.sectionPadding}>
              <FlatList
                scrollEnabled
                data={task.subTasks}
                renderItem={renderSubTasks}
                keyExtractor={(subTask) => subTask.title}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default React.memo(TaskDetailModal);
