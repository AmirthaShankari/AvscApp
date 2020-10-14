import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  ...CommonStyles.screen,
  ordersScreenWrapper: {
    flex: 1,
  },
  userDetail: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrics.padding_3
  },
  userName: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 24,
    flex: 1,
    color: Colors.black,
    textAlign: 'center'
  }
});
