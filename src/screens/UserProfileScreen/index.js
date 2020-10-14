import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '../../components';
import { AppMessages } from '../../constants/AppMessages';
import { AppStrings } from '../../constants/AppStrings';

// App Imports
import { Context as AuthContext } from '../../context/AuthContext';
import { styles } from './styles';

const APP_MSG = AppMessages.SCREENS.USER_PROFILE;
const APP_STRING = AppStrings.SCREENS.USER_PROFILE;

const UserProfileScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  return (
    <View
      style={styles.mainContainer}
    >
      <Header
        showBack
        showLogo
        showProfile={false}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.userProfileWrapper}>
        <Text style={styles.underConstruct}>{APP_MSG.UNDER_CONSTRUCTION}</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Text style={styles.signOut}>{APP_STRING.SIGN_OUT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfileScreen;
