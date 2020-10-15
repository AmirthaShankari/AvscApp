import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';
import { Context as AuthContext } from '../../context/AuthContext';
import { Header } from '../../components';
import { AppMessages } from '../../constants/AppMessages';
import { styles } from './styles';
import { Colors } from '../../themes';
// const ReactNativeSwipeableViewStack = require('react-native-swipeable-view-stack');

const APP_MSG = AppMessages.SCREENS.ORDERS;
// ReactNativeSwipeableViewStack();

const dataArray = [1, 2];

const OrdersScreen = ({ navigation }) => {
  const { state: { authName } } = useContext(AuthContext);

  const renderViewItem = (item) => (
    <View style={{
      width: 100, height: 200, backgroundColor: Colors.blue_grey
    }}
    >
      <Text>{item}</Text>
    </View>
  );

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
        <View style={styles.orderInsightWrapper}>
          <View>
            <Text>134</Text>
            <Text>{APP_MSG.ORDERS}</Text>
          </View>
          <View>
            <Text>634</Text>
            <Text>{APP_MSG.DAYS_ACTIVE}</Text>
          </View>
          <View>
            <Text>78%</Text>
            <Text>{APP_MSG.ORDERS_RATING}</Text>
          </View>
        </View>
        <ReactNativeSwipeableViewStack
          initialSelectedIndex={1}
          data={dataArray}
          renderItem={(element) => renderViewItem(element)}
          stackSpacing={20}
          useNativeDriver
        />
      </View>

    </View>
  );
};

export default OrdersScreen;
