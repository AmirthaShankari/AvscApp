// React Imports
import React from 'react';
import {
  View
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

// App Imports
import { log } from '../../utils/logger';
import { Colors } from '../../themes';
import { styles } from './styles';

const ProjectAndTeamSelection = ({
  teams,
  projects,
  selectedTeam,
  selectedProject,
  onTeamSelection,
  onProjectSelection
}) => {
  log.info('Project and team selection component rendered...');
  return (
    (teams.length > 0 && selectedTeam && projects.length > 0 && selectedProject) ? (
      <View style={styles.teamAndProjectWrapper}>
        <View style={styles.selectionItem}>
          <DropDownPicker
            style={styles.pickerStyle}
            items={teams}
            defaultValue={selectedTeam}
            containerStyle={styles.containerStyle}
            labelStyle={[styles.labelStyle, styles.labelStyleRight]}
            arrowColor={Colors.royal_blue}
            onChangeItem={onTeamSelection}
          />
        </View>
        <View style={[styles.selectionItem, styles.selectionItemDivider]}>
          <DropDownPicker
            style={styles.pickerStyle}
            items={projects}
            defaultValue={selectedProject}
            containerStyle={styles.containerStyle}
            labelStyle={[styles.labelStyle, { maxWidth: 70 }]}
            arrowColor={Colors.royal_blue}
            onChangeItem={onProjectSelection}
          />
        </View>
      </View>
    ) : null
  );
};

export default React.memo(ProjectAndTeamSelection);
