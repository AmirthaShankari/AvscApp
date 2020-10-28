import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  ...CommonStyles.screen,
  inlineLoader: {
    ...CommonStyles.loader.inlineLoader
  },
  mainContainerStack: {
    position: 'relative',
    zIndex: 0
  },
  headerWrapper: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0
  },
  vendorProfileWrapper: {
    flex: 1,
    paddingLeft: Metrics.padding_3 * 2,
    paddingTop: Metrics.padding_3
  },
  imageWrapper: {
    width: Metrics.screenWidth * 0.4,
    minHeight: 100,
    backgroundColor: Colors.blue_grey,
    padding: Metrics.padding_2,
    borderRadius: 5,
    marginRight: Metrics.margin_2
  },
  contractsAndMeetingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Metrics.padding_2,
    paddingRight: Metrics.padding_2,
    borderTopWidth: 0.5,
    borderColor: Colors.blue_grey
  },
  contractWrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end'
  },
  imageAndStatusWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  statusWrapper: {
    width: Metrics.screenWidth * 0.4,
    display: 'flex',
    alignItems: 'flex-end',
    padding: Metrics.padding_2,
    paddingTop: 0,
  },
  count: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 22,
    color: Colors.black,
  },
  labels: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 16,
    color: Colors.black,
    paddingBottom: Metrics.padding_1 / 2
  },
  content: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 14,
    color: Colors.black,
    paddingBottom: Metrics.padding_1 / 2
  },
  location: {
    paddingTop: Metrics.padding_2,
    paddingBottom: Metrics.padding_2
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
    textAlign: 'center',
    paddingVertical: Metrics.padding_3
  }
});
