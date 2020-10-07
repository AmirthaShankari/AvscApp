import { StyleSheet } from 'react-native';

import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  ...CommonStyles.screen,
  tabContent: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grey_light,
  }
});
