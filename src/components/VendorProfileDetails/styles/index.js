import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  vendorProfileWrapper: {
    paddingLeft: Metrics.padding_3 * 2,
    paddingTop: Metrics.padding_3
  },
  imageWrapper: {
    width: Metrics.screenWidth * 0.4,
    minHeight: 100,
    backgroundColor: Colors.blue_grey_light,
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
  nameAndPositionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Metrics.margin_2,
    borderBottomWidth: 1,
    borderColor: Colors.grey_light,
    paddingBottom: Metrics.padding_2,
    paddingRight: Metrics.padding_2
  },
  vendorName: {
    ...CommonStyles.fontWeights.w300,
    fontSize: 34,
    color: Colors.black,
    paddingVertical: Metrics.padding_1
  },
  currentMonthStatsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingVertical: Metrics.padding_2
  },
  efficiencyNotesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Metrics.padding_2
  },
  notesWrapper: {
    width: Metrics.screenWidth * 0.4,
    alignItems: 'flex-end',
    paddingRight: Metrics.padding_2
  },
  donutChart: {
    width: 175,
    alignItems: 'center'
  },
  note: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 14,
    textAlign: 'right',
    color: Colors.black,
    paddingVertical: Metrics.padding_1
  },
  statsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsCount: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 16,
    color: Colors.royal_blue,
    paddingBottom: Metrics.padding_1 / 2,
    width: 50
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    ...CommonStyles.fontWeights.w500,
    fontSize: 30,
    color: Colors.royal_blue,
  }
});
