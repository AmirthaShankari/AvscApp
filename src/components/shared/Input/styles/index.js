import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: Colors.blue_grey,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: Metrics.margin_1
  },
  input: {
    height: 60,
    textAlign: 'center',
    color: Colors.black,
    fontSize: 20,
    ...CommonStyles.fontWeights.w400
  }

});
