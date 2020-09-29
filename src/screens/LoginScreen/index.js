// React Imports
import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView, Keyboard, StatusBar
} from 'react-native';

// App Imports
import { AppMessages } from '../../constants/AppMessages';
import { AppStrings } from '../../constants/AppStrings';
import { styles } from './styles';
import { log } from '../../utils/logger';
import { logo } from '../../assets/images';

// Components Import
import { Input } from '../../components';

const APP_MESSAGES = AppMessages.SCREENS.LOGIN;
const APP_STRINGS = AppStrings.SCREENS.LOGIN;

const LoginScreen = () => {
  log.info('Login Screen!!');

  // Setting Login States
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = (name, pwd) => {
    Keyboard.dismiss();
    setError('');
    if (!name || !pwd) {
      setError(APP_MESSAGES.FIELDS_REQUIRED);
    } else if (name === 'user' && pwd === 'user') {
      log.info('login success navigate to home screen....');
    } else {
      setError(APP_MESSAGES.INVALID_CRED);
    }
  };

  return (
    <ScrollView bounces={false}>
      <StatusBar translucent />
      <View style={[styles.mainContainer, styles.loginScreen]}>
        <Image
          style={styles.logoImg}
          source={logo}
          resizeMode="contain"
        />
        <View style={styles.loginFormWrapper}>
          <Input
            placeholder="Username"
            onChangeText={(text) => { setError(''); setUserName(text); }}
            value={userName}
          />
          <Input
            placeholder="Password"
            onChangeText={(text) => { setError(''); setPassword(text); }}
            value={password}
            secureTextEntry
          />
          {(error) ? <Text style={styles.errorMsg}>{error}</Text> : null}
          <TouchableOpacity style={styles.loginButton} onPress={() => login(userName, password)}>
            <Text style={styles.loginButtonText}>
              {APP_STRINGS.LOGIN_BUTTON}
            </Text>
          </TouchableOpacity>
          <View style={styles.forgotPwdWrapper}>
            <Text style={styles.forgotPwdText}>
              {APP_STRINGS.FORGET_PASSWORD}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
