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
    padding: Metrics.padding_2,
    width: Metrics.screenWidth - Metrics.margin_2 * 2,
    marginHorizontal: Metrics.margin_2,
    marginVertical: Metrics.margin_3,
    backgroundColor: Colors.white
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
    borderTopWidth: 1,
    borderColor: Colors.grey_light
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
  }
});
