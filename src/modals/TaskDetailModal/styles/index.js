import { StyleSheet } from 'react-native';
import { Metrics, Colors, CommonStyles } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  modalBg: {
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.semiTransparent
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 10,
    paddingVertical: Metrics.padding_2,
    width: Metrics.screenWidth - Metrics.margin_2 * 2,
    marginHorizontal: Metrics.margin_2,
    marginVertical: Metrics.margin_3,
    backgroundColor: Colors.white,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 10.00,
    elevation: 24,
  },
  sectionPadding: {
    paddingHorizontal: Metrics.padding_2
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 20,
    color: Colors.black
  },
  sectionDivider: {
    marginVertical: Metrics.margin_2,
    borderTopWidth: 0.5,
    borderColor: Colors.blue_grey
  },
  profileImgWrapper: {
    width: 40,
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: Metrics.margin_1 / 2
  },
  profileImg: {
    flex: 1
  },
  createdDate: {
    fontSize: 14,
    ...CommonStyles.fontWeights.w400,
    color: Colors.grey
  },
  profileAndEstimWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  trackerWrapper: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  timeTracked: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeTrackedLabel: {
    ...CommonStyles.fontWeights.w400,
    color: Colors.black,
    fontSize: 16,
    paddingLeft: Metrics.padding_1 / 2
  },
  time: {
    ...CommonStyles.fontWeights.w400,
    color: Colors.royal_blue,
    fontSize: 22,
  },
  taskDesc: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 13,
    color: Colors.grey,
    lineHeight: 22,
    paddingBottom: Metrics.padding_1
  },
  subTaskWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Metrics.padding_1 / 2
  },
  subTask: {
    paddingLeft: Metrics.padding_1,
    ...CommonStyles.fontWeights.w400,
    fontSize: 13,
    color: Colors.grey
  }
});
