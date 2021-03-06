import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  teamAndProjectWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grey_light,
    zIndex: 1
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
  }
});
