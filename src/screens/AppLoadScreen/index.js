// React Imports
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext } from 'react';

// Context Imports
import { Context as AppLoadContext } from '../../context/AppLoadContext';

// App Imports
import { log } from '../../utils/logger';

const AppLoadScreen = () => {
  log.info('App load screen initialized!');

  const { updateAppLoadFlag } = useContext(AppLoadContext);

  useEffect(() => {
    const appLoad = async () => {
      try {
        log.info('Getting stored cart');
        // await getStoredCart();
        log.info('Setting app load flag to true');
        updateAppLoadFlag(true);
      } catch (err) {
        log.error('Error in app load screen', err);
      }
    };
    appLoad();
  }, []);
  return null;
};

export default AppLoadScreen;
