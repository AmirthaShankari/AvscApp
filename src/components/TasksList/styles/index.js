import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  extraPadding: {
    paddingBottom: Metrics.padding_3 * 15
  },
  taskWrapper: {
    padding: Metrics.padding_2,
    margin: Metrics.margin_2,
    backgroundColor: Colors.white,
    marginBottom: 0,
    borderRadius: 5,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 10.00,
    elevation: 24,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: Metrics.padding_2,
    maxHeight: 300,
  },
  title: {
    ...CommonStyles.heading.h5,
    color: Colors.black
  },
  desc: {
    fontSize: 13,
    ...CommonStyles.fontWeights.w400,
    color: Colors.grey,
    lineHeight: 20
  },
  statusAndProfilesWrapper: {
    paddingTop: Metrics.padding_2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  statusPadding: {
    padding: Metrics.padding_1 / 2
  },
  statusWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImgWrapper: {
    width: 30,
    height: 30,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: Metrics.margin_1 / 2
  },
  profileImg: {
    flex: 1
  }
});
