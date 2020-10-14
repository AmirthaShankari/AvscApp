import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  ...CommonStyles.screen,
  userProfileWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  underConstruct: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 20,
    color: Colors.grey_light,
    paddingVertical: Metrics.padding_3,
    textAlign: 'center'
  },
  signOut: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 18,
    color: Colors.royal_blue,
    textAlign: 'center'
  }
});
