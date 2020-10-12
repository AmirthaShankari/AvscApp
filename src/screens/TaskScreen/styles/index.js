import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  taskScreenContainer: {
    ...CommonStyles.screen.mainContainer
  },
  teamAndProjectWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grey_light
  },
  selectionItem: {
    flex: 1,
    paddingHorizontal: Metrics.padding_1,
    paddingVertical: Metrics.padding_1
  },
  selectionItemDivider: {
    borderLeftWidth: 1,
    borderColor: Colors.grey_light
  },
  pickerStyle: { borderWidth: 0 },
  containerStyle: { height: 40 },
  itemStyle: {
    ...CommonStyles.fontWeights.w400,
    color: Colors.black
  },
  itemStyleRight: {
    justifyContent: 'flex-end',
  },
  labelStyle: {
    ...CommonStyles.fontWeights.w400,
    color: Colors.black
  },
  labelStyleRight: {
    textAlign: 'right',
  },
  inlineLoader: {
    ...CommonStyles.loader.inlineLoader
  },
  projectInfoWrapper: {
    position: 'relative',
    zIndex: 0
  }
});
