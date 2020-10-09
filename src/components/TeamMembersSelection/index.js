/* eslint-disable no-nested-ternary */
// React Imports
import React from 'react';
import {
  View, Image, FlatList, Text, TouchableOpacity
} from 'react-native';

// App Imports
import { log } from '../../utils/logger';
import { styles } from './styles';

const TeamMembersSelection = ({
  teamMembers,
  setMemberSelection,
  selectedMember
}) => {
  log.info('Team members selection component rendered...');

  const renderItem = ({ item, index }) => (
    <View style={[styles.imageWrapperScale, { display: 'flex', alignItems: 'center', justifyContent: 'center' }]}>
      <TouchableOpacity onPress={() => { if (index < 4) { setMemberSelection(item); } }}>
        <View
          style={[styles.imageWrapper,
            (selectedMember && selectedMember.id === item.id) ? styles.imageWrapperScale : null]}
        >
          {(index < 4) ? (
            <Image
              style={{ flex: 1 }}
              source={{
                uri: item.image,
              }}
            />
          ) : ((index === 4) ? (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>
                {`+${(teamMembers.length - 4)}`}
              </Text>
            </View>
          )
            : null)}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    (teamMembers.length > 0) ? (
      <View style={styles.teamMemberSelectionWrapper}>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={teamMembers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

    ) : null
  );
};

export default React.memo(TeamMembersSelection);
