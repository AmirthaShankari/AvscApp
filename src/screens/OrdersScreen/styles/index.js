import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  ...CommonStyles.screen,
  ordersScreenWrapper: {
    flex: 1,
    display: 'flex',
  },
  inlineLoader: {
    ...CommonStyles.loader.inlineLoader
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
  },
  orderInsightWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: Colors.blue_grey,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingHorizontal: Metrics.padding_2
  },
  ordersInsight: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: Metrics.padding_1,
    paddingVertical: Metrics.padding_1 * 1.5
  },
  ordersCountWrapper: {
    flex: 1,
  },
  activeDaysWrapper: {
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    paddingHorizontal: Metrics.padding_2,
    borderColor: Colors.blue_grey
  },
  ratingWrapper: {
    flex: 1,
  },
  orderInsightVal: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 22,
    color: Colors.black
  },
  orderInsightLabel: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 14,
    color: Colors.black
  },
  orderCard: {
    width: Metrics.screenWidth - (Metrics.padding_2 * 2),
    height: Metrics.screenHeight * 0.5,
    backgroundColor: Colors.blue_grey,
    paddingVertical: Metrics.padding_2,
    margin: Metrics.margin_2,
    borderRadius: 10,
    overflow: 'hidden'
  },
  orderCardHeader: {
    paddingHorizontal: Metrics.padding_2,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  cardHeaderLabel: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 14,
    color: Colors.white
  },
  orderNumber: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 18,
    color: Colors.white
  },
  statusWrapper: {
    flex: 1,
    display: 'flex',
  },
  orderStatus: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 18,
    color: Colors.green
  },
  logo: {
    flex: 1
  },
  cardSectionSeparator: {
    borderTopWidth: 0.5,
    borderColor: Colors.white,
    marginVertical: Metrics.margin_2
  },
  items: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 16,
    color: Colors.white,
    paddingBottom: Metrics.padding_1 * 0.5
  },
  cardHeading: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 18,
    color: Colors.white,
    paddingBottom: Metrics.padding_1
  },
  itemsSummaryWrapper: {
    paddingHorizontal: Metrics.padding_2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  totals: {
    ...CommonStyles.fontWeights.w700,
    fontSize: 24,
    color: Colors.white,
  },
  addrAndTracking: {
    paddingHorizontal: Metrics.padding_2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  }
});
