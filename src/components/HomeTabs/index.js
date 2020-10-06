// React Imports
import React from 'react';
import {
  View, TouchableOpacity, FlatList, Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { styles } from './styles';
import { log } from '../../utils/logger';
import { Colors } from '../../themes';

const HomeTabs = ({ tabs, selectedTab, updateTabSelection }) => {
  log.info('Home Tabs component rendered...');

  const renderItem = ({ item }) => {
    const selected = selectedTab === item.KEY;
    return (
      <TouchableOpacity onPress={() => updateTabSelection(item.KEY)}>
        <View style={[styles.tab, selected ? styles.selectedTab : '']}>
          <Icon name={item.ICON} size={30} color={selected ? Colors.white : Colors.grey} />
          <Text style={[styles.title, selected ? styles.titleSelected : '']}>
            {item.DISPLAY_NAME}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabs}
        renderItem={renderItem}
        keyExtractor={(item) => item.KEY}
      />
    </View>
  );
};

export default React.memo(HomeTabs);
