import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header, VendorProfileDetails } from '../../components';
import { AppConstants } from '../../constants/AppConstants';
import { AppStrings } from '../../constants/AppStrings';

// App Imports
import { Context as AuthContext } from '../../context/AuthContext';
import { styles } from './styles';

const APP_STRING = AppStrings.SCREENS.USER_PROFILE;

const VendorProfileScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  // State Declaration
  const [vendorDetail, setVendorDetail] = useState('');

  // Effects Declaration
  useEffect(() => {
    setVendorDetail(AppConstants.DATA.CLIENT_PROFILE);
  }, []);

  return (
    <View
      style={[styles.mainContainer, styles.mainContainerStack]}
    >
      <View style={styles.headerWrapper}>
        <Header
          showBack
          showLogo={false}
          showProfile={false}
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <VendorProfileDetails vendorDetail={vendorDetail} />
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={styles.signOut}>{APP_STRING.SIGN_OUT}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VendorProfileScreen;
