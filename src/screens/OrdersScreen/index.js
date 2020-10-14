import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { Context as AuthContext } from '../../context/AuthContext';
import { Header } from '../../components';
import { AppMessages } from '../../constants/AppMessages';
import { styles } from './styles';
import { Colors } from '../../themes';

const APP_MSG = AppMessages.SCREENS.ORDERS;

const OrdersScreen = ({ navigation }) => {
  const { state: { authName } } = useContext(AuthContext);
  return (
    <View
      style={styles.mainContainer}
    >
      <Header
        showBack={false}
        showLogo
        showProfile
      />
      <View style={styles.ordersScreenWrapper}>
        <View style={styles.userDetail}>
          <Text style={styles.userName}>{ authName }</Text>
          <Icon
            name="ellipsis-horizontal-outline"
            size={30}
            color={Colors.blue_grey}
          />
        </View>
      </View>
    </View>
  );
};

export default OrdersScreen;
