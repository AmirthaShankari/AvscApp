import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../themes';
// import { Colors, CommonStyles, Metrics } from '../../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Metrics.margin_2,
    marginVertical: Metrics.margin_1,
  },
  display: {
    opacity: 1
  },
  hide: {
    opacity: 0
  },
  logoImg: {
    height: 30,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: Colors.grey_light
  }
});
