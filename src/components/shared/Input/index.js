// React Imports
import React from 'react';
import { View, TextInput } from 'react-native';
import { log } from '../../../utils/logger';

// App Imports
import { styles } from './styles';

const Input = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry = false
}) => {
  log.info('Input component rendered...');
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default React.memo(Input);
