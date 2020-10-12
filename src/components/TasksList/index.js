/* eslint-disable no-nested-ternary */
// React Imports
import React, { useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TaskDetailModal } from '../../modals';
import { Colors } from '../../themes';

// App Imports
import { log } from '../../utils/logger';
import { styles } from './styles';

const TasksList = ({
  selectedMember,
  tasksList
}) => {
  log.info('tasks list component rendered...', tasksList);

  // State Declarations
  const [modalVisible, setModalVisible] = useState(false);

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
    <TouchableOpacity onLongPress={() => setModalVisible(true)} style={styles.taskWrapper}>
      <TaskDetailModal
        task={item}
        modalVisible={modalVisible}
        modalDismiss={() => setModalVisible(false)}
      />
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
    (selectedMember && tasksList.length > 0) ? (
      <View style={{ zIndex: 1 }}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          data={tasksList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

    ) : <Text>Noting to render</Text>
  );
};

export default React.memo(TasksList);
