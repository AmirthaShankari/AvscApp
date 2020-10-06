// eslint-disable-next-line import/prefer-default-export
export const AppConstants = {
  ROUTES: {
    APP_LOAD: 'AppLoad',
    LOGIN: 'Login',
    HOME: 'Home',
  },
  LOCAL_STORAGE: {
    AUTH_INFO: 'authInfo'
  },
  CONTEXTS: {
    APP_LOAD: {
      UPDATE: 'update'
    },
    AUTH: {
      CREDS: {
        USER_NAME: 'user',
        PWD: 'user'
      },
      UPDATE_NAME: 'updateName',
      AUTH_ERROR: 'authError'
    }
  },
  SCREENS: {
    HOME_SCREEN: {
      TABS: [
        {
          KEY: 'ALERTS',
          DISPLAY_NAME: 'Alerts',
          ICON: 'notifications-outline',
          DEFAULT: false
        },
        {
          KEY: 'TRAFFIC',
          DISPLAY_NAME: 'Traffic',
          ICON: 'shuffle-outline',
          DEFAULT: false
        },
        {
          KEY: 'TASK',
          DISPLAY_NAME: 'Tasks',
          ICON: 'checkmark-circle-outline',
          DEFAULT: true
        },
        {
          KEY: 'OPTIONS',
          DISPLAY_NAME: 'Options',
          ICON: 'options-outline',
          DEFAULT: false
        },
        {
          KEY: 'BUGS',
          DISPLAY_NAME: 'Bugs',
          ICON: 'bug-outline',
          DEFAULT: false
        },
      ]
    }
  }
};
