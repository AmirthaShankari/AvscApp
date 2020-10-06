import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';
// import { Colors, CommonStyles, Metrics } from '../../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  tab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 80,
    borderRadius: 5,
    backgroundColor: Colors.white,
    marginVertical: Metrics.margin_3,
    marginRight: Metrics.margin_2,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 18.00,
    elevation: 16,
  },
  selectedTab: {
    backgroundColor: Colors.royal_blue,
    shadowColor: Colors.royal_blue,
    shadowOpacity: 0.36,
    elevation: 24
  },
  title: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 14,
    color: Colors.black
  },
  titleSelected: {
    color: Colors.white
  }
});
