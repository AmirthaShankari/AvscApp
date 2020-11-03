// export default App;
import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

// App imports
import { AppContainer } from './src/routes';
import { Provider as AppLoadProvider } from './src/context/AppLoadContext';
import { Provider as AuthProvider } from './src/context/AuthContext';

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  Ionicons.loadFont();
  return (
    <AppLoadProvider>
      <AuthProvider>
        <SafeAreaView
          style={{ flex: 1 }}
        >
          <AppContainer />
        </SafeAreaView>
      </AuthProvider>
    </AppLoadProvider>
  );
};
