// eslint-disable-next-line import/prefer-default-export
export const AppConstants = {
  ROUTES: {
    APP_LOAD: 'AppLoad',
    LOGIN: 'Login',
    HOME: 'Home',
    USER_PROFILE: 'UserProfile',
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
      AUTH_ERROR: 'authError',
      SIGN_OUT: 'signout'
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
  },
  DATA: {
    PROJECTS_AND_TEAMS: [{
      project: 'Project X',
      id: 'Proj1',
      teams: [
        {
          id: 'T1',
          name: 'Design Team',
          members: [
            {
              id: 'M2',
              name: 'Julie',
              role: 'UX Designer',
              image:
                'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
            },
            {
              id: 'M4',
              name: 'Tim',
              role: 'UX Designer',
              image:
                'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
            },
            {
              id: 'M5',
              name: 'Jake Gyllenhal',
              role: 'UX Designer',
              image:
                'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
            },
            {
              id: 'M6',
              name: 'Julie',
              role: 'UX Designer',
              image:
                'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
            },
            {
              id: 'M1',
              name: 'Sara',
              role: 'UX Designer',
              image:
                'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            },
            {
              id: 'M3',
              name: 'Jake Gyllenhal',
              role: 'UX Designer',
              image:
                'https://charlotteknee.com/photography/wp-content/uploads/2015/04/Professional-Profile-Photograph-Corporate-Headshot-copyright-Charlotte-Knee-Photography_00021.jpg',
            },
          ]
        },
        {
          id: 'T2',
          name: 'Dev Team',
          members: [
            {
              id: 'M8',
              name: 'Sophia',
              role: 'Developer',
              image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            },

            {
              id: 'M9',
              name: 'Jacob Gyllenhal',
              role: 'Developer',
              image:
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
            },
            {
              id: 'M10',
              name: 'Jane',
              role: 'Developer',
              image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            },
            {
              id: 'M11',
              name: 'Tony',
              role: 'Developer',
              image:
                'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            },
            {
              id: 'M12',
              name: 'Jake Gyllenhal',
              role: 'Developer',
              image:
                'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
            },
            {
              id: 'M13',
              name: 'Julie',
              role: 'Developer',
              image:
                'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
            }
          ]
        }
      ]
    },
    {
      project: 'Project Y',
      id: 'Proj2',
      teams: [
        {
          id: 'T3',
          name: 'Design Team',
          members: [
            {
              id: 'M1',
              name: 'Sara',
              role: 'UX Designer',
              image:
                'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            },
            {
              id: 'M3',
              name: 'Jake Gyllenhal',
              role: 'UX Designer',
              image:
                'https://charlotteknee.com/photography/wp-content/uploads/2015/04/Professional-Profile-Photograph-Corporate-Headshot-copyright-Charlotte-Knee-Photography_00021.jpg',
            },
            {
              id: 'M2',
              name: 'Julie',
              role: 'UX Designer',
              image:
                'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
            },
            {
              id: 'M4',
              name: 'Tim',
              role: 'UX Designer',
              image:
                'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
            },
            {
              id: 'M5',
              name: 'Jake Gyllenhal',
              role: 'UX Designer',
              image:
                'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
            },
            {
              id: 'M6',
              name: 'Julie',
              role: 'UX Designer',
              image:
                'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
            }
          ]
        },
        {
          id: 'T4',
          name: 'Dev Team',
          members: [
            {
              id: 'M8',
              name: 'Sophia',
              role: 'Developer',
              image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            },

            {
              id: 'M9',
              name: 'Jacob Gyllenhal',
              role: 'Developer',
              image:
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
            },
            {
              id: 'M10',
              name: 'Jane',
              role: 'Developer',
              image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            },
            {
              id: 'M11',
              name: 'Tony',
              role: 'Developer',
              image:
                'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            },
            {
              id: 'M12',
              name: 'Jake Gyllenhal',
              role: 'Developer',
              image:
                'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
            },
            {
              id: 'M13',
              name: 'Julie',
              role: 'Developer',
              image:
                'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
            }
          ]
        }
      ]
    }],
    TASKS: [
      {
        id: 'Task1',
        project: 'Proj1',
        title: 'Product Page UX research',
        createdDate: 'July 1, 2016 9:43 AM',
        timeTracked: {
          hours: 12,
          min: 46,
        },
        description:
          'Attending a trade show can be a very effective method of promoting your company and its products. And one of the most effective ways to optimize your trade show display and increase traffic to your booth is through the use of banner stands.',
        comments: 2,
        subTasks: [
          {
            title: 'Competition analysis',
            done: true,
          },
          {
            title: 'Wireframe review',
            done: true,
          },
          {
            title: 'Sumup meeting',
            done: false,
          },
          {
            title: 'Render design',
            done: false,
          },
        ],
        profiles: [
          {
            id: 'M2',
            name: 'Julie',
            role: 'UX Designer',
            image:
              'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
          },
          {
            id: 'M4',
            name: 'Tim',
            role: 'UX Designer',
            image:
              'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
          }
        ],
      },
      {
        id: 'Task2',
        project: 'Proj1',
        title: 'Product Page UX research',
        createdDate: 'July 1, 2016 9:43 AM',
        timeTracked: {
          hours: 12,
          min: 46,
        },
        description:
          'Attending a trade show can be a very effective method of promoting your company and its products. And one of the most effective ways to optimize your trade show display and increase traffic to your booth is through the use of banner stands.',
        comments: 2,
        subTasks: [
          {
            title: 'Competition analysis',
            done: true,
          },
          {
            title: 'Wireframe review',
            done: true,
          },
          {
            title: 'Sumup meeting',
            done: false,
          },
          {
            title: 'Render design',
            done: false,
          },
        ],
        profiles: [
          {
            id: 'M2',
            name: 'Julie',
            role: 'UX Designer',
            image:
              'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
          },
          {
            id: 'M4',
            name: 'Tim',
            role: 'UX Designer',
            image:
              'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
          },
          {
            id: 'M5',
            name: 'Jake Gyllenhal',
            role: 'UX Designer',
            image:
              'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
          },
        ],
      },
      {
        id: 'Task3',
        project: 'Proj1',
        title: 'Product Page UX research 1',
        createdDate: 'July 1, 2016 9:43 AM',
        timeTracked: {
          hours: 12,
          min: 46,
        },
        description:
          'Attending a trade show can be a very effective method of promoting your company and its products. And one of the most effective ways to optimize your trade show display and increase traffic to your booth is through the use of banner stands.',
        comments: 2,
        subTasks: [
          {
            title: 'Competition analysis',
            done: true,
          },
          {
            title: 'Wireframe review',
            done: true,
          },
          {
            title: 'Sumup meeting',
            done: false,
          },
          {
            title: 'Render design',
            done: false,
          },
        ],
        profiles: [
          {
            id: 'M2',
            name: 'Julie',
            role: 'UX Designer',
            image:
              'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg',
          },
          {
            id: 'M4',
            name: 'Tim',
            role: 'UX Designer',
            image:
              'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
          },
          {
            id: 'M5',
            name: 'Jake Gyllenhal',
            role: 'UX Designer',
            image:
              'https://chriskeeney.com/wp-content/uploads/2016/06/la-jolla-busniess-portrait-photography-square.jpg',
          },
        ],
      },
      {
        id: '4',
        project: 'Proj2',
        title: 'Product Page UX research',
        createdDate: 'July 1, 2016 9:43 AM',
        timeTracked: {
          hours: 12,
          min: 46,
        },
        description:
          'Attending a trade show can be a very effective method of promoting your company and its products. And one of the most effective ways to optimize your trade show display and increase traffic to your booth is through the use of banner stands.',
        comments: 2,
        subTasks: [
          {
            title: 'Competition analysis',
            done: true,
          },
          {
            title: 'Wireframe review',
            done: true,
          },
          {
            title: 'Sumup meeting',
            done: false,
          },
          {
            title: 'Render design',
            done: false,
          },
        ],
        profiles: [
          {
            id: 'M1',
            name: 'Sara',
            role: 'UX Designer',
            image:
              'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          },
          {
            id: 'M3',
            name: 'Jake Gyllenhal',
            role: 'UX Designer',
            image:
              'https://charlotteknee.com/photography/wp-content/uploads/2015/04/Professional-Profile-Photograph-Corporate-Headshot-copyright-Charlotte-Knee-Photography_00021.jpg',
          },
        ],
      },
    ]
  }
};
