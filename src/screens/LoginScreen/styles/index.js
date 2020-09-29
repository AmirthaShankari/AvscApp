import { StyleSheet } from 'react-native';
import { Colors, CommonStyles, Metrics } from '../../../themes';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  ...CommonStyles.screen,
  loginScreen: {
    height: Metrics.screenHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImg: {
    height: 60,
  },
  loginFormWrapper: {
    width: Metrics.screenWidth * 0.8,
    paddingTop: Metrics.padding_3 * 3
  },
  loginButton: {
    height: 60,
    backgroundColor: Colors.royal_blue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: Metrics.margin_2
  },
  loginButtonText: {
    ...CommonStyles.fontWeights.w500,
    color: Colors.white,
    fontSize: 20,
  },
  errorMsg: {
    ...CommonStyles.fontWeights.w400,
    fontSize: 16,
    color: Colors.red,
    paddingVertical: Metrics.padding_1
  },
  forgotPwdWrapper: {
    marginTop: Metrics.margin_3
  },
  forgotPwdText: {
    ...CommonStyles.fontWeights.w500,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.black
  }
});
