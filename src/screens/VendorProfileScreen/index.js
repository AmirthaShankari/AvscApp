import React, { useContext, useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, ActivityIndicator
} from 'react-native';

// App Imports
import { log } from '../../utils/logger';
import { Context as AuthContext } from '../../context/AuthContext';
import { styles } from './styles';
import VendorService from '../../services/VendorService';
import { Header, VendorProfileDetails } from '../../components';
import { AppStrings } from '../../constants/AppStrings';

const vendorService = new VendorService();
const APP_STRING = AppStrings.SCREENS.USER_PROFILE;

const VendorProfileScreen = ({ navigation }) => {
  // Context Declaration
  const { signOut } = useContext(AuthContext);

  // State Declaration
  const [vendorDetail, setVendorDetail] = useState('');

  // Effects Declaration
  // Fetching the Vendor profile details on initial load
  useEffect(() => {
    const fetchVendorProfileDetail = async () => {
      try {
        const vendorResp = await vendorService.fetchVendorProfileDetails();
        setVendorDetail(vendorResp);
      } catch (err) {
        log.error('Error fetching vendor profile details...');
      }
    };
    fetchVendorProfileDetail();
  }, []);

  return (
    <View
      style={[styles.mainContainer, styles.mainContainerStack]}
    >
      {(vendorDetail) ? (
        <ScrollView>
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
        </ScrollView>
      ) : <ActivityIndicator style={styles.inlineLoader} />}
    </View>
  );
};

export default VendorProfileScreen;
