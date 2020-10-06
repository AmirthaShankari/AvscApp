// React Imports
import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

// App Imports
import { styles } from './styles';
import { log } from '../../../utils/logger';
import { logo } from '../../../assets/images';
import { Colors } from '../../../themes';

const Header = (
  {
    showBack = true,
    showLogo = true,
    showProfile = true
  }
) => {
  log.info('Header component rendered...');
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        disabled={!(showBack)}
        style={(showBack) ? styles.display : styles.hide}
      >
        <Icon name="arrow-back-outline" size={30} color={Colors.black} />
      </TouchableOpacity>
      <Image
        style={[styles.logoImg, (showLogo) ? styles.display : styles.hide]}
        source={logo}
        resizeMode="contain"
      />
      <TouchableOpacity
        disabled={!(showProfile)}
        style={(showProfile) ? styles.display : styles.hide}
      >
        <View style={styles.profile} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Header);
