import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../themes';
// import { Colors, CommonStyles, Metrics } from '../../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  teamMemberSelectionWrapper: {
    paddingHorizontal: Metrics.padding_2,
    paddingVertical: Metrics.padding_3
  },
  imageWrapper: {
    width: (Metrics.screenWidth - 100) * 0.2,
    height: (Metrics.screenWidth - 100) * 0.2,
    backgroundColor: Colors.grey_light,
    borderRadius: 5,
    overflow: 'hidden'
  },
  imageWrapperScale: {
    width: (Metrics.screenWidth - 100) * 0.24,
    height: (Metrics.screenWidth - 100) * 0.24,
    borderRadius: 5,
    overflow: 'hidden'
  }
});
