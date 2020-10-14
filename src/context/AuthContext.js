// Library Imports
import AsyncStorage from '@react-native-community/async-storage';

// App Imports
import CreateContext from './CreateContext';
import { AppConstants } from '../constants/AppConstants';
import { log } from '../utils/logger';
import { AppMessages } from '../constants/AppMessages';

// Constants Declaration
const APP_CONST = AppConstants.CONTEXTS.AUTH;
const APP_MSG = AppMessages.CONTEXTS.AUTH_CONTEXT;

const authReducer = (state, action) => {
  switch (action.type) {
    case APP_CONST.SIGN_IN:
      return {
        ...state, authErr: '', authName: action.payload.userName, role: action.payload.role
      };
    case APP_CONST.AUTH_ERROR:
      return { ...state, authErr: action.payload };
    case APP_CONST.SIGN_OUT:
      return { ...state, authName: '', role: '' };
    default:
      return { ...state };
  }
};

// Function to signIn the user
const signIn = (dispatch) => async (userName, password) => {
  try {
    dispatch({ type: APP_CONST.AUTH_ERROR, payload: '' });
    if (!userName || !password) {
      dispatch({ type: APP_CONST.AUTH_ERROR, payload: APP_MSG.FIELDS_REQUIRED });
    } else if (userName === APP_CONST.CREDS.USER_PROFILE.USER_NAME
      && password === APP_CONST.CREDS.USER_PROFILE.PWD) {
      log.info('updating logged in username....');
      const authInfo = { userName, role: APP_CONST.CREDS.USER_PROFILE.ROLE };
      await AsyncStorage.setItem(AppConstants.LOCAL_STORAGE.AUTH_INFO, JSON.stringify(authInfo));
      dispatch({ type: APP_CONST.SIGN_IN, payload: authInfo });
    } else if (userName === APP_CONST.CREDS.CLIENT_PROFILE.USER_NAME
      && password === APP_CONST.CREDS.CLIENT_PROFILE.PWD) {
      const authInfo = { userName, role: APP_CONST.CREDS.CLIENT_PROFILE.ROLE };
      await AsyncStorage.setItem(AppConstants.LOCAL_STORAGE.AUTH_INFO, JSON.stringify(authInfo));
      dispatch({ type: APP_CONST.SIGN_IN, payload: authInfo });
    } else {
      dispatch({ type: APP_CONST.AUTH_ERROR, payload: APP_MSG.INVALID_CRED });
    }
  } catch (err) {
    log.err('Error while updating logged in username');
    dispatch({ type: APP_CONST.AUTH_ERROR, payload: APP_MSG.SOMETHING_WENT_WRONG });
  }
};

// Function to auto signIn the user
const autoSignIn = (dispatch) => async () => {
  try {
    let authInfo = await AsyncStorage.getItem(AppConstants.LOCAL_STORAGE.AUTH_INFO);
    if (authInfo) {
      authInfo = JSON.parse(authInfo);
      dispatch(
        { type: APP_CONST.SIGN_IN, payload: { userName: authInfo.userName, role: authInfo.role } }
      );
    }
  } catch (err) {
    log.err('Error in auto sign in...');
  }
};

// Function to signOut the user
const signOut = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem(AppConstants.LOCAL_STORAGE.AUTH_INFO);
    dispatch({ type: APP_CONST.SIGN_OUT });
  } catch (err) {
    log.err('Error while performing sign out');
  }
};

export const { Context, Provider } = CreateContext(
  authReducer,
  { authName: '', role: '', authErr: '' },
  { signIn, autoSignIn, signOut }
);
