/* eslint-disable no-nested-ternary */
// React Imports
import React from 'react';
import {
  View, Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { log } from '../../utils/logger';
import { styles } from './styles';
import { Colors } from '../../themes';
import { AppMessages } from '../../constants/AppMessages';

const APP_MSG = AppMessages.COMPONENTS.VENDOR_PROFILE;

const VendorProfileDetails = ({
  vendorDetail
}) => {
  log.info('Vendor Profile details component rendered...');

  return (
    (vendorDetail) ? (
      <View style={styles.vendorProfileWrapper}>
        <View style={styles.imageAndStatusWrapper}>
          <View style={styles.imageWrapper} />
          <View>
            <View style={styles.statusWrapper}>
              <Text style={styles.labels}>
                {APP_MSG.WORK_STATUS}
              </Text>
              <Text style={[styles.content, styles.location]}>
                {`${vendorDetail.workStatus.location.city}, ${vendorDetail.workStatus.location.country}`}
              </Text>
              <Text style={styles.content}>
                {`${vendorDetail.workStatus.location.office}`}
              </Text>
              <Text style={styles.content}>
                {`${vendorDetail.workStatus.status}`}
              </Text>
            </View>
            <View style={styles.contractsAndMeetingWrapper}>
              <View style={styles.contractWrapper}>
                <Text style={styles.count}>{vendorDetail.workStatus.totalContracts}</Text>
                <Text style={styles.content}>{APP_MSG.CONTRACTS}</Text>
              </View>
              <View style={styles.contractWrapper}>
                <Text style={styles.count}>{vendorDetail.workStatus.totalMeetings}</Text>
                <Text style={styles.content}>{APP_MSG.MEETINGS}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.nameAndPositionWrapper}>
          <View>
            <Text style={styles.vendorName}>
              {vendorDetail.name}
            </Text>
            <Text style={styles.content}>
              {vendorDetail.position}
            </Text>
          </View>
          <Icon
            name="ellipsis-horizontal-outline"
            size={30}
            color={Colors.blue_grey}
          />
        </View>
      </View>
    ) : null
  );
};

export default React.memo(VendorProfileDetails);
