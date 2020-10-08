// eslint-disable-next-line import/prefer-default-export
export const AppConstants = {
  ROUTES: {
    APP_LOAD: 'AppLoad',
    LOGIN: 'Login',
    HOME: 'Home',
    HOME_TABS: {
      ALERTS: {
        ROUTE: 'Alerts',
        DISPLAY_NAME: 'Alerts',
        ICON: 'notifications-outline',
      },
      TRAFFIC: {
        ROUTE: 'Traffic',
        DISPLAY_NAME: 'Traffic',
        ICON: 'shuffle-outline',
      },
      TASK: {
        ROUTE: 'Task',
        DISPLAY_NAME: 'Tasks',
        ICON: 'checkmark-circle-outline',
      },
      OPTIONS: {
        ROUTE: 'Option',
        DISPLAY_NAME: 'Options',
        ICON: 'options-outline',
      },
      BUGS: {
        ROUTE: 'Bug',
        DISPLAY_NAME: 'Bugs',
        ICON: 'bug-outline',
      },
    }
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
  COMPONENTS: {

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
