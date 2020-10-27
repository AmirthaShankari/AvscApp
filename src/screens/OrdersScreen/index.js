import React, { useContext, useEffect, useState } from 'react';
import {
  View, Text, ActivityIndicator, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';
import { Context as AuthContext } from '../../context/AuthContext';
import { Header } from '../../components';
import { AppMessages } from '../../constants/AppMessages';
import { styles } from './styles';
import { Colors } from '../../themes';
import { AppConstants } from '../../constants/AppConstants';

const APP_MSG = AppMessages.SCREENS.ORDERS;
const APP_CONST = AppConstants;

const OrdersScreen = ({ navigation }) => {
  const [ordersDetail, setOrdersDetail] = useState();
  const { state: { authName } } = useContext(AuthContext);

  // Use effect declarations
  useEffect(() => {
    const data = {
      totalOrders: 134,
      activeDays: 634,
      rating: '78%',
      orders: [{
        key: '13174',
        status: 'Delivered',
        orderNumber: 13174,
        totals: '$349,99',
        items: [
          {
            id: '1',
            item: 'Parrot Summe T-shirt XXS'
          },
          {
            id: '2',
            item: 'Sunglasses'
          },
        ],
        delivery: {
          name: 'Ola Levinsky',
          addr1: '6 Sierpnia 1/20A',
          addr2: 'Warsaw, Poland'
        }
      },
      {
        key: '13175',
        status: 'Delivered',
        orderNumber: 13175,
        totals: '$349,99',
        items: [
          {
            id: '1',
            item: 'Parrot Summe T-shirt XXS'
          },
          {
            id: '2',
            item: 'Sunglasses'
          },
        ],
        delivery: {
          name: 'Ola Levinsky',
          addr1: '6 Sierpnia 1/20A',
          addr2: 'Warsaw, Poland'
        }
      }
      ]
    };
    setOrdersDetail(data);
  }, []);

  const renderViewItem = (order) => (!order ? <View style={{ width: 100, height: 100 }} /> : (
    <View style={styles.orderCard}>
      <View style={styles.orderCardHeader}>
        <View>
          <Text style={styles.cardHeaderLabel}>
            {APP_MSG.ORDER_NUMBER}
          </Text>
          <Text style={styles.orderNumber}>
            {order.orderNumber}
          </Text>
        </View>
        <View style={styles.statusWrapper}>
          <Text style={styles.cardHeaderLabel}>
            {APP_MSG.STATUS}
          </Text>
          <Text style={styles.orderStatus}>
            {order.status}
          </Text>
        </View>
        <View style={styles.logo} />
      </View>
      <View style={styles.cardSectionSeparator} />
      <View style={styles.itemsSummaryWrapper}>
        <View>
          <Text style={styles.cardHeading}>{APP_MSG.ITEMS}</Text>
          <FlatList
            data={order.items}
            keyExtractor={((item) => item.id)}
            renderItem={({ item }) => renderOrderItems(item)}
          />
        </View>
        <View>
          <Text style={styles.cardHeading}>{APP_MSG.SUMMARY}</Text>
          <Text style={styles.totals}>{order.totals}</Text>
        </View>
      </View>
      <View style={styles.cardSectionSeparator} />
      <View>
        <View style={styles.addrAndTracking}>
          <View>
            <Text style={styles.cardHeading}>{APP_MSG.DELIVERY}</Text>
            <Text style={styles.items}>{ordersDetail.orders[0].delivery.name}</Text>
            <Text style={styles.items}>{ordersDetail.orders[0].delivery.addr1}</Text>
            <Text style={styles.items}>{ordersDetail.orders[0].delivery.addr2}</Text>
          </View>
          <View>
            <View>
              <Text style={styles.cardHeading}>{APP_MSG.TRACKING}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardSectionSeparator} />
    </View>
  ));

  const renderOrderItems = (item) => (
    <Text style={styles.items}>{item.item}</Text>
  );

  return (
    <View
      style={styles.mainContainer}
    >
      <Header
        showBack={false}
        showLogo
        showProfile
        onProfilePress={() => { navigation.navigate(APP_CONST.ROUTES.VENDOR_PROFILE); }}
      />
      {(ordersDetail) ? (
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
            <View style={[styles.ordersInsight, styles.ordersCountWrapper]}>
              <Text style={styles.orderInsightVal}>{ordersDetail.totalOrders}</Text>
              <Text style={styles.orderInsightLabel}>{APP_MSG.ORDERS}</Text>
            </View>
            <View style={[styles.ordersInsight, styles.activeDaysWrapper]}>
              <Text style={styles.orderInsightVal}>{ordersDetail.activeDays}</Text>
              <Text style={styles.orderInsightLabel}>{APP_MSG.DAYS_ACTIVE}</Text>
            </View>
            <View style={[styles.ordersInsight, styles.ratingWrapper]}>
              <Text style={styles.orderInsightVal}>{ordersDetail.rating}</Text>
              <Text style={styles.orderInsightLabel}>{APP_MSG.ORDERS_RATING}</Text>
            </View>
          </View>
          <View style={{
            position: 'relative', flex: 1
          }}
          >
            <View style={{ position: 'absolute', bottom: -40, width: '100%' }}>
              <ReactNativeSwipeableViewStack
                initialSelectedIndex={0}
                data={ordersDetail.orders}
                renderItem={(element) => renderViewItem(element)}
                stackSpacing={40}
              />
            </View>
          </View>
        </View>
      ) : (
        <ActivityIndicator style={styles.inlineLoader} />
      )}
    </View>
  );
};

export default OrdersScreen;
