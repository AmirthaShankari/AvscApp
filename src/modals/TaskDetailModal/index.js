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
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{task.title}</Text>
              <Icon
                name="chatbubble-outline"
                size={30}
                color={Colors.grey}
              />
            </View>
            <Text>on some date time</Text>
            <View style={styles.sectionDivider} />
            <View style={styles.profileAndEstimWrapper}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled
                data={task.profiles}
                renderItem={renderProfiles}
                keyExtractor={(profile) => profile.id}
              />
              <View />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default React.memo(TaskDetailModal);
