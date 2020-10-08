// React Imports
import React, { useState } from 'react';
import {
  View
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

// App Imports
import { styles } from './styles';
import { log } from '../../utils/logger';
import { Colors } from '../../themes';

const TaskScreen = () => {
  log.info('Task Tab component rendered...');

  // State Declarations
  const [selectedTeam, setSelectedTeam] = useState('DesignTeam');
  const [selectedProject, setSelectedProject] = useState('ProjectX');

  return (
    <View>
      <View style={styles.teamAndProjectWrapper}>
        <View style={styles.selectionItem}>
          <DropDownPicker
            style={styles.pickerStyle}
            items={[
              { label: 'Design Team', value: 'DesignTeam' },
              { label: 'Development Team', value: 'DevTeam' },
            ]}
            defaultValue={selectedTeam}
            containerStyle={styles.containerStyle}
            labelStyle={[styles.labelStyle, styles.labelStyleRight]}
            arrowColor={Colors.royal_blue}
            onChangeItem={(item) => setSelectedTeam(item.value)}
          />
        </View>
        <View style={[styles.selectionItem, styles.selectionItemDivider]}>
          <DropDownPicker
            style={styles.pickerStyle}
            items={[
              { label: 'Project X', value: 'ProjectX' },
              { label: 'Project Y', value: 'ProjectY' },
            ]}
            defaultValue={selectedProject}
            containerStyle={styles.containerStyle}
            labelStyle={[styles.labelStyle, { maxWidth: 70 }]}
            arrowColor={Colors.royal_blue}
            onChangeItem={(item) => { setSelectedProject(item.value); }}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(TaskScreen);
