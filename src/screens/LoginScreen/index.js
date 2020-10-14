// React Imports
import React, { useState, useContext } from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView, Keyboard, StatusBar
} from 'react-native';

// App Imports
import { AppStrings } from '../../constants/AppStrings';
import { styles } from './styles';
import { log } from '../../utils/logger';
import { logo } from '../../assets/images';
import { Context as AuthContext } from '../../context/AuthContext';

// Components Import
import { Input } from '../../components';

// Constants
const APP_STRINGS = AppStrings.SCREENS.LOGIN;

const LoginScreen = () => {
  log.info('Login Screen!!');

  // Context and screen states
  const { state: { authErr }, signIn } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = (name, pwd) => {
    Keyboard.dismiss();
    signIn(name, pwd);
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
            onChangeText={(text) => { setUserName(text); }}
            value={userName}
          />
          <Input
            placeholder="Password"
            onChangeText={(text) => { setPassword(text); }}
            value={password}
            secureTextEntry
          />
          {(authErr) ? <Text style={styles.errorMsg}>{authErr}</Text> : null}
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
