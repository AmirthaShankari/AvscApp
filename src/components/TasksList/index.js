/* eslint-disable no-nested-ternary */
// React Imports
import React from 'react';
import {
  View, Text, FlatList, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../themes';

// App Imports
import { log } from '../../utils/logger';
import { styles } from './styles';

const TasksList = ({
  selectedMember,
  tasksList
}) => {
  log.info('tasks list component rendered...', tasksList);

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
    <View style={styles.taskWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.shortDate}</Text>
      </View>
      <View>
        <Text style={styles.desc}>
          {item.description}
        </Text>
      </View>
      <View style={styles.statusAndProfilesWrapper}>
        <View style={styles.statusWrapper}>
          <Icon name="chatbubble-outline" size={20} color={Colors.green} />
          <Text style={styles.statusPadding}>{item.comments}</Text>
          <Icon style={styles.statusPadding} name="list-outline" size={20} color={Colors.orange} />
          <Text style={styles.statusPadding}>{`${item.completedTasks}/${item.totalSubTasks}`}</Text>
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
    </View>
  );

  return (
    (selectedMember && tasksList.length > 0) ? (
      <View style={{ zIndex: 1 }}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 700 }}
          automaticallyAdjustContentInsets
          data={tasksList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

    ) : <Text>Noting to render</Text>
  );
};

export default React.memo(TasksList);
