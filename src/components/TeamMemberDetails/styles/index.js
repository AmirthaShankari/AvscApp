import { StyleSheet } from 'react-native';
import { CommonStyles, Metrics, Colors } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  teamMemberDetailsWrapper: {
    padding: Metrics.padding_1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  detailWrapper: {
    paddingHorizontal: Metrics.padding_1,
    display: 'flex',
    alignItems: 'center'
  },
  tasksCount: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 24,
    color: Colors.black
  },
  subDetail: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 14,
    color: Colors.black
  },
  memberName: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 24,
    color: Colors.black
  }
});
